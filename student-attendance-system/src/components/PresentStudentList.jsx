import {useContext} from 'react';
import {StudentContext} from '../contexts/Student'

function PresentStudentList(props) {
    const {studentList} = useContext(StudentContext);
    return (
        <div>
            <div className='presentStudents'>
                <h2>Present Students</h2>
                <ul>
                    {studentList.filter((student) => student.isPresent === true).map((item) => (
                        <li>
                            <span>{item.name}</span>
                            <button className='absentButton' onClick={() => props.toggleStudentStatus(item.id)}>Absent</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PresentStudentList