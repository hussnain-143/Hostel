import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashbaord"
import ListStudent from "./pages/ListStudent"

const RoutesFile = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/student/list" element={<ListStudent/>}/>
        </Routes>
    )
}

export default RoutesFile
