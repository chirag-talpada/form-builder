import React, { useState } from "react";
import { Text_feild_props } from "../types/props.type";
import { remove } from "../redux/formSlice";
import { useDispatch } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { formType } from "../components/DragBox/DragBox";


const TextField = ({ data, index }: Text_feild_props) => {
  const dispatch = useDispatch();
  const [modalInfo, setModalInfo] = useState<formType>();

  const { form } = useSelector((state: RootState) => {
    return state;
  });

  const deleteControl = (index: number) => {
    dispatch(remove({ index }));
  };

  const editControl = (control_index: number) => {
    let data = form.find((_, index) => index === control_index);
    setModalInfo(data);
    console.log(data);
  };

  return (
    <div>
      <div className="text-label">
        <div>{data?.label_Name} :</div>
        <div>
          <span onClick={() => editControl(index)} className="edit-control">
            <MdModeEdit />
          </span>
          <span onClick={() => deleteControl(index)} className="delete-control">
            X
          </span>
        </div>
      </div>
      <div className="text-raw">
        <input
          type="text"
          disabled={data?.Disabled}
          placeholder={data?.Placeholder}
          readOnly={data?.Read_Only}
          className={String(data?.css_class).split(",").join(" ")}
          defaultValue={data?.default_Value}
          name={data?.name}
        />
      </div>
    </div>
  );
};

export default TextField;
