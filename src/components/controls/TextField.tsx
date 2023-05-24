
import { FieldError } from "react-hook-form";
import { Control_Props } from "../../types/props.type";

const TextField = ({ attributes,register,errors }: Control_Props) => {
  let fields = attributes.map((attr,index) => {
    let label_name=attr.name.replace(/ /gi, "_");
    return (
      <div className="model-raw" key={index}>
        <div className="model-input-title">{attr.name}:</div>
        <div>
          <input type="text" {...register(`${label_name}`)} placeholder={attr.name} className="model-input" />
          {attr?.desc && <div className="model-input-desc">{attr?.desc}</div>}
        </div>
      
        {errors[label_name] && (
          <div className="error-message">
            {(errors[label_name] as FieldError)?.message}
          </div>
        )}
      </div>
    );
  });

  return <div className="textbox-col">{fields}</div>;
};

export default TextField;
