import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateTable } from '../redux/reducers/crudReducer'

const EditData = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [form, setForm] = useState({
        name: location.state.name,
        dob: location.state.dob,
        salary: location.state.salary,
        joiningDate: location.state.joiningDate,
        relievingDate: location.state.relievingDate,
        contact: location.state.contact,
        status: location.state.status,
    })

    const handleEditData = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleUpdate = () => {
        dispatch(updateTable({ data: form, editId: location.state.id }))
        navigate("/")
    }

    return (
        <div className='main-div'>
            <label>Name</label>
            <input type="text" value={form.name} onChange={(e) => handleEditData("name", e.target.value)} />
            <br /><br />
            <label>Dob</label>
            <input type="date" value={form.dob} onChange={(e) => handleEditData("dob", e.target.value)} />
            <br /><br />
            <label>salary</label>
            <input type="number" value={form.salary} onChange={(e) => handleEditData("salary", e.target.value)} />
            <br /><br />
            <label>Joining Date</label>
            <input type="date" value={form.joiningDate} onChange={(e) => handleEditData("joiningDate", e.target.value)} />
            <br /><br />
            <label>Relieving Date</label>
            <input type="date" value={form.relievingDate} onChange={(e) => handleEditData("relievingDate", e.target.value)} />
            <br /><br />
            <label>Contact</label>
            <input type="number" value={form.contact} onChange={(e) => handleEditData("contact", e.target.value)} />
            <br /><br />
            <label>Status : </label>
            <div className='radio-style'>
                <input
                    type="radio"
                    value="active"
                    checked={form.status === "active"}
                    onChange={(e) => handleEditData("status", e.target.value)} />
                <label htmlFor="active">Active</label>
                <input
                    className="inactive-style"
                    type="radio"
                    value="inactive"
                    checked={form.status === "inactive"}
                    onChange={(e) => handleEditData("status", e.target.value)}
                />
                <label htmlFor="Inactive">Inactive</label>
            </div>
            <br /><br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default EditData