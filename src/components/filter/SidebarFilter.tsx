import { specificationsApi } from 'api/specificationsApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { Checkbox } from 'components/checkbox';
import { Select } from 'components/select';
import { categoryActions, selectCategoryList } from 'features/category/categorySlice';
import { selectTrademarkList, trademarkActions } from 'features/trademark/trademarkSlice';
import { ListParams } from 'models';
import { useEffect, useState } from 'react';
import { active, kindSpe } from 'utils/constant';
import { ChooseFilter } from '.';

export interface SidebarFillterProps {
  params: ListParams;
  setParams: (params: ListParams) => {};
}

export function SidebarFilter({ params, setParams }: SidebarFillterProps) {
  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectCategoryList);
  const trademarks = useAppSelector(selectTrademarkList);

  useEffect(() => {
    async function fetchData() {
      await dispatch(categoryActions.fetchCategoryList());
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(trademarkActions.fetchTrademarkList());
  }, []);

  const [checkedCategory, setCheckedCategory] = useState<number>(0);
  const [checkedTrademark, setCheckedTrademark] = useState<number>(0);
  const [isReset, setIsReset] = useState(false);

  const handleResetFilter = async () => {
    setCheckedCategory(0);
    setCheckedTrademark(0);
    setParams({ limit: 6, page: 1, idStatusProductInput: active.PUBLIC });
    setIsReset(true);
  };

  return (
    <div className="w-[240px] hidden xl:flex flex-col gap-5">
      <ChooseFilter title="Category">
        {categories.map((item) => {
          return (
            <Checkbox
              key={item.ID}
              handleValue={() => {
                setParams({ ...params, nameCategoryInput: item.name });
                setCheckedCategory(Number(item.ID));
              }}
              checked={checkedCategory === Number(item.ID)}
            >
              {item.name}
            </Checkbox>
          );
        })}
      </ChooseFilter>
      <ChooseFilter title="Trademark">
        {trademarks.map((item) => {
          return (
            <Checkbox
              key={item.ID}
              handleValue={() => {
                setParams({ ...params, nameTradeMarkInput: item.name });
                setCheckedTrademark(Number(item.ID));
              }}
              checked={checkedTrademark === Number(item.ID)}
            >
              {item.name}
            </Checkbox>
          );
        })}
      </ChooseFilter>
      <ChooseFilter isHide={true} title="Specifications" className="h-auto">
        <Select
          title={'Cpu'}
          action={specificationsApi.getCpus()}
          kind={kindSpe.CPU}
          onSelect={(name) => {
            setParams({ ...params, nameCpuInput: name });
          }}
          isReset={isReset}
        ></Select>
        <Select
          title={'Ram'}
          action={specificationsApi.getRams()}
          kind={kindSpe.RAM}
          onSelect={(name) => {
            setParams({ ...params, nameRamInput: name });
          }}
          isReset={isReset}
        ></Select>
        <Select
          title={'Disk'}
          action={specificationsApi.getDisks()}
          kind={kindSpe.DISK}
          onSelect={(name) => {
            setParams({ ...params, nameDiskInput: name });
          }}
          isReset={isReset}
        ></Select>
        <Select
          title={'Vga'}
          action={specificationsApi.getVgas()}
          kind={kindSpe.VGA}
          onSelect={(name) => {
            setParams({ ...params, nameVgaInput: name });
          }}
          isReset={isReset}
        ></Select>
        <Select
          title={'Screen'}
          action={specificationsApi.getScreens()}
          kind={kindSpe.SCREEN}
          onSelect={(name) => {
            setParams({ ...params, nameScreenInput: name });
          }}
          isReset={isReset}
        ></Select>
        <Select
          title={'Color'}
          action={specificationsApi.getColors()}
          kind={kindSpe.COLOR}
          onSelect={(name) => {
            setParams({ ...params, nameColorInput: name });
          }}
          isReset={isReset}
        ></Select>
        <Select
          title={'OS'}
          action={specificationsApi.getOS()}
          kind={kindSpe.OS}
          onSelect={(name) => {
            setParams({ ...params, nameOsInput: name });
          }}
          isReset={isReset}
        ></Select>
      </ChooseFilter>
      <Button onClick={handleResetFilter} className="mx-auto">
        Reset
      </Button>
    </div>
  );
}
