type InputType =
  | "text"
  | "password"
  | "email"
  | "datetime"
  | "date"
  | "url"
  | "number";

type IconPosition = "left" | "right";
type ButtonType = "button" | "submit";

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
  tabItems:Record<string, string>[];
  action?: () => void;

}

export interface ButtonProps {
  icon?: any;
  label: string;
  showLoading?: boolean;
  type?: ButtonType;
  bgColor?: string;
  textColor?: string;
  handleClick: () => void;
}

export interface LoaderProps {
  color?: string;
  loading?: boolean;
  size?: number;
  fullScreen?: boolean;
}
