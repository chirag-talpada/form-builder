import React from 'react'
import { Text_feild_props } from '../types/props.type';


const TextArea = ({data}:Text_feild_props) => {
  
 
  return (
    <div>
      <div className="text-label">{data?.label_Name} :</div>
      <div className="text-raw">
        <textarea 
        disabled={data?.Disabled}
        placeholder={data?.Placeholder}
        readOnly={data?.Read_Only}
        className={String(data?.css_class).split(',').join(' ')}
        defaultValue={data?.default_Value}
        name={data?.name}
        rows={Number(data?.Rows)}
        ></textarea>
      </div>
    </div>
  )
}

export default TextArea;