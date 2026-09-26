import React from "react";

function Header() {
    return (
        <nav className="navbar bg-body-tertiary bg-white shadow">

            <div className="container-fluid">

                <a className="navbar-brand fw-bold fs-3">
                    Student Management System
                </a>

                <div className="d-flex align-items-center">

                    <button
                        className="btn btn-primary border rounded-circle m-1"
                        type="button"
                    >
                        A
                    </button>

                    <button
                        className="btn m-1 fw-bold"
                        type="button"
                    >
                        Admin
                    </button>

                    <button
                        className="btn btn-danger m-1"
                        type="button"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Header;