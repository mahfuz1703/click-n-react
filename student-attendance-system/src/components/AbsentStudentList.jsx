import {useContext} from 'react';
import {StudentContext} from '../contexts/Student'

function AbsentStudentList(props) {
    const {studentList} = useContext(StudentContext);
    return (
        <div>
            <div className='absentStudents'>
                <h2>Absent Students</h2>
                <ul>
                    {studentList.filter((student) => student.isPresent === false).map((item) => (
                        <li>
                            <span>{item.name}</span>
                            <button className='presentButton' onClick={() => props.toggleStudentStatus(item.id)}>Present</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AbsentStudentList