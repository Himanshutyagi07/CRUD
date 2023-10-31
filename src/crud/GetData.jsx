import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BiPencil } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { deleteItem } from '../redux/reducers/crudReducer'


const GetData = () => {
    const navigate = useNavigate()
    const [searchItem, setSearchItem] = useState("")
    const selector = useSelector((state) => state.crudReducer)
    const filterItem = selector.filter((item) => {
        return item.name.includes(searchItem)
    })
    const dispatch = useDispatch()
    const handleAddEmploye = () => {
        navigate("/addData")
    }

    const handleDeleteData = (item) => {
        dispatch(deleteItem(item))
    }

    const handleEdit = (data) => {
        navigate("/editdata", { state: data })
    }

    return (
        <div>
            <h1>Employe Management</h1>
            <button onClick={handleAddEmploye}>Add New Employe</button>
            <div className='sub-style'>
                <h3 className='sub-heading'>Employe List</h3>
                <input placeholder='search name for actions' value={searchItem} style={{ marginBottom: "31px", marginLeft: "17px" }} type="text" onChange={(e) => setSearchItem(e.target.value)} />
            </div>


            <table id="customers">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Salary</th>
                        <th>Joining Date</th>
                        <th>Relieving Date</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {selector.lenth !== 0 && filterItem.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td>{item.salary}</td>
                                <td>{item.joiningDate}</td>
                                <td>{item.relievingDate === "" ? "NA" : item.relievingDate}</td>
                                <td>{item.contact}</td>
                                <td>{item.status}</td>
                                <td> <div>
                                    <BiPencil
                                        className='edit-icon'
                                        onClick={() => handleEdit(item)}
                                    />
                                    <MdOutlineDeleteOutline
                                        className='delete-icon'
                                        onClick={() => handleDeleteData(item)}
                                    />
                                </div></td>
                            </tr>
                        )
                    })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default GetData