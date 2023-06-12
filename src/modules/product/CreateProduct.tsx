import { specificationsApi } from 'api/specificationsApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { ImageUpload } from 'components/common/ImageUpload';
import { Input } from 'components/input';
import { Select } from 'components/select';
import { categoryActions, selectCategoryList } from 'features/category/categorySlice';
import { detailConfigActions } from 'features/detailConfig/detailConfigSlice';
import { productAction, selectIdProduct } from 'features/product/productSlice';
import { selectTrademarkList, trademarkActions } from 'features/trademark/trademarkSlice';
import { storage } from 'firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import ImageUploader from 'quill-image-uploader';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';
import { toast } from 'react-toastify';
import slugify from 'slugify';

export interface CreateProductProps {}

Quill.register('modules/imageUploader', ImageUploader);

export function CreateProduct(_: CreateProductProps) {
  const { control, setValue, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
  });
  const [currentCategory, setcurrentCategory] = useState<string>('Category');

  const [showCategory, setShowCategory] = useState<boolean>(false);

  const [currentTrademark, setcurrentTrademark] = useState<string>('Trademark');
  const [showTrademark, setShowTrademark] = useState<boolean>(false);
  const trademarks = useAppSelector(selectTrademarkList);
  useEffect(() => {
    async function fetchData() {
      await dispatch(trademarkActions.fetchTrademarkList());
    }
    fetchData();
  }, []);

  const [trademarkValue, setTrademarkValue] = useState<string>('');
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [cpuValue, setCpuValue] = useState<string>('');
  const [vgaValue, setVgaValue] = useState<string>('');
  const [ramValue, setRamValue] = useState<string>('');
  const [screenValue, setScreenValue] = useState<string>('');
  const [osValue, setOSValue] = useState<string>('');
  const [colorValue, setColorValue] = useState<string>('');
  const [diskValue, setDiskValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectCategoryList);

  useEffect(() => {
    async function fetchData() {
      await dispatch(categoryActions.fetchCategoryList());
    }
    fetchData();
  }, []);

  const speRef = useRef<HTMLDivElement>(null);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const [currentSpe, setCurrentSpe] = useState<string>('Choose Specifications');
  const [speId, setSpeId] = useState<number>();

  const [imageUrl, setImageUrl] = useState<string>('');
  const uploadImage = async (file: File | null) => {
    if (!file) return;
    const imageRef = ref(storage, `products/${currentCategory}/${file.name}`);
    await uploadBytes(imageRef, file).then(() => {
      setLoadingImage(true);
    });

    await getDownloadURL(imageRef).then((url) => {
      setImageUrl(url);
      setLoadingImage(false);
    });
  };

  const handleOpenSpecifications = () => {
    const speElm = speRef.current;
    speElm?.classList.toggle('specifications');
  };

  const handleInsertSpe = async () => {
    try {
      const data: number = await specificationsApi.createSpecifications({
        IdCOLORInput: colorValue,
        IdCPUInput: cpuValue,
        IdDISKInput: diskValue,
        IdOSInput: osValue,
        IdRAMInput: ramValue,
        IdSCREENInput: screenValue,
        IdVGAInput: vgaValue,
      });
      if (data) {
        setSpeId(data);
        setCurrentSpe('Specifications just been choosed');
        const speElm = speRef.current;
        speElm?.classList.remove('specifications');
      }
    } catch (error) {
      console.log('handleInsertSpe ~ error:', error);
    }
  };

  const [content, setContent] = useState<string>('');

  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image'],
      ],
      imageUploader: {
        upload: async (file: File | null) => {
          if (!file) return;
          let imgUrl = '';
          const imageRef = ref(storage, `products/${currentCategory}/${file.name}`);
          await uploadBytes(imageRef, file).then(() => {
            setLoadingImage(true);
          });

          await getDownloadURL(imageRef).then((url) => {
            setImageUrl(url);
            setLoadingImage(false);
            imgUrl = url;
          });
          return imgUrl;
        },
      },
    }),
    []
  );

  useEffect(() => {
    if (categoryValue !== '' && trademarkValue !== '' && speId) {
      setValue('idCategory', categoryValue);
      setValue('idTrademark', trademarkValue);
      setValue('idSpecifications', speId);
    }
  }, [speId]);

  useEffect(() => {
    if (imageUrl.length > 0) {
      setValue('image', imageUrl);
    }
  }, [imageUrl]);

  useEffect(() => {
    if (content.length > 0) {
      setValue('content', content);
    }
  }, [content]);

  const idProduct = useAppSelector(selectIdProduct);

  useEffect(() => {
    (async () => {
      if (idProduct && content.trim().length > 0) {
        await dispatch(
          detailConfigActions.insertDetailConfig({ idProduct: idProduct + '', content })
        );
        setContent('');
      }
    })();
  }, [idProduct]);

  const handleCreateProduct: SubmitHandler<FieldValues> = async (values) => {
    if (
      (values.name.length > 0 && values.currentPrice.length > 0,
      content.trim().length > 0,
      imageUrl.length > 0)
    ) {
      values.slug = slugify(values.name, { lower: true });
      if (categoryValue !== '' && trademarkValue !== '' && speId) {
        console.log(values);
        await dispatch(
          productAction.createProduct({
            CurrentPriceInput: values.currentPrice,
            idCategoryInput: values.idCategory,
            IdSpecificationsInput: speId + '',
            IDTradeMarkInput: values.idTrademark,
            NameInput: values.name,
            SlugInput: values.slug,
            urlImageProductInput: values.image,
          })
        );
        reset({
          name: '',
          slug: '',
          currentPrice: '',
        });
        setImageUrl('');
        setCurrentSpe('Choose Specifications');
      } else {
        toast.error('Please choose the specifications!');
      }
    } else {
      toast.error('The form is not valid');
    }
  };

  return (
    <div className="p-6 pr-12 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold leading-7">Create New Product</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">
            Home {'>'} All Products {'>'} Create Product
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleCreateProduct)}
        className="p-6 bg-white rounded-2xl flex gap-12"
      >
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-lg text-dashboardPrimary">Name</h2>
              <Input
                control={control}
                name="name"
                placeholder="Name product"
                type="text"
                className="!border-dashboardPrimary text-dashboardPrimary "
              ></Input>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-lg text-dashboardPrimary">Slug</h2>
              <Input
                control={control}
                name="slug"
                placeholder="Slug product"
                type="text"
                className="!border-dashboardPrimary text-dashboardPrimary "
              ></Input>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-lg text-dashboardPrimary">Specifications</h2>
              <div
                onClick={handleOpenSpecifications}
                className="flex items-center justify-between border border-dashboardPrimary h-full rounded-lg p-3 hover:text-white hover:bg-dashboardPrimary cursor-pointer transition-all"
              >
                {currentSpe}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-lg text-dashboardPrimary">Current Price</h2>
              <Input
                control={control}
                name="currentPrice"
                placeholder="Current price"
                type="number"
                className="!border-dashboardPrimary text-dashboardPrimary "
              ></Input>
            </div>
          </div>
          <div
            ref={speRef}
            className="flex h-0 invisible overflow-auto customScroll flex-col gap-6 p-6 border border-dashboardPrimary rounded-lg transition-all duration-300"
          >
            <div className="flex gap-2 flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <h2 className="text-base font-semibold text-dashboardPrimary">Category</h2>
                <div
                  onClick={() => setShowCategory(!showCategory)}
                  className="relative h-full p-3  flex justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px] text-sm"
                >
                  {currentCategory}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  <div
                    className={`absolute ${
                      !showCategory && 'hidden'
                    } top-[100%] z-10 left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
                  >
                    {categories.map((item) => (
                      <div
                        key={item.ID}
                        onClick={() => {
                          setcurrentCategory(item.name);
                          setCategoryValue(item.ID + '');
                        }}
                        className="py-2 hover:bg-dashboardPrimary hover:text-white text-center text-sm"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h2 className="text-base font-semibold text-dashboardPrimary">Trademark</h2>
                <div
                  onClick={() => setShowTrademark(!showTrademark)}
                  className="relative h-full p-3 flex justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px] text-sm"
                >
                  {currentTrademark}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  <div
                    className={`absolute ${
                      !showTrademark && 'hidden'
                    } top-[100%] z-10 left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
                  >
                    {trademarks.map((item) => (
                      <div
                        key={item.ID}
                        onClick={() => {
                          setcurrentTrademark(item.name);
                          setTrademarkValue(item.ID);
                        }}
                        className="py-2 hover:bg-dashboardPrimary hover:text-white text-center text-sm"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Select
                title="Cpu"
                action={specificationsApi.getCpus()}
                setValue={setCpuValue}
                kind={1}
              ></Select>
            </div>
            <div className="flex gap-2 flex-1">
              <Select
                title="Vga"
                action={specificationsApi.getVgas()}
                setValue={setVgaValue}
                kind={2}
              ></Select>
              <Select
                title="Ram"
                action={specificationsApi.getRams()}
                setValue={setRamValue}
                kind={3}
              ></Select>
              <Select
                title="Screen"
                action={specificationsApi.getScreens()}
                setValue={setScreenValue}
                kind={4}
              ></Select>
            </div>
            <div className="flex gap-2 flex-1">
              <Select
                title="OS"
                action={specificationsApi.getOS()}
                setValue={setOSValue}
                kind={5}
              ></Select>
              <Select
                title="Color"
                action={specificationsApi.getColors()}
                setValue={setColorValue}
                kind={6}
              ></Select>
              <Select
                title="Disk"
                action={specificationsApi.getDisks()}
                setValue={setDiskValue}
                kind={7}
              ></Select>
            </div>
            <Button onClick={handleInsertSpe} kind="dashboardSecondary" className="mx-auto">
              Add
            </Button>
          </div>
          <div className="entry-content">
            <ReactQuill
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            ></ReactQuill>
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-[500px] mx-auto flex flex-col gap-6">
            <ImageUpload
              className="rounded-lg"
              imgUrl={imageUrl}
              loading={loadingImage}
              onChange={(e) => {
                if (e.target.files) {
                  uploadImage(e.target.files[0]);
                }
              }}
              removeImage={() => {
                setImageUrl('');
              }}
            ></ImageUpload>
          </div>
          <div className="flex mt-10 gap-4 justify-center">
            <Button type="submit" kind="dashboard" className="w-[140px] h-12 uppercase">
              Create
            </Button>
            <Button
              kind="dashboard"
              to="/dashboard/products"
              className="w-[140px] h-12 uppercase bg-white !text-dashboardPrimary border-solid !border-dashboardPrimary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
