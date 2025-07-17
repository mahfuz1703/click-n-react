import { createContext, useState } from 'react';

export const StudentContext = createContext();

function StudentProvider({ children }) {
    const [studentName, setStudentName] = useState('');
    const [studentList, setStudentList] = useState([]);
    const [editableStudent, setEditableStudent] = useState(null);
    const [editMode, setEditMode] = useState(false);
    
    return (
        <StudentContext.Provider value={{
            studentName,
            setStudentName,
            studentList,
            setStudentList,
            editableStudent,
            setEditableStudent,
            editMode,
            setEditMode
        }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;
