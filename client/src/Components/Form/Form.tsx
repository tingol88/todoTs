import React, { useState, useEffect, ChangeEvent, FormEvent, VFC } from 'react'

import styles from "./style.module.css";

type FormProps = {
  initialValue?: string;
  onSubmit?: (value: string) => void;
}

const Form: VFC<FormProps> = ({ initialValue = '', onSubmit }) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
    //очищаем input
    setValue('');
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  // useEffect(() => {
  //   setValue(initialValue);
  // }, [initialValue]);

  return (
    <form
      className={`d-flex justify-content-center py-5 gap-5 mx-5 ${styles.input}`}
      onSubmit={handleSubmit}
    >
      <div className="mb-3 col-6">
        <input
          onChange={onChange}
          className="form-control"
          placeholder="What need to be done"
          value={value}
        />
      </div>
      <button
        style={{ height: "38px", width: "220px" }}
        type="submit"
        className="btn btn-primary"
      >
        {" "}
        <i className="far fa-plus-square"></i> Add
      </button>
    </form>
  );
};

export default Form;
