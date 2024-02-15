"use client";
import useCustomTab from "./useCustomTab";

const CustomTab = () => {
  const { currentTab, setCurrentTab } = useCustomTab();
  return (
    <div>
      <div className="inline-flex flex-col  mt-2 mb-6 w-full  relative ">
        <div className="inline-flex  justify-center bg-primary-foreground items-center text-primary shadow-sm rounded-lg ">
          <div
            onClick={() => setCurrentTab("profile")}
            className={`${
              currentTab == "profile" ? "z-20 text-primary-foreground": 'hover:bg-muted hover:text-primary'
            } w-full text-center  px-3 text-foreground font-bold py-1 rounded-lg cursor-pointer ease-in-out duration-300 transition-all`}
          >
            Profile
          </div>
          <div
            onClick={() => setCurrentTab("next_of_kin")}
            className={`${
                currentTab == "next_of_kin" ? "z-20 text-primary-foreground" :'hover:bg-muted hover:text-primary'
              }  w-full text-center px-3 text-foreground rounded-lg font-bold py-1 cursor-pointer ease-in-out duration-300 transition-all`}
          >
            Next of Kin
          </div>
          <div
            onClick={() => setCurrentTab("security")}
            className={`${
                currentTab == "security" ? "z-20 text-primary-foreground" : 'hover:bg-muted hover:text-primary'
              } text-center w-full px-3 text-foreground rounded-lg font-bold py-1 cursor-pointer ease-in-out duration-300 transition-all`}
          >
            Security
          </div>

          <div
            className={`absolute top-0 left-0 w-1/3 h-full   transition-transform duration-300  
              ${currentTab == "profile" && "translate-x-0"} 
              ${currentTab == "next_of_kin" && " translate-x-full "} 
              ${currentTab == "security" && " translate-x-200 "} 
              `}
          >
            <div className="bg-primary h-full  text-primary-foreground font-bold py-1 rounded-lg cursor-pointer ease-in-out duration-300 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTab;
