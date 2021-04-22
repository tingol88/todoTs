import styles from './style.module.css'

const Form = () => {
  return (
    <div className={`d-flex justify-content-center py-5 gap-5 mx-5 ${styles.input}`}>
      <div className="mb-3 col-8">
        <input
          type="email"
          className="form-control"
          placeholder="What need to be done"
        />
      </div>
        <button style={{height: '38px', width: '220px'}} type="button" className="btn btn-primary"> <i className="far fa-plus-square"></i> Add</button>
    </div>
  );
};

export default Form;
