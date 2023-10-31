import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTableData } from '../redux/reducers/crudReducer'
import { useNavigate } from 'react-router-dom'

const AddData = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [member, setMember] = useState({
        name: "",
        dob: "",
        salary: "",
        joiningDate: "",
        contact: "",
        status: "",
        relievingDate: "",

    })

    const handleChange = (field, value) => {
        setMember((prev) => ({ ...prev, [field]: value }))
    }

    const handleAddUser = () => {
        dispatch(addTableData(member))
        navigate("/")
    }

    useEffect(() => {
        const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
        setMember((prev) => ({ ...prev, "id": randomTwoDigitNumber }))
    }, [])




    return (
        <div className='main-div'>
            <label>Name</label>
            <input type="text" value={member.name} onChange={(e) => handleChange("name", e.target.value)} />
            <br />
            <label>Dob</label>
            <input type="date" value={member.dob} onChange={(e) => handleChange("dob", e.target.value)} />
            <br />
            <label>salary</label>
            <input type="number" value={member.salary} onChange={(e) => handleChange("salary", e.target.value)} />
            <br />
            <label>Joining Date</label>
            <input type="date" value={member.joiningDate} onChange={(e) => handleChange("joiningDate", e.target.value)} />
            <br />
            <label>Contact</label>
            <input type="number" value={member.contact} onChange={(e) => handleChange("contact", e.target.value)} />
            <br />
            <label>Status : </label>
            <div className='radio-style'>
                <input
                    type="radio"
                    value="active"
                    checked={member.status === "active"}
                    onChange={(e) => handleChange("status", e.target.value)}
                />
                <label htmlFor="active">Active</label>
                <input
                    className="inactive-style"
                    type="radio"
                    value="inactive"
                    checked={member.status === "inactive"}
                    onChange={(e) => handleChange("status", e.target.value)}
                />
                <label htmlFor="Inactive">Inactive</label>
            </div>
            <br />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    )
}

export default AddData