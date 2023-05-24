import React from "react";
import { formType } from "../DragBox";
import { Control_Type } from "../../../constant";
import TextField from "../../../FormControls/TextField";
import TextArea from "../../../FormControls/TextArea";


type props = {
  form: formType[];
};

const PreviewControl = ({ form }: props) => {
  return (
    <div className="form-preview">
      {form.map((control, index) => {
        switch (control.name) {
          case Control_Type.TEXT_FIELD:
            return <TextField key={index} index={index} data={control.data} />;
          case Control_Type.TEXT_AREA:
            return <TextArea key={index} index={index} data={control.data} />;

          default:
            return <div key={index}></div>;
        }
      })}
    </div>
  );
};

export default PreviewControl;
