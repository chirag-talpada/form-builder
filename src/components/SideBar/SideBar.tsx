import React from "react";
import "./SideBar.css";
import { controls } from "../../constant";


const SideBar = () => {


    const handleOnDrag=(e: React.DragEvent<HTMLDivElement>,label:string)=>{
        e.dataTransfer.setData("control", label);
    }

  return (
    <div className="sidebar">
      {controls.map((control, index) => {
        const { Icon, label } = control;
        return (
          <div className="input-control" draggable="true" onDragStart={(e) => handleOnDrag(e,label)} key={index}>
            <div className="input-icon">
              <Icon />
            </div>
            <div className="input-label">{label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
