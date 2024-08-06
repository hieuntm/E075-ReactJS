import React, { useEffect, useState } from "react";

const Loading = () => {
  const [loadingStatus, setLoadingStatus] = useState(".");
  const [loop, setLoop] = useState();
  useEffect(() => {
    setLoop(
      setInterval(() => {
        console.log("loading");
        setLoadingStatus(loadingStatus + ".");
      }, 1000)
    );

    return function cleanup() {
      console.log("cleaning up");
      clearInterval(loop);
    };
  }, [loop, loadingStatus]);

  return <p>{`Loading ${loadingStatus}`}</p>;
};
export default Loading;
