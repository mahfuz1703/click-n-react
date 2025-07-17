import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'
import AbsentStudentList from './AbsentStudentList'
import {useContext} from 'react';
import {StudentContext} from '../contexts/Student'

function StudentSection() {
    const {studentList, setStudentList} = useContext(StudentContext);
    // Toggle to present or absent students
    const toggleStudentStatus = (studentId) => {
        const updatedStudentList = studentList.map((student) => {
            if (student.id === studentId) {
                return { ...student, isPresent: !student.isPresent };
            }
            return student;
        });
        setStudentList(updatedStudentList);
    }
    return (
        <div className='studentSection'>
            <AllStudentList/>
            <PresentStudentList
                toggleStudentStatus={toggleStudentStatus}
            />
            <AbsentStudentList
                toggleStudentStatus={toggleStudentStatus}
            />
        </div>
    )
}

export default StudentSection