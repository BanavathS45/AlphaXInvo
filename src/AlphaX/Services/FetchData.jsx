import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  const [filtter, setFiltter] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const fetchData = () => [
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json)),
  ];

  let filtered;
  useEffect(() => {
    if (filtered) {
      filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFiltter(filtered);
    } else {
      setFiltter(data);
    }
  }, [searchValue, data]);

  const handleSearch = (e) => {
    let result = e.target.value;
    console.log(result);
    setSearchValue(result);
    setTimeout(() => {
      filtered = data.filter((item) =>
        item.name.toLowerCase().includes(result.toLowerCase())
      );
      setFiltter(filtered);
    }, 3000);

    return filtered;
  };
  return (
    <div className="mt-5 w-50">
      <div className="d-flex justify-content-between">
        <button onClick={fetchData} className="btn bg-primary text-white mb-5">
          Fetch user Data{" "}
        </button>
        <div>
          <input
            type="search"
            id="search"
            value={searchValue}
            placeholder="Debounced  Search..."
            className="ms-2 "
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
      </div>

      {filtter.map((data) => {
        return (
          <ul key={data.id} style={{ listStyle: "none" }}>
            <li>Name: {data.name}</li>
            <li>Uesrname: {data.username}</li>
            <li>Email: {data.email}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default FetchData;
// https://jsonplaceholder.typicode.com/posts
