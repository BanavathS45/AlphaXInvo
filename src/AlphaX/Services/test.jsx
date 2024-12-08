import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import useDarkMode from "../THeme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const Test = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [value, setValue] = useState({
    taskName: "",
    isCompleted: false,
  });
  const [filtter, setFiltter] = useState([]);
  const [task, setTask] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  //   let isCompleted = true;
  let handleChnage = (e) => {
    console.log(e.target.value);
    console.log("e.target.value");
    let result = e.target.value;
    setValue({
      taskName: result,
      isCompleted: false,
    });
  };

  let addTask = () => {
    console.log(value);
    setTask([...task, value]);
    setValue({
      taskName: "",
      isCompleted: false,
    });
    // Add task to the list
  };

  const removeTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const StatusUpdate = (index) => {
    let newTask = task[index];
    newTask.isCompleted = !newTask.isCompleted;
    setTask([...task.slice(0, index), newTask, ...task.slice(index + 1)]);
    console.log(task[index]);
  };

  let filtered;
  useEffect(() => {
    if (filtered) {
      filtered = task.filter((item) =>
        item.taskName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFiltter(filtered);
    } else {
      setFiltter(task);
    }
  }, [searchValue, task]);

  const handleSearch = (e) => {
    let result = e.target.value;
    console.log(result);
    setSearchValue(result);
    setTimeout(() => {
      filtered = task.filter((item) =>
        item.taskName.toLowerCase().includes(result.toLowerCase())
      );
      setFiltter(filtered);
    }, 0);

    return filtered;
  };

  //   Write a function to flatten a nested array of arbitrary depth.
  let flatArrayResult;
  let flattenArray = [
    [0, 1],
    [2, 3],
    [4, 7],
  ];
  console.log(flattenArray);
  flatArrayResult = flattenArray.flat();

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <input
          type="text"
          id="task"
          value={value.taskName}
          placeholder="Enter a task"
          className="ms-2 "
          onChange={(e) => {
            handleChnage(e);
          }}
        />

        <button
          id="add"
          className="ms-2 px-2 btn bg-success text-white"
          onClick={addTask}
        >
          Add
        </button>
        <input
          type="search"
          id="search"
          value={searchValue}
          placeholder="Search..."
          className="ms-2 "
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        {task.length > 0 ? (
          <div className="ms-2">
            {/* {task.map((eachTask) => {
              return <p key={eachTask}>{eachTask}</p>;
            })} */}
            <h3 className="mt-2">No of Tasks : {task.length}</h3>

            <Card className="w-50 mt-3 px-3">
              {filtter.map((eachTask, index) => (
                <div className="d-flex justify-content-between mt-2 ">
                  <li key={index} style={{ listStyle: "none" }}>
                    {index + 1}. {eachTask.taskName}
                  </li>
                  <h5
                    className="ms-5  px-3"
                    onClick={() => StatusUpdate(index)}
                    style={{
                      cursor: "pointer",
                      color: !task[index].isCompleted ? "red" : "green",
                    }}
                  >
                    {!task[index].isCompleted ? "Pending" : "Completed"}
                  </h5>
                  <h5
                    className="ms-5  px-3"
                    onClick={() => removeTask(index)}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    X
                  </h5>
                </div>
              ))}
            </Card>
          </div>
        ) : (
          <div className="ms-2">
            <p>No task</p>
          </div>
        )}
        <ul id="list"></ul>
      </div>
      <div>
        <h1>flattenArray</h1>
        <h2>Input : [0, 1], [2, 3], [4, 7]</h2>

        <h2>Output : {flatArrayResult}</h2>
      </div>

      <div className="theme-toggle-button" onClick={toggleDarkMode}>
        <h1>Drak And Light Mode</h1>
        {darkMode ? (
          <button className="btn bg-primary text-white">Dark</button>
        ) : (
          <button className="btn bg-primary text-white">Ligth</button>
          //   <FontAwesomeIcon icon={faMoon} className="fasun" />
          // ) : (
          //   <FontAwesomeIcon icon={faSun} className="fasun" />
        )}
      </div>
    </>
  );
};

export default Test;
