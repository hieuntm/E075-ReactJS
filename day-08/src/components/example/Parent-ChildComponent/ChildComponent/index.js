const ChildComponent = ({ id, value, reSetValue }) => {
  const onChange = (event) => {
    reSetValue(event.target.value);
  };

  return (
    <>
      <div>
        <input value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default ChildComponent;
