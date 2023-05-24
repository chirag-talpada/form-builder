import React, { useState, Fragment } from "react";
import "./DragBox.css";
import { getModelContent } from "../../helper";
import { ModelInfo } from "../../types/modelInfo.type";
import Model from "../Model/Model";
import PreviewControl from "./components/PreviewControl";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export type formType={
  name?:string,
  data?:{}  
}

const DragBox = () => {

  const { form } = useSelector((state: RootState) => {
    return state;
  });

  const [modalInfo, setModalInfo] = useState<ModelInfo>();
 

  const OnControlDrop = (e: React.DragEvent<HTMLDivElement>) => {
  
    let label: string = e.dataTransfer.getData("control");
    let data = getModelContent(label);
    
    setModalInfo(data);
  };


  return (
    <Fragment>
      {modalInfo && <Model  setModalInfo={setModalInfo} modalInfo={modalInfo}/>}
      <div
        className="dragbox"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => OnControlDrop(e)}
      >
        {!form.length && <div className="drag-and-drop">
          <div className="content">
            <span>Drag and Drop</span>
            <span>Controls</span>
          </div>
        </div>}

        {Boolean(form.length) && <PreviewControl form={form} />}



      </div>
    </Fragment>
  );
};

export default DragBox;
