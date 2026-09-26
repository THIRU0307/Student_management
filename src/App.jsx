import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import DashBoard from "./components/DashBoard";
import Students from "./components/Students";
import Courses from "./components/Courses";
import Attendence from "./components/Attendence";
import Mark from "./components/Mark";

import Sidebar from "./components/SideBar";
import Header from "./components/Header";

import { DataProvider } from "./Context/DataContext";


function App() {

    return (

        <DataProvider>

            <BrowserRouter>

                <Sidebar />

                <div style={{ marginLeft: "200px" }}>

                    <Header />

                    <Routes>

                        <Route
                            path="/"
                            element={<DashBoard />}
                        />

                        <Route
                            path="/students"
                            element={<Students />}
                        />

                        <Route
                            path="/courses"
                            element={<Courses />}
                        />

                        <Route
                            path="/attendance"
                            element={<Attendence />}
                        />

                        <Route
                            path="/marks"
                            element={<Mark />}
                        />

                    </Routes>

                </div>

            </BrowserRouter>

        </DataProvider>

    );
}

export default App;