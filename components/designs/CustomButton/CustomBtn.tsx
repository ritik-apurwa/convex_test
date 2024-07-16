import React from "react";


const CustomBtn = ({title}:{title:string }) => {
  return (
    <div className="size-full flex items-center justify-center">
      <button className="btn-custom text-xs   ">{title} </button>
    </div>
  );
};

export default CustomBtn;
