import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div
            className="bg-white shadow"
            style={{
                width: "200px",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                padding: "20px",
            }}
        >

            <h3 className="fw-bold mb-4">
                Menu
            </h3>

            <div className="d-flex flex-column gap-2">

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primary-subtle text-primary fw-bold rounded p-3 text-decoration-none"
                            : "text-dark fw-bold p-3 text-decoration-none"
                    }
                >
                    📊 &nbsp; Dashboard
                </NavLink>


                <NavLink
                    to="/students"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primary-subtle text-primary fw-bold rounded p-3 text-decoration-none"
                            : "text-dark fw-bold p-3 text-decoration-none"
                    }
                >
                    👥 &nbsp; Students
                </NavLink>


                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primary-subtle text-primary fw-bold rounded p-3 text-decoration-none"
                            : "text-dark fw-bold p-3 text-decoration-none"
                    }
                >
                    📚 &nbsp; Courses
                </NavLink>


                <NavLink
                    to="/attendance"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primary-subtle text-primary fw-bold rounded p-3 text-decoration-none"
                            : "text-dark fw-bold p-3 text-decoration-none"
                    }
                >
                    ☑️ &nbsp; Attendance
                </NavLink>


                <NavLink
                    to="/marks"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primary-subtle text-primary fw-bold rounded p-3 text-decoration-none"
                            : "text-dark fw-bold p-3 text-decoration-none"
                    }
                >
                    📝 &nbsp; Marks
                </NavLink>

            </div>

        </div>
    );
}

export default Sidebar;