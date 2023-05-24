import React from "react";
import "./Model.css";
import { ModelInfo } from "../../types/modelInfo.type";
import { Control_Type } from "../../constant";
import TextField from "../controls/TextField";
import CheckBox from "../controls/CheckBox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "../../utils/validation";
import { formType } from "../DragBox/DragBox";
import { useDispatch } from "react-redux";
import { add } from "../../redux/formSlice";


type props = {
  modalInfo?: ModelInfo;
  setModalInfo?: React.Dispatch<React.SetStateAction<ModelInfo | undefined>>;
  editedData?:formType
 
};

const Model = ({ modalInfo, setModalInfo,editedData }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(validationShema) });

  const dispatch=useDispatch();

  const onSubmit = handleSubmit((data) => {
   
    
    const single_control: formType = {};
    single_control.name = modalInfo?.control;
    single_control.data = data;

   
    dispatch(add({data:single_control}))

    setModalInfo && setModalInfo(undefined);
  });

  const closeModel = () => {
    setModalInfo && setModalInfo(undefined);
  };

  return (
    <div className="overlay">
      <form onSubmit={onSubmit}>
        <div className="ui-model">
          <div className="model-cross" onClick={closeModel}>
            X
          </div>
          <div className="model-header">{modalInfo?.control}</div>

          <div className="model-content">
            {modalInfo?.control_desc.map((control, index) => {
              switch (control.type) {
                case Control_Type.TEXT_FIELD:
                  return (
                    <TextField
                      key={index}
                      attributes={control.attributes}
                      register={register}
                      errors={errors}
                    />
                  );
                case Control_Type.CHECK_BOX:
                  return (
                    <CheckBox
                      key={index}
                      attributes={control.attributes}
                      register={register}
                    />
                  );
               
                default:
                  return <div key={index}></div>;
              }
            })}
          </div>
          <hr />
          <div className="footer">
            <input
              type="submit"
              value="save"
              name="save"
              className="save-btn"
            />
            <input
              type="button"
              value="cancel"
              name="cancel"
              className="cancel-btn"
              onClick={closeModel}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Model;
