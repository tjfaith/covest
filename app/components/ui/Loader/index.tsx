import { BounceLoader } from "react-spinners";
import { LoaderProps } from "@/app/functions/interface";


const Loader = ({
  color = "green",
  loading = true,
  size = 6,
  fullScreen = false,
  background='bg-black/50'
}: LoaderProps) => {
  return (
    <div
      className={`${
        fullScreen &&
        `flex items-center z-30 justify-center h-full w-full absolute top-0 bottom-0 left-0 right-0 ${background}`
      }`}
    >
      <BounceLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};



export default Loader;
