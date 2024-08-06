import "bootstrap/dist/css/bootstrap.css";

const NotificationComponent = ({ messageStatus, message }) => {
  return (
    <div className="form-group">
      <p
        style={
          messageStatus === "success" ? { color: "green" } : { color: "red" }
        }
      >
        {message}
      </p>
    </div>
  );
};

export default NotificationComponent;
