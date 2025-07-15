import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import StudentSection from './components/StudentSection';

function App() {
  const [studentName, setStudentName] = useState('');
  const [studentList, setStudentList] = useState([]);
  const [editableStudent, setEditableStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="App">
      <h1>Student Attendance System</h1>

      <Form
        studentName = {studentName}
        setStudentName = {setStudentName}
        studentList = {studentList}
        setStudentList = {setStudentList}
        editableStudent = {editableStudent}
        setEditableStudent = {setEditableStudent}
        editMode = {editMode}
        setEditMode = {setEditMode}
      />
      
      <StudentSection
        studentList={studentList}
        setStudentList={setStudentList}
        setEditableStudent={setEditableStudent}
        setEditMode={setEditMode}
        setStudentName={setStudentName}
      />
      
    </div>
  );
}

export default App;
