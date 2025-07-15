function PresentStudentList(props) {
    return (
        <div>
            <div className='presentStudents'>
                <h2>Present Students</h2>
                <ul>
                    {props.studentList.filter((student) => student.isPresent === true).map((item) => (
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