import React from 'react'
import Student from './Student'

function StudentsList(props) {
    const list = props.list.map(student =>
        <Student deleteHandle={props.deleteHandle} student={student} />)
    return (
        <div>
            {list}
        </div>
    )
}

export default StudentsList
