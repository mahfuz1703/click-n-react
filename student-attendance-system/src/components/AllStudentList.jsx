function AllStudentList(props) {
    // Function to handle the deletion of a student
    const deleteStudentHandler = (studentId) => {
        alert('Are you sure you want to delete this student?');
        const updatedStudentList = props.studentList.filter((student) => student.id !== studentId);
        props.setStudentList(updatedStudentList);
    }

    // Function to handle the editing of a student
    const editStudentHandler = (studentId) => {
        const toBeEditedStudent = props.studentList.find((student) => student.id === studentId);
        props.setEditableStudent(toBeEditedStudent);
        props.setEditMode(true);
        props.setStudentName(toBeEditedStudent.name);
    }

    // Function to handle marking a student as present
    const presentStudentHandler = (studentId) => {
        const updatedStudentList = props.studentList.find((student) => student.id === studentId);

        if (updatedStudentList.isPresent === true) {
            alert('This student is already marked as present');
        } else if (updatedStudentList.isPresent === false) {
            alert('This student is already marked as absent');
        } else {
            const updatedList = props.studentList.map((student) => {
                if (student.id === studentId) {
                    return { ...student, isPresent: true };
                }
                return student;
            });
            props.setStudentList(updatedList);
        }
    }

    // Function to handle marking a student as absent
    const absentStudentHandler = (studentId) => {
        const updatedStudentList = props.studentList.find((student) => student.id === studentId);

        if (updatedStudentList.isPresent === true) {
            alert('This student is already marked as present');
        } else if (updatedStudentList.isPresent === false) {
            alert('This student is already marked as absent');
        } else {
            const updatedList = props.studentList.map((student) => {
                if (student.id === studentId) {
                    return { ...student, isPresent: false };
                }
                return student;
            });
            props.setStudentList(updatedList);
        }
    }
    return (
        <div>
            <div className='allStudent'>
                <h2>All Students</h2>
                <ul>
                    {props.studentList.map((item) => (
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
        </div>
    )
}

export default AllStudentList
