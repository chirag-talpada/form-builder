import React from "react";
import { Checkbox_Props } from "../../types/props.type";

const CheckBox = ({ attributes,register }: Checkbox_Props) => {
  return (
    <div>
      {attributes.map((attr, index) => {
          let label_name=attr.name.replace(/ /gi, "_");
        return (
          <div key={index} className="check-raw">
            <div className="flex">
              <div><label htmlFor={label_name}> {attr.name}</label></div>
              <input
                type="checkbox"
                {...register(`${label_name}`)}
                id={label_name}
                defaultChecked={attr.default}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBox;
