"use client";
import useCustomTab from "./useCustomTab";
import { CustomTabProps } from "@/app/functions/interface";

const CustomTab = ({ tabItems, currentTab, setCurrentTab }: CustomTabProps) => {
  const { } = useCustomTab();
  return (
    <div>
      <div className="inline-flex flex-col  mt-2 mb-6 w-full  relative  ">
        <div className="inline-flex  justify-center bg-primary-foreground items-center text-primary shadow-sm rounded-lg ">
          {Object.keys(tabItems).map((key, index) => (
            <div
              key={key}
              onClick={() => setCurrentTab(key)}
              className={`${
                currentTab == key
                  ? "z-20 text-primary-foreground"
                  : "hover:bg-muted hover:text-primary"
              } w-full text-center px-3 text-foreground font-bold py-1 rounded-lg cursor-pointer ease-in-out duration-300 transition-all`}
            >
              {tabItems[key]}
            </div>
          ))}

          <div
            className={`absolute top-0 left-0 w-1/${
              Object.keys(tabItems).length
            } h-full transition-transform duration-300 
            ${Object.keys(tabItems)
              .map(
                (tabItem, index) =>
                  currentTab === tabItem &&
                  `${
                    index * 100 === 100
                      ? "translate-x-full"
                      : `translate-x-${index * 100}`
                  }`
              )
              .join(" ")}
              `}
          >
            <div className="bg-primary h-full text-primary-foreground font-bold py-1 rounded-lg cursor-pointer ease-in-out duration-300 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTab;
