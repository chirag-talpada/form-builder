import * as yup from "yup";

export const validationShema = yup.object().shape({
  name: yup.string().required("name is required"),
  label_Name: yup.string().required("label name is required"),
  Placeholder: yup.string().required("Placeholder is required"),
  Rows: yup.number().typeError('Rows is not valid').test('number','Rows is not valid',(x)=>{
    if(x===undefined){      
      return true
    }
    if(isFinite(x)){
      return true
    }
    return false
    
  })
    
});

