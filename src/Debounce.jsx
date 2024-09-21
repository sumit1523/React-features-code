import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";
const Debounce = () => {
  const [data, setData] = useState("sumit");
  const [inputValue, setInputValue] = useState("sds");

  const debounceData = useDebounce(inputValue, 500);

  useEffect(() => {
    console.log("inside UseEffect runs onces");
    setData("kumarcsdsds");
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>{data}</div>
      <h1>{debounceData}</h1>
      <input
        name="Search"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};
export default Debounce;
