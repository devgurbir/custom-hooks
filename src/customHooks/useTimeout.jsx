const { useState } = require("react");

const useTimeout = (time) => {
  const [ready, setReady] = useState(false);

  setTimeout(() => {
    setReady(true);
  }, time);

  return ready;
};

export default useTimeout;
