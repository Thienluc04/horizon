import { PropsWithChildren, useRef, useState } from 'react';

export interface ChooseFilterProps {
  title: string;
  className?: string;
  isHide?: boolean;
}

export function ChooseFilter({
  title,
  children,
  className = '',
  isHide = false,
}: PropsWithChildren<ChooseFilterProps>) {
  const chooseOption = useRef<HTMLDivElement>(null);
  const [isHideOption, setIsHideOption] = useState(isHide);

  const toggleClose = () => {
    if (chooseOption.current) {
      const choose = chooseOption.current;
      setIsHideOption(!isHideOption);
      choose.classList.toggle('hideChoose');
    }
  };
  return (
    <div className="flex flex-col border-t border-[#DEE2E7]">
      <div className="flex justify-between items-center py-3">
        <h2
          className="text-dark font-semibold leading-5 cursor-pointer"
          onClick={() => toggleClose()}
        >
          {title}
        </h2>
        <span onClick={() => toggleClose()} className="cursor-pointer">
          {isHideOption ? (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                fill="#8B96A5"
              />
            </svg>
          ) : (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.295044L0 6.29504L1.41 7.70504L6 3.12504L10.59 7.70504L12 6.29504L6 0.295044Z"
                fill="#8B96A5"
              />
            </svg>
          )}
        </span>
      </div>
      <div
        ref={chooseOption}
        className={`flex flex-col gap-2 h-[150px] transition-all duration-300 overflow-auto customScroll ${
          isHide && 'hideChoose'
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
