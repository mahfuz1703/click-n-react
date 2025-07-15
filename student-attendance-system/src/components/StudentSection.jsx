import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'
import AbsentStudentList from './AbsentStudentList'

function StudentSection(props) {
    // Toggle to present or absent students
    const toggleStudentStatus = (studentId) => {
        const updatedStudentList = props.studentList.map((student) => {
            if (student.id === studentId) {
                return { ...student, isPresent: !student.isPresent };
            }
            return student;
        });
        props.setStudentList(updatedStudentList);
    }
    return (
        <div className='studentSection'>
            <AllStudentList
                studentList={props.studentList}
                setStudentList={props.setStudentList}
                setEditableStudent={props.setEditableStudent}
                setEditMode={props.setEditMode}
                setStudentName={props.setStudentName}
            />
            <PresentStudentList
                studentList={props.studentList}
                toggleStudentStatus={toggleStudentStatus}
            />
            <AbsentStudentList
                studentList={props.studentList}
                toggleStudentStatus={toggleStudentStatus}
            />
        </div>
    )
}

export default StudentSection