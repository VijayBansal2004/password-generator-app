import React from "react";
import styles from "./AdditionalOptions.module.css";

const AddtionalOptions = ({ number, setNumber, symbol, setSymbol }) => {
  return (
    <>
      <div className={styles.options}>
        <input
          type="checkbox"
          name="checkbox1"
          className={styles.large}
          onClick={() => {
            setNumber(!number);
          }}
        />
        <p>Include Numbers (0-9)</p>
      </div>

      <div className={styles.options}>
        <input
          type="checkbox"
          name="checkbox2"
          className={styles.large}
          onClick={() => {
            setSymbol(!symbol);
          }}
        />
        <p>Include Symbols (@-$)</p>
      </div>
    </>
  );
};

export default AddtionalOptions;
