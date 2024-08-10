import "bootstrap/dist/css/bootstrap.css";

const FormInput = ({ title, id, type, placeholder }) => {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">{title}</label>
      <input
        type={type}
        class="form-control"
        id={id}
        aria-describedby="emailHelp"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
