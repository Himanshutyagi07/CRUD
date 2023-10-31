import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetData from './crud/GetData';
import AddData from './crud/AddData';
import EditData from './crud/EditData';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<GetData />} />
        <Route path="editData" element={<EditData />} />
        <Route path="addData" element={<AddData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App