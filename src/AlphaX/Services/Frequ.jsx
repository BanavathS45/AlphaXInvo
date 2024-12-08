import React, { useEffect } from "react";
const Frequency = () => {
  const [count, setCount] = React.useState([]);
  let str = "ghjhyggg";
  let frequencyCount = (str) => {
    
    
    console.log(str);
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      console.log(char);
      if (count[char]) {
        count[char] += 1;
      } else {
        count[char] = 1;
      }
    }
    console.log(count);
    setCount(count);
    return count;
  };

  useEffect(() => {
    frequencyCount(str);
  }, []);

  return (
    <>
      <h1>Frequency</h1>
      No of Frequency : {count}
    </>
  );
};

export default Frequency;
