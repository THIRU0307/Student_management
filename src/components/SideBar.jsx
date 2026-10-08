import { NavLink } from "react-router-dom";

function Sidebar({ open, onClose }) {
    return (
        <div className={"bg-white shadow app-sidebar" + (open ? " open" : "")}>

            <h3 className="fw-bold mb-4">
                Menu
            </h3>

            <div className="d-flex flex-column gap-2">

                <NavLink
                    onClick={onClose}
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
                    onClick={onClose}
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
                    onClick={onClose}
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
                    onClick={onClose}
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
                    onClick={onClose}
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