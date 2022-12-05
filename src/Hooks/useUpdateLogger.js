import React from "react";

const useUpdateLogger = ({ value }) => {
  React.useEffect(() => {
    console.log(value);
  }, [value]);
};

export default useUpdateLogger;
