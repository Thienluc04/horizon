import { specificationsApi } from 'api/specificationsApi';
import { trademarkApi } from 'api/trademarkApi';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Category, OptionValues } from 'models';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { status } from 'utils/constant';

interface MoreOptionProps {
  categories: Category[];
}

const moreOptions = [
  {
    id: 1,
    name: 'Trademark',
  },
  {
    id: 2,
    name: 'Cpu',
  },
  {
    id: 3,
    name: 'Ram',
  },
  {
    id: 4,
    name: 'Disk',
  },
  {
    id: 5,
    name: 'Vga',
  },
  {
    id: 6,
    name: 'Screen',
  },
  {
    id: 7,
    name: 'Color',
  },
  {
    id: 8,
    name: 'OS',
  },
];

export function MoreOptions({ categories }: MoreOptionProps) {
  const { control, handleSubmit, reset } = useForm({ mode: 'onSubmit' });

  const [currentOption, setCurrentOption] = useState<string>('Choose option');
  const [showOption, setShowOption] = useState<boolean>(false);
  const [optionId, setOptionId] = useState<string>('');

  const [currentCategory, setCurrentCategory] = useState<string>('Category');
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<string>('');

  const [currentItem, setCurrentItem] = useState<string>('Choose Item');
  const [showItem, setShowItem] = useState<boolean>(false);
  const [itemId, setItemId] = useState<string>('');

  const [kind, setKind] = useState<number>();

  const [listItem, setListItem] = useState<any[]>([]);

  const chooseOption = async (id: string, kind: number, values: OptionValues) => {
    if (kind === 1) {
      switch (id) {
        case '1':
          const trademarkResponse = await trademarkApi.insertTrademark({
            idCategory: values.categoryId,
            name: values.name,
          });
          if (trademarkResponse === status.OK) {
            const trademarks = await trademarkApi.getAll();
            setListItem(trademarks);
            toast.success('Insert new trademark success!');
          } else {
            toast.error('Something went wrong!');
          }
          break;
        case '2':
          const cpuResponse = await specificationsApi.insertCpu({
            idCategory: values.categoryId,
            name: values.name,
          });
          if (cpuResponse === status.OK) {
            const cpus = await specificationsApi.getCpus();
            setListItem(cpus);
            toast.success('Insert new cpu success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '3':
          const ramResponse = await specificationsApi.insertRam({
            idCategory: values.categoryId,
            name: values.name,
          });
          if (ramResponse === status.OK) {
            const rams = await specificationsApi.getRams();
            setListItem(rams);
            toast.success('Insert new ram success!');
          } else {
            toast.error('Something went wrong!');
          }
          break;
        case '4':
          const diskResponse = await specificationsApi.insertDisk({
            idCategory: values.categoryId,
            name: values.name,
          });
          if (diskResponse === status.OK) {
            const disks = await specificationsApi.getDisks();
            setListItem(disks);
            toast.success('Insert new disk success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '5':
          const vgaResponse = await specificationsApi.insertVga({
            idCategory: values.categoryId,
            name: values.name,
          });
          if (vgaResponse === status.OK) {
            const vgas = await specificationsApi.getVgas();
            setListItem(vgas);
            toast.success('Insert new vga success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '6':
          const screenResponse = await specificationsApi.insertScreen({
            idCategory: values.categoryId,
            name: values.name,
          });
          if (screenResponse === status.OK) {
            const screens = await specificationsApi.getScreens();
            setListItem(screens);
            toast.success('Insert new screen success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '7':
          const colorResponse = await specificationsApi.insertColor({
            idCategory: values.categoryId,
            name: values.name,
          });
          if (colorResponse === status.OK) {
            const colors = await specificationsApi.getColors();
            setListItem(colors);
            toast.success('Insert new color success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '8':
          const osResponse = await specificationsApi.insertOS({
            idCategory: values.categoryId,
            name: values.name,
          });
          if (osResponse === status.OK) {
            const os = await specificationsApi.getOS();
            setListItem(os);
            toast.success('Insert new OS success!');
          } else {
            toast.error('Something went wrong!');
          }
          break;
      }
    } else if (kind === 2) {
      switch (id) {
        case '1':
          const trademarkResponse = await trademarkApi.updateTrademark({
            id: values.itemId,
            idCategory: values.categoryId,
            name: values.name,
          });
          if (trademarkResponse === status.OK) {
            const trademarks = await trademarkApi.getAll();
            setListItem(trademarks);
            toast.success('Update trademark success!');
          } else {
            toast.error('Something went wrong!');
          }
          break;
        case '2':
          const cpuResponse = await specificationsApi.updateCpu({
            id: values.itemId,
            idCategory: values.categoryId,
            name: values.name,
          });
          if (cpuResponse === status.OK) {
            const cpus = await specificationsApi.getCpus();
            setListItem(cpus);
            toast.success('Update cpu success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '3':
          const ramResponse = await specificationsApi.updateRam({
            id: values.itemId,
            idCategory: values.categoryId,
            name: values.name,
          });
          if (ramResponse === status.OK) {
            const rams = await specificationsApi.getRams();
            setListItem(rams);
            toast.success('Update ram success!');
          } else {
            toast.error('Something went wrong!');
          }
          break;
        case '4':
          const diskResponse = await specificationsApi.updateDisk({
            id: values.itemId,

            idCategory: values.categoryId,
            name: values.name,
          });
          if (diskResponse === status.OK) {
            const disks = await specificationsApi.getDisks();
            setListItem(disks);
            toast.success('Update disk success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '5':
          const vgaResponse = await specificationsApi.updateVga({
            id: values.itemId,

            idCategory: values.categoryId,
            name: values.name,
          });
          if (vgaResponse === status.OK) {
            const vgas = await specificationsApi.getVgas();
            setListItem(vgas);
            toast.success('Update vga success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '6':
          const screenResponse = await specificationsApi.updateScreen({
            id: values.itemId,

            idCategory: values.categoryId,
            name: values.name,
          });
          if (screenResponse === status.OK) {
            const screens = await specificationsApi.getScreens();
            setListItem(screens);
            toast.success('Update screen success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '7':
          const colorResponse = await specificationsApi.updateColor({
            id: values.itemId,

            idCategory: values.categoryId,
            name: values.name,
          });
          if (colorResponse === status.OK) {
            const colors = await specificationsApi.getColors();
            setListItem(colors);
            toast.success('Update color success!');
          } else {
            toast.error('Something went wrong!');
          }

          break;
        case '8':
          const osResponse = await specificationsApi.updateOS({
            id: values.itemId,
            idCategory: values.categoryId,
            name: values.name,
          });
          if (osResponse === status.OK) {
            const os = await specificationsApi.getOS();
            setListItem(os);
            toast.success('Update OS success!');
          } else {
            toast.error('Something went wrong!');
          }
          break;
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (optionId.length > 0) {
        switch (optionId) {
          case '1':
            const trademarks = await trademarkApi.getAll();
            setListItem(trademarks);
            break;
          case '2':
            const cpus = await specificationsApi.getCpus();
            setListItem(cpus);

            break;
          case '3':
            const rams = await specificationsApi.getRams();
            setListItem(rams);
            break;
          case '4':
            const disks = await specificationsApi.getDisks();
            setListItem(disks);

            break;
          case '5':
            const vgas = await specificationsApi.getVgas();
            setListItem(vgas);

            break;
          case '6':
            const screens = await specificationsApi.getScreens();
            setListItem(screens);

            break;
          case '7':
            const colors = await specificationsApi.getColors();
            setListItem(colors);

            break;
          case '8':
            const os = await specificationsApi.getOS();
            setListItem(os);
            break;
        }
      }
    }
    fetchData();
  }, [optionId]);

  const handleSubmitOption: SubmitHandler<FieldValues> = async (values) => {
    if (optionId) {
      if (kind === 1) {
        const name: string = values.name;
        await chooseOption(optionId, kind, { optionId, categoryId, itemId, name });
        reset({
          name: '',
        });
        setCurrentOption('Choose option');
        setCurrentItem('Choose item');
        setCurrentCategory('Choose category');
      } else if (kind === 2) {
        const name: string = values.name;
        await chooseOption(optionId, kind, { optionId, categoryId, itemId, name });
        reset({
          name: '',
        });
        setCurrentOption('Choose option');
        setCurrentItem('Choose item');
        setCurrentCategory('Choose category');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitOption)}>
      <h1 className="text-xl font-semibold mb-5">Another</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-semibold text-dashboardPrimary">Select options</h2>
            <div
              onClick={() => setShowOption(!showOption)}
              className="relative z-10 flex flex-1 justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px] min-h-[48px] p-3"
            >
              {currentOption}
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
                  !showOption && 'hidden'
                } top-[100%] left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
              >
                {moreOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setCurrentOption(item.name);
                      setOptionId(item.id + '');
                    }}
                    className="py-2 hover:bg-dashboardPrimary hover:text-white text-left px-2"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-semibold text-dashboardPrimary">Select item</h2>
            <div
              onClick={() => setShowItem(!showItem)}
              className="relative flex flex-1 justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px] p-3"
            >
              {currentItem}
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
                  !showItem && 'hidden'
                } top-[100%] z-10  left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
              >
                {listItem.map((item) => (
                  <div
                    key={item.ID}
                    onClick={() => {
                      setCurrentItem(item.name);
                      setItemId(item.ID + '');
                    }}
                    className="py-2 hover:bg-dashboardPrimary hover:text-white text-left px-2"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-semibold text-dashboardPrimary">Select category</h2>
            <div
              onClick={() => setShowCategory(!showCategory)}
              className="relative flex flex-1 justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px] p-3"
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
                } top-[100%] z-9  left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
              >
                {categories.map((item) => (
                  <div
                    key={item.ID}
                    onClick={() => {
                      setCurrentCategory(item.name);
                      setCategoryId(item.ID + '');
                    }}
                    className="py-2 hover:bg-dashboardPrimary hover:text-white text-left px-2"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-semibold text-dashboardPrimary">Name</h2>
            <Input
              control={control}
              name="name"
              placeholder="Name"
              type="text"
              className="!border-dashboardPrimary text-dashboardPrimary bg-white"
            ></Input>
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            onClick={() => setKind(1)}
            kind="dashboardSecondary"
            className="min-w-[100px]"
            type="submit"
          >
            Add
          </Button>
          <Button
            kind="dashboard"
            type="submit"
            onClick={() => setKind(2)}
            className="min-w-[100px]"
          >
            Update
          </Button>
        </div>
      </div>
    </form>
  );
}
