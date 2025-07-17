import {useContext} from 'react';
import {StudentContext} from '../contexts/Student'

function Form() {
    const studentCtx = useContext(StudentContext);
    // Function to handle the creation of a new student
    const createStudentHandler = (event) => {
        event.preventDefault();

        if (studentCtx.studentName) {
            const newStudent = {
                id: Date.now(),
                name: studentCtx.studentName,
                isPresent: undefined
            }

            studentCtx.setStudentList([newStudent, ...studentCtx.studentList])
            studentCtx.setStudentName('');
        } else {
            alert('Please enter a valid student name');
        }
    }

    // Function to handle the update of a student
    const updateStudentHandler = (event) => {
        event.preventDefault();

        if (studentCtx.studentName && studentCtx.editableStudent) {
            const updatedSetudentList = studentCtx.studentList.map((student) => {
                if (student.id === studentCtx.editableStudent.id) {
                    return { ...student, name: studentCtx.studentName };
                }
                return student;
            })
            studentCtx.setStudentList(updatedSetudentList);
            studentCtx.setStudentName('');
            studentCtx.setEditableStudent(null);
            studentCtx.setEditMode(false);
        } else {
            alert('Please enter a valid student name');
        }
    }
    return (
        <div>
            <form action="" className='studentForm' onSubmit={studentCtx.editMode ? updateStudentHandler : createStudentHandler}>
                <input type='text' name='' id='' placeholder='Enter a student name' value={studentCtx.studentName} onChange={(event) => studentCtx.setStudentName(event.target.value)}></input>
                <button className='presentButton' type='submit'>
                    {studentCtx.editMode ? 'Update Student' : 'Add Student'}
                </button>
            </form>
        </div>
    )
}

export default Form