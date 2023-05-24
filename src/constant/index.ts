import { BsTerminal,BsTelephone,BsTextareaResize,BsCalendarDate,BsFileEarmarkArrowDown } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { MdPassword,MdRadioButtonChecked,MdEmail } from "react-icons/md";
import { RiCheckboxLine } from "react-icons/ri";
import { TbSelect } from "react-icons/tb";
import { VscSymbolColor } from "react-icons/vsc";
import { BiHide,BiTime } from "react-icons/bi";
import { CgLoadbarAlt } from "react-icons/cg";
import { RxButton } from "react-icons/rx";


export enum Control_Type{
    TEXT_FIELD ='Text Field',
    TEXT_AREA='Text Area',
    NUMBER='Number',
    PASSWORD='Password',
    CHECK_BOX='Check Box',
    SELECT_BOX='Select Box',
    RADIO='Radio',
    EMAIL='Email',
    DATE='Date',
    FILE='File',
    COLOR='Color',
    HIDDEN='Hidden',
    RANGE='Range',
    PHONE_NUMBER='Phone Number',
    TIME='Time',
    BUTTON='Button'  
}

export enum Basic_Type{
    STRING='string',
    BOOLEAN='boolean',
}

export const controls = [
  {
    label: Control_Type.TEXT_FIELD,
    Icon:  BsTerminal,
  },
  {
    label: Control_Type.TEXT_AREA,
    Icon:  BsTextareaResize,
  },
  {
    label: Control_Type.NUMBER,
    Icon:  FaHashtag,
  },
  {
    label: Control_Type.PASSWORD,
    Icon:  MdPassword,
  },
  {
    label: Control_Type.CHECK_BOX,
    Icon:  RiCheckboxLine,
  },
  {
    label: Control_Type.SELECT_BOX,
    Icon:  TbSelect,
  },
  {
    label: Control_Type.RADIO,
    Icon:  MdRadioButtonChecked,
  },
  {
    label: Control_Type.EMAIL,
    Icon:  MdEmail,
  },
  {
    label: Control_Type.DATE,
    Icon:  BsCalendarDate,
  },
  {
    label: Control_Type.FILE,
    Icon:  BsFileEarmarkArrowDown,
  },
  {
    label: Control_Type.COLOR,
    Icon:  VscSymbolColor,
  },
  {
    label: Control_Type.HIDDEN,
    Icon:  BiHide,
  },
  {
    label: Control_Type.RANGE,
    Icon:  CgLoadbarAlt,
  },
  {
    label: Control_Type.PHONE_NUMBER,
    Icon:  BsTelephone,
  },
  {
    label: Control_Type.TIME,
    Icon:  BiTime,
  },
  {
    label: Control_Type.BUTTON,
    Icon:  RxButton,
  },
];

