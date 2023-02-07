import React, { useState } from "react";
import useDebounce from "../../Hooks/useDebounce";

const Dashboard = () => {
  const [inputValue, setInputValue] = useState("");

  useDebounce(() => {
    // make API call
  }, 500);
  return <div>Dashboard</div>;
};

export default Dashboard;
