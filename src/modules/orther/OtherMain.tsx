import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { MoreOptions } from 'components/common';
import { Input } from 'components/input';
import { categoryActions, selectCategoryList } from 'features/category/categorySlice';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import slugify from 'slugify';

export function OtherMain() {
  const { control, watch, handleSubmit } = useForm({ mode: 'onSubmit' });

  const [currentCategory, setCurrentCategory] = useState<string>('Category');
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [kind, setKind] = useState<number>();

  const [categoryId, setCategoryId] = useState<string>('');

  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectCategoryList);

  useEffect(() => {
    async function fetchData() {
      await dispatch(categoryActions.fetchCategoryList());
    }
    fetchData();
  }, []);

  const handleSubmitCategory: SubmitHandler<FieldValues> = async (values) => {
    if (values.slugCategory === '') {
      values.slugCategory = slugify(values.nameCategory, {
        lower: true,
      });
    }
    if (kind === 1) {
      await dispatch(
        categoryActions.insertCategory({
          name: values.nameCategory,
          slug: values.slugCategory,
        })
      );
      await dispatch(categoryActions.fetchCategoryList());
    } else if (kind === 2 && categoryId?.length > 0) {
      await dispatch(
        categoryActions.updateCategory({
          id: categoryId,
          name: values.nameCategory,
          slug: values.slugCategory,
        })
      );
      await dispatch(categoryActions.fetchCategoryList());
    }
  };

  return (
    <div className="p-6 grid grid-cols-2 gap-6 border-l ">
      <div>
        <h1 className="text-xl font-semibold mb-5">Category</h1>
        <form onSubmit={handleSubmit(handleSubmitCategory)} className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="font-semibold text-dashboardPrimary">Select category</h2>
              <div
                onClick={() => setShowCategory(!showCategory)}
                className="relative z-10 flex flex-1 justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px] p-3"
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
                  } top-[100%] left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
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
                name="nameCategory"
                placeholder="Name Category"
                type="text"
                className="!border-dashboardPrimary text-dashboardPrimary bg-white"
              ></Input>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="font-semibold text-dashboardPrimary">Slug</h2>
              <Input
                control={control}
                name="slugCategory"
                placeholder="Slug Category"
                type="text"
                className="!border-dashboardPrimary text-dashboardPrimary bg-white"
              ></Input>
            </div>
            <div className="flex flex-col gap-4 flex-1"></div>
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
        </form>
      </div>
      <div>
        <MoreOptions categories={categories}></MoreOptions>
      </div>
    </div>
  );
}
