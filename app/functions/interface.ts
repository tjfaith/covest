import { ButtonType, IconPosition, InputType } from "@/app/functions/types";


export interface CustomInputProps {
  icon?: any;
  label?: string;
  iconPosition?: IconPosition;
  isPassword?: boolean;
  placeholder?: string;
  inputType: InputType;
  error?: boolean;
  value?: string;
  errorMessage?: string;
  labelColor?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  customStyle?:string;
  disableInput?:boolean;
  maxValue?:number
  handleChange: (e: string) => void;
}

export interface CustomSelectProps {
  label?: string;
  error?: boolean;
  data: any;
  value: string;
  errorMessage?: string;
  defaultText: string;
  labelColor?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  handleChange: (e: string) => void;
}

export interface CustomTextareaProps {
  icon?: any;
  label?: string;
  iconPosition?: IconPosition;
  isPassword?: boolean;
  placeholder?: string;
  error?: boolean;
  value?: string;
  errorMessage?: string;
  labelColor?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  handleChange: (e: string) => void;
}

export interface PaginationProps {
  totalItem: number;
  currentPage: number;
  itemsPerPage: Number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ConfirmAlertProps {
  title: string;
  description: string;
  confirmBtnText: string;
  loading?: boolean;
  confirmFunction: () => void;
  setShowConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CustomTabProps{
  tabItems:Record<string, string>;
  currentTab:string,
  setCurrentTab:React.Dispatch<React.SetStateAction<string>>;
}



export interface ButtonProps {
  icon?: any;
  label: string;
  showLoading?: boolean;
  type?: ButtonType;
  bgColor?: string;
  textColor?: string;
  customStyle?:string;
  handleClick: () => void;
}

export interface LoaderProps {
  color?: string;
  loading?: boolean;
  size?: number;
  fullScreen?: boolean;
  background?:string;
}

export type PropertyType = 'general' | 'land';

export interface PropertyInstance {
  total_units_sold?:number;
  total_units?: number;
  id?:string;
  property_id?: string;
  images_to_delete?: string[] | undefined;
  title?: string | undefined;
  description?: string | undefined;
  price?: string | number | undefined;
  images?: any;
  property_type?: PropertyType | undefined;
  property_details?: string;
  retailer_id?: string | undefined;
};

export interface PropertyPaymentDetails{
  noOfUnit:number;
  totalAmountPayable:number
  estimateROI:number
  propertyId:string
}
