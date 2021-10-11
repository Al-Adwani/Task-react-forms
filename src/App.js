import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([
    {
      id: 1,
      name: "",
      lastName: "",
      phoneNumber: "",
      power: "",
      emailAddress: "",
    },
  ]);
  const [show, setShow] = useState(false);

  const createStudent = (newStudent) => {
    const id = studentsInfo[studentsInfo.length - 1].id + 1;
    const numOfStudents = { ...newStudent, id: id };
    setStudentsInfo([...studentsInfo, numOfStudents]);
    console.log(newStudent);
  };

  const deleteHandle = (studentId) => {
    setStudentsInfo(studentsInfo.filter((student) => student.id !== studentId));
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList deleteHandle={deleteHandle} list={studentsInfo} />
      ) : (
        <Form createStudent={createStudent} />
      )}
    </div>
  );
}

export default App;
