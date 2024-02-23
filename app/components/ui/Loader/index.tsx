import { BounceLoader } from "react-spinners";
import { LoaderProps } from "@/app/functions/interface";


const Loader = ({
  color = "green",
  loading = true,
  size = 6,
  fullScreen = false,
}: LoaderProps) => {
  return (
    <div
      className={`${
        fullScreen &&
        "flex items-center justify-center h-full w-full absolute top-0 bottom-0 left-0 right-0 bg-black/50"
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
