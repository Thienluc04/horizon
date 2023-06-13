import { specificationsApi } from 'api/specificationsApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { Checkbox } from 'components/checkbox';
import { Select } from 'components/select';
import { categoryActions, selectCategoryList } from 'features/category/categorySlice';
import { selectTrademarkList, trademarkActions } from 'features/trademark/trademarkSlice';
import { ListParams, Specifications } from 'models';
import { memo, useEffect, useState } from 'react';
import { active, kindSpe } from 'utils/constant';
import { ChooseFilter } from '.';

export interface SidebarFillterProps {
  params: ListParams;
  setParams: (params: ListParams) => {};
}

function SidebarFilterFunc({ params, setParams }: SidebarFillterProps) {
  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectCategoryList);
  const trademarks = useAppSelector(selectTrademarkList);

  const [cpuList, setCpuList] = useState<Specifications[]>();
  const [ramList, setRamList] = useState<Specifications[]>();
  const [diskList, setDiskList] = useState<Specifications[]>();
  const [vgaList, setVgaList] = useState<Specifications[]>();
  const [screenList, setScreenList] = useState<Specifications[]>();
  const [colorList, setColorList] = useState<Specifications[]>();
  const [osList, setOSList] = useState<Specifications[]>();

  useEffect(() => {
    dispatch(categoryActions.fetchCategoryList());
  }, []);

  useEffect(() => {
    dispatch(trademarkActions.fetchTrademarkList());
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await specificationsApi.getCpus();
      setCpuList(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await specificationsApi.getRams();
      setRamList(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await specificationsApi.getDisks();
      setDiskList(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await specificationsApi.getVgas();
      setVgaList(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await specificationsApi.getScreens();
      setScreenList(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await specificationsApi.getColors();
      setColorList(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await specificationsApi.getOS();
      setOSList(data);
    }

    fetchData();
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
          kind={kindSpe.CPU}
          onSelect={(name) => {
            setParams({ ...params, nameCpuInput: name });
          }}
          isReset={isReset}
          data={cpuList}
        ></Select>
        <Select
          title={'Ram'}
          kind={kindSpe.RAM}
          onSelect={(name) => {
            setParams({ ...params, nameRamInput: name });
          }}
          isReset={isReset}
          data={ramList}
        ></Select>
        <Select
          title={'Disk'}
          kind={kindSpe.DISK}
          onSelect={(name) => {
            setParams({ ...params, nameDiskInput: name });
          }}
          isReset={isReset}
          data={diskList}
        ></Select>
        <Select
          title={'Vga'}
          kind={kindSpe.VGA}
          onSelect={(name) => {
            setParams({ ...params, nameVgaInput: name });
          }}
          isReset={isReset}
          data={vgaList}
        ></Select>
        <Select
          title={'Screen'}
          kind={kindSpe.SCREEN}
          onSelect={(name) => {
            setParams({ ...params, nameScreenInput: name });
          }}
          isReset={isReset}
          data={screenList}
        ></Select>
        <Select
          title={'Color'}
          kind={kindSpe.COLOR}
          onSelect={(name) => {
            setParams({ ...params, nameColorInput: name });
          }}
          isReset={isReset}
          data={colorList}
        ></Select>
        <Select
          title={'OS'}
          kind={kindSpe.OS}
          onSelect={(name) => {
            setParams({ ...params, nameOsInput: name });
          }}
          isReset={isReset}
          data={osList}
        ></Select>
      </ChooseFilter>
      <Button onClick={handleResetFilter} className="mx-auto">
        Reset
      </Button>
    </div>
  );
}

export const SidebarFilter = memo(SidebarFilterFunc);
