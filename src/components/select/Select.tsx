import { specificationsApi } from 'api/specificationsApi';
import { Button } from 'components/button';
import { Specifications } from 'models';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { kindSpe } from 'utils/constant';

export interface SelectProps {
  className?: string;
  title: string;
  setValue?: Dispatch<SetStateAction<string>>;
  action: Promise<Specifications[]>;
  kind?: number;
  onSelect?: (name: string) => void;
  isReset?: boolean;
}

export function Select({
  className = '',
  title,
  action = new Promise(() => {}),
  kind,
  setValue = () => {},
  onSelect = (_: string) => {},
  isReset,
}: SelectProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [showValue, setShowValue] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>(title);

  const [list, setList] = useState<Specifications[]>();

  useEffect(() => {
    (async () => {
      const data: Specifications[] = await action;
      setList(data);
    })();
  }, []);

  const handleSearchItem = async () => {
    const input = inputRef.current;
    const value = input?.value;
    switch (kind) {
      case kindSpe.CPU:
        const cpus: Specifications[] = await specificationsApi.getCpus(value);
        setList(cpus);
        break;
      case kindSpe.VGA:
        const vgas: Specifications[] = await specificationsApi.getVgas(value);
        setList(vgas);
        break;
      case kindSpe.RAM:
        const rams: Specifications[] = await specificationsApi.getRams(value);
        setList(rams);
        break;
      case kindSpe.SCREEN:
        const screens: Specifications[] = await specificationsApi.getScreens(value);
        setList(screens);
        break;
      case kindSpe.OS:
        const os: Specifications[] = await specificationsApi.getOS(value);
        setList(os);
        break;
      case kindSpe.COLOR:
        const colors: Specifications[] = await specificationsApi.getColors(value);
        setList(colors);
        break;
      case kindSpe.DISK:
        const disks: Specifications[] = await specificationsApi.getDisks(value);
        setList(disks);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (isReset) {
      setCurrentValue(title);
    }
  }, [isReset]);

  return (
    <div className={`flex flex-col gap-2 flex-1 ${className}`}>
      <h2 className="text-base font-semibold text-dashboardPrimary">{title}</h2>
      <div className="relative">
        <div
          onClick={() => setShowValue(!showValue)}
          className="h-full p-3  flex justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px] text-sm"
        >
          {currentValue}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
        <div
          className={`absolute ${
            !showValue && 'hidden'
          } top-[100%] z-10 left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
        >
          <div className="flex gap-1 p-2 sticky top-0 left-0 right-0 bg-white">
            <input
              type="text"
              className="rounded-lg w-full !p-2 text-sm border border-dashboardSecondary"
              placeholder="Search"
              ref={inputRef}
            />
            <Button kind="dashboardSecondary" onClick={handleSearchItem} className="!min-h-[32px]">
              Search
            </Button>
          </div>
          {list?.map((item) => (
            <div
              key={item.ID}
              onClick={() => {
                setCurrentValue(item.name);
                setValue(item.ID);
                setShowValue(false);
                onSelect(item.name);
              }}
              className="py-2 hover:bg-dashboardPrimary hover:text-white text-center text-sm cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
