import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { Radio } from 'components/checkbox';
import { Input } from 'components/input';
import { categoryActions, selectCategoryList } from 'features/category/categorySlice';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { active } from 'utils/constant';

export function OtherMain() {
  const { control, watch } = useForm({ mode: 'onSubmit' });

  const [currentCategory, setCurrentCategory] = useState<string>('Category');
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [, setCategoryValue] = useState<string>('-1');

  const watchStatusCategory = watch('statusCategory');

  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectCategoryList);

  useEffect(() => {
    async function fetchData() {
      await dispatch(categoryActions.fetchCategoryList());
    }
    fetchData();
  }, []);

  const handleAddNewCategory = () => {};

  return (
    <div className="bg-[#E7E7E3] p-6 grid grid-cols-2 gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)]">
      <div>
        <h1 className="text-xl font-semibold mb-5">Category</h1>
        <form className="flex flex-col gap-5">
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
                        setCategoryValue(item.ID);
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
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="font-semibold text-dashboardPrimary">Status</h2>
              <div className="flex flex-wrap gap-5 flex-1 items-center">
                <Radio
                  name="statusCategory"
                  control={control}
                  checked={watchStatusCategory === active.PUBLIC}
                  value={active.PUBLIC + ''}
                  dashboard
                  className="!border-dashboardPrimary"
                >
                  Public
                </Radio>
                <Radio
                  name="statusCategory"
                  control={control}
                  checked={watchStatusCategory === active.PRIVATE}
                  value={active.PRIVATE + ''}
                  dashboard
                  className="!border-dashboardPrimary"
                >
                  Private
                </Radio>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <Button
              onClick={handleAddNewCategory}
              kind="dashboardSecondary"
              className="min-w-[100px]"
            >
              Add
            </Button>
            <Button kind="dashboard" className="min-w-[100px]">
              Update
            </Button>
            <Button kind="dashboard" className="!bg-[#D00000] min-w-[100px]">
              Delete
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
