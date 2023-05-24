import { Control_Type } from './../constant/index';


let commonFields = JSON.stringify([
  {
    type: Control_Type.TEXT_FIELD,
    attributes: [
      { name: "label Name" },
      { name: "Placeholder" },
      {
        name: "css class",
        desc: "multiple classes separated by comma (,).",
      },
      { name: "default Value" },
      { name: "name" },
    ],
  },
  {
    type: Control_Type.CHECK_BOX,
    attributes: [
      { name: "Read Only", default: false },
      { name: "Disabled", default: false },
      { name: "Required", default: true },
    ],
  },
]);

export const getModelContent = (label: string) => {

  

  switch (label) {
    case Control_Type.TEXT_FIELD:
      let text_desc = [...JSON.parse(commonFields)];
      return { control: Control_Type.TEXT_FIELD, control_desc: text_desc };

    case Control_Type.TEXT_AREA:
      let textA_desc = [
        ...JSON.parse(commonFields)
      ];

      textA_desc[0].attributes=[...textA_desc[0].attributes,{name:'Rows'}];

      return { control: Control_Type.TEXT_AREA, control_desc: textA_desc };
    
    default:
  }
};

