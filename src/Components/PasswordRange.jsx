import React, { useState } from "react";
import styles from "./PasswordRange.module.css";
import { MdContentCopy } from "react-icons/md";

const PasswordRange = ({ range, setRange, password }) => {
  const onCopyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Text has been copied");
  };
  return (
    <>
      <div className="d-flex align-items-center position-relative mb-4">
        <input
          type="text"
          name="text"
          value={password}
          className={styles.textInput}
          placeholder="Move Scroll Bar to generate the Password Here!"
        />
        <MdContentCopy
          className={styles.copyIcon}
          onClick={() => onCopyToClipboard(password)}
        />
      </div>
      <input
        type="range"
        name="range"
        value={range}
        max={50}
        onChange={(e) => {
          setRange(e.target.value);
        }}
        className={styles.rangeInput}
      />
      <p className="fs-5 fw-bold">Password Length: {range}</p>
    </>
  );
};

export default PasswordRange;
