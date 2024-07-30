import { useState } from "react";

const Input = ({
  title,
  displayHorizon,
  capitalTitle,
  limitWord = 10,
  ...restParams
}) => {
  const [value, setValue] = useState("");
  const [style, setStyle] = useState({ border: "1px solid black" });

  const onChangeHandler = (event) => {
    console.log(style, value.length, limitWord);

    // 1. Check style
    setValue(event.target.value);
    if (value.length === limitWord) {
      setStyle({ border: "1px solid blue" });
    } else {
      setStyle({ border: "1px solid red" });
    }
  };

  let result = <></>;

  // 2. Data render check
  if (displayHorizon) {
    result = (
      <p>
        <span>{title}</span>
        <span>
          <input
            value={value}
            style={style}
            {...restParams}
            onChange={onChangeHandler}
          />
        </span>
      </p>
    );
  } else {
    result = (
      <>
        <p>{title}</p>
        <input
          value={value}
          style={style}
          {...restParams}
          onChange={onChangeHandler}
        />
      </>
    );
  }

  // 3. Title check
  if (capitalTitle) {
    title = title.toUpperCase();
  }

  return <>{result}</>;
};

export default Input;
