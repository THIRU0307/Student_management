import React, { useState } from "react";
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
import "./App.css";


function App() {

    // Sidebar open/close (used only on mobile & tablet)
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <DataProvider>

            <BrowserRouter>

                <Sidebar
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                {/* Dark backdrop behind the sidebar on mobile */}
                {sidebarOpen && (
                    <div
                        className="sidebar-backdrop"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

                <div className="app-content">
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
