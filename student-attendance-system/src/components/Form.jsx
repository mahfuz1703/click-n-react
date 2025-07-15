function Form(props) {
    // Function to handle the creation of a new student
    const createStudentHandler = (event) => {
        event.preventDefault();

        if (props.studentName) {
            const newStudent = {
                id: Date.now(),
                name: props.studentName,
                isPresent: undefined
            }

            props.setStudentList([newStudent, ...props.studentList])
            props.setStudentName('');
        } else {
            alert('Please enter a valid student name');
        }
    }

    // Function to handle the update of a student
    const updateStudentHandler = (event) => {
        event.preventDefault();

        if (props.studentName && props.editableStudent) {
            const updatedSetudentList = props.studentList.map((student) => {
                if (student.id === props.editableStudent.id) {
                    return { ...student, name: props.studentName };
                }
                return student;
            })
            props.setStudentList(updatedSetudentList);
            props.setStudentName('');
            props.setEditableStudent(null);
            props.setEditMode(false);
        } else {
            alert('Please enter a valid student name');
        }
    }
    return (
        <div>
            <form action="" className='studentForm' onSubmit={props.editMode ? updateStudentHandler : createStudentHandler}>
                <input type='text' name='' id='' placeholder='Enter a student name' value={props.studentName} onChange={(event) => props.setStudentName(event.target.value)}></input>
                <button className='presentButton' type='submit'>
                    {props.editMode ? 'Update Student' : 'Add Student'}
                </button>
            </form>
        </div>
    )
}

export default Form