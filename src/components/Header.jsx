import React from "react";

function Header({ onMenuClick }) {
    return (
        <nav className="navbar bg-body-tertiary bg-white shadow app-header">

            <div className="container-fluid flex-nowrap">

                <div className="d-flex align-items-center gap-2 min-w-0">

                    {/* Hamburger – visible only on mobile / tablet */}
                    <button
                        className="btn btn-outline-secondary menu-btn"
                        type="button"
                        aria-label="Toggle menu"
                        onClick={onMenuClick}
                    >
                        ☰
                    </button>

                    <span className="navbar-brand fw-bold fs-3 m-0 app-title">
                        Student Management System
                    </span>

                </div>

                <div className="d-flex align-items-center flex-shrink-0">

                    <button
                        className="btn btn-primary border rounded-circle m-1"
                        type="button"
                    >
                        A
                    </button>

                    <button
                        className="btn m-1 fw-bold d-none d-sm-inline-block"
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
