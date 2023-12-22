import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Users from "../Users";
import SingleUser from "../SingleUser";
import PrivateRoute from "../PrivateRoute/PrivateRoutes";


export default function AllRoutes() {


    return <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={
                <PrivateRoute>
                    <Users />
                </PrivateRoute>} />
            <Route path="/users/:id" element={
                <PrivateRoute>
                    <SingleUser />
                </PrivateRoute>} />
        </Routes>

    </div>


}