import "bootstrap/dist/css/bootstrap.css";
import "./css.css";
import FormInput from "./FormInput";

const FormComponent = ({ dataTableContent }) => {
  return (
    <form className="form">
      {dataTableContent.map((item) => (
        <FormInput {...item} />
      ))}

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
      <button type="submit" class="btn btn-secondary">
        Cancel
      </button>
    </form>
  );
};

export default FormComponent;
