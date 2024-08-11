import React from "react";

const GeneratePassword = ({ passwordGenerator, range }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary w-100 generate-password-btn"
        onClick={() => {
          passwordGenerator(range);
        }}
      >
        Generate Password
      </button>
    </>
  );
};

export default GeneratePassword;
