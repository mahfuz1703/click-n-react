import './App.css';
import {useState} from 'react';

function App() {
  const [studentName, setStudentName] = useState('');
  const [studentList, setStudentList] = useState([]);
  const [editableStudent, setEditableStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Function to handle the creation of a new student
  const createStudentHandler = (event) => {
    event.preventDefault();

    if(studentName){
      const newStudent = {
        id: Date.now(),
        name: studentName,
        isPresent: undefined
      }

      setStudentList([newStudent, ...studentList])
      setStudentName('');
    }else{
      alert('Please enter a valid student name');
    }
  }

  // Function to handle the deletion of a student
  const deleteStudentHandler = (studentId) => {
    alert('Are you sure you want to delete this student?');
    const updatedStudentList = studentList.filter((student) => student.id !== studentId);
    setStudentList(updatedStudentList);
  }

  // Function to handle the editing of a student
  const editStudentHandler = (studentId) => {
    const toBeEditedStudent = studentList.find((student) => student.id === studentId);
    setEditableStudent(toBeEditedStudent);
    setEditMode(true);
    setStudentName(toBeEditedStudent.name);
  }

  // Function to handle the update of a student
  const updateStudentHandler = (event) => {
    event.preventDefault();

    if(studentName && editableStudent){
      const updatedSetudentList = studentList.map((student) => {
        if(student.id === editableStudent.id){
          return {...student, name: studentName};
        }
        return student;
      })
      setStudentList(updatedSetudentList);
      setStudentName('');
      setEditableStudent(null);
      setEditMode(false);
    }else{
      alert('Please enter a valid student name');
    }
  }

  // Function to handle marking a student as present
  const presentStudentHandler = (studentId) => {
    const updatedStudentList = studentList.find((student) => student.id === studentId);

    if(updatedStudentList.isPresent === true){
      alert('This student is already marked as present');
    }else if(updatedStudentList.isPresent === false){
      alert('This student is already marked as absent');
    }else{
      const updatedList = studentList.map((student) => {
        if(student.id === studentId){
          return {...student, isPresent: true};
        }
        return student;
      });
      setStudentList(updatedList);
    }
  }


  // Function to handle marking a student as absent
  const absentStudentHandler = (studentId) => {
    const updatedStudentList = studentList.find((student) => student.id === studentId);

    if(updatedStudentList.isPresent === true){
      alert('This student is already marked as present');
    }else if(updatedStudentList.isPresent === false){
      alert('This student is already marked as absent');
    }else{
      const updatedList = studentList.map((student) => {
        if(student.id === studentId){
          return {...student, isPresent: false};
        }
        return student;
      });
      setStudentList(updatedList);
    }
  }

  // Toggle to present or absent students
  const toggleStudentStatus = (studentId) => {
    const updatedStudentList = studentList.map((student) => {
      if(student.id === studentId){
        return {...student, isPresent: !student.isPresent};
      }
      return student;
    });
    setStudentList(updatedStudentList);
  }

  return (
    <div className="App">
      <h1>Student Attendance System</h1>

      <form action="" className='studentForm' onSubmit= {editMode ? updateStudentHandler : createStudentHandler}>
        <input type='text' name='' id='' placeholder='Enter a student name' value={studentName} onChange={(event) => setStudentName(event.target.value)}></input>
        <button className='presentButton' type='submit'>
          {editMode ? 'Update Student' : 'Add Student'}
        </button>
      </form>

      <div className='studentSection'>
        <div className='allStudent'>
          <h2>All Students</h2>
          <ul>
            {studentList.map((item) => (
              <li>
                <span> {item.name} </span>
                <button className='editButton' onClick={() => editStudentHandler(item.id)}>Edit</button>
                <button className='deleteButton' onClick={() => deleteStudentHandler(item.id)}>Delete</button>
                <button className='presentButton' onClick={() => presentStudentHandler(item.id)}>Present</button>
                <button className='absentButton' onClick={() => absentStudentHandler(item.id)}>Absent</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='presentStudents'>
          <h2>Present Students</h2>
          <ul>
            {studentList.filter((student) => student.isPresent === true).map((item) => (
              <li>
                <span>{item.name}</span>
                <button className='absentButton' onClick={() => toggleStudentStatus(item.id)}>Absent</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='absentStudents'>
          <h2>Absent Students</h2>
          <ul>
            {studentList.filter((student) => student.isPresent === false).map((item) => (
              <li>
                <span>{item.name}</span>
                <button className='presentButton' onClick={() => toggleStudentStatus(item.id)}>Present</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
