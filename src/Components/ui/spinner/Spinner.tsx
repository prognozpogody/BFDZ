import style from "./style.module.css";
import React from "react";

export const Spinner = () => {
  return (
    <div className={style["lds-roller"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
