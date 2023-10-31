import { createSlice, current } from '@reduxjs/toolkit'

const initialState = [
    {
        name: "Aman",
        dob: "2002-03-01",
        salary: "25000",
        joiningDate: "2019-10-01",
        relievingDate: "2019-07-06",
        contact: "9835453674",
        status: "inactive",
        id: 5

    },
    {
        name: "rahul",
        dob: "1998-06-15",
        salary: "28000",
        joiningDate: "2018-05-06",
        relievingDate: "",
        contact: "6835453667",
        status: "active",
        id: 7

    },
    {
        name: "rahuk",
        dob: "2000-08-02",
        salary: "19000",
        joiningDate: "2020-01-01",
        relievingDate: "",
        contact: "9683767667",
        status: "active",
        id: 9

    }
]
export const crudReducer = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        getTableData: (state, action) => {
            return state = action.payload
        },
        addTableData: (state, action) => {
            const stateData = current(state)
            const data = action.payload
            return state = [...stateData, data];
        },
        updateTable: (state, action) => {
            const stateData = current(state)
            const data = action.payload
            let editList = stateData.map((item, index) => {
                if (item.id === data.editId) {
                    return data.data
                }
                return item
            })
            return state = editList
        },
        deleteItem: (state, action) => {
            const stateData = current(state)
            const deleteItem = stateData.filter((item) => {
                return item.contact !== action.payload.contact
            })
            return state = deleteItem;

        }
    }

})
export const { getTableData, addTableData, updateTable, deleteItem } = crudReducer.actions

export default crudReducer.reducer

