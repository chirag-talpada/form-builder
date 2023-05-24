import { FieldErrors, UseFormRegister } from "react-hook-form";

export type Control_Props = {
  attributes:{
    name:string,
    desc?:string
  }[];
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

export type Checkbox_Props = {
  attributes:
    | (
        | {
            name: string;
            default?: boolean;
          }
        | {
            name: string;
            default: boolean;
          }
      )[]
    | {
        name: string;
        default: boolean;
      }[];
  register: UseFormRegister<any>;
};

export type Text_feild_props = {
  data?: {
    label_Name?: string;
    Disabled?: boolean;
    Placeholder?: string;
    Read_Only?: boolean;
    Required?: boolean;
    css_class?: string;
    default_Value?: string;
    name?: string;
    Rows?:number
  };
  index:number
};
