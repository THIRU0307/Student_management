import React from "react";
import { FcRight } from "react-icons/fc";
import { useData } from "../Context/DataContext";

function DashBoard() {

    const {
        students,
        courses,
        marks
    } = useData();


    return (
        <>

            {/* Dashboard Header */}

            <div className="container-fluid m-1">

                <h2>Dashboard</h2>

                <h4>
                    Welcome to the Student Management System
                </h4>

            </div>


            {/* Total Students and Courses */}

            <div className="row m-1 d-flex justify-content-evenly">

                {/* Total Students */}

                <div className="col-sm-6 mb-3">

                    <div className="card shadow bg-white">

                        <div className="card-body">

                            <div className="d-flex align-items-center gap-3">

                                <div>

                                    <button className="btn btn-primary text-primary">
                                        👥
                                    </button>

                                </div>

                                <div>

                                    <h5 className="card-title">
                                        Total Students
                                    </h5>

                                    <p className="card-title fw-bold">
                                        {students.length}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Total Courses */}

                <div className="col-sm-6">

                    <div className="card shadow bg-white">

                        <div className="card-body">

                            <div className="d-flex align-items-center gap-3">

                                <div>

                                    <button className="btn btn-info text-primary">
                                        📚
                                    </button>

                                </div>

                                <div>

                                    <h6 className="card-title">
                                        Total Courses
                                    </h6>

                                    <p className="card-title fw-bold">
                                        {courses.length}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Recent Students and Marks */}

            <div className="row mt-2 m-1">


                {/* Recent Students */}

                <div className="col-sm-6 mb-3">

                    <div className="card bg-white shadow">

                        <div className="card-body">

                            <h6 className="fw-bold">
                                Recent Students
                            </h6>


                            {students.slice(0, 4).map((student) => (

                                <div
                                    key={student.id}
                                    className="d-flex justify-content-between align-items-center bg-white shadow p-2 rounded m-1"
                                >

                                    <div className="d-flex align-items-center">

                                        <button
                                            className="btn btn-primary border rounded-circle m-1"
                                            type="button"
                                        >
                                            {student.name.charAt(0)}
                                        </button>

                                        <div>

                                            <p
                                                className="fw-bold mb-0"
                                                style={{ fontSize: "15px" }}
                                            >
                                                {student.name}
                                            </p>

                                            <small
                                                className="text-muted"
                                                style={{ fontSize: "12px" }}
                                            >
                                                {student.course}
                                            </small>

                                        </div>

                                    </div>


                                    <button
                                        className={
                                            student.status === "Active"
                                                ? "btn btn-outline-success me-2 rounded-pill"
                                                : "btn btn-outline-danger me-2 rounded-pill"
                                        }
                                        style={{
                                            fontSize: "15px",
                                            padding: "4px 15px"
                                        }}
                                    >
                                        {student.status}
                                    </button>

                                </div>

                            ))}


                            <div className="d-flex align-items-center justify-content-center mt-2">

                                <h6 className="text-primary">
                                    View all Students <FcRight />
                                </h6>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Recent Marks */}

                <div className="col-sm-6">

                    <div className="card bg-white shadow">

                        <div className="card-body">

                            <h6 className="fw-bold">
                                Recent Marks
                            </h6>


                            {marks.slice(0, 4).map((item) => {

                                const percentage =
                                    ((item.mark / item.maxMark) * 100)
                                        .toFixed(1);

                                return (

                                    <div
                                        key={item.id}
                                        className="d-flex justify-content-between align-items-center bg-white shadow p-2 rounded m-1"
                                    >

                                        <div>

                                            <p
                                                className="fw-bold mb-0"
                                                style={{ fontSize: "15px" }}
                                            >
                                                {item.name}
                                            </p>

                                            <small
                                                className="text-muted"
                                                style={{ fontSize: "12px" }}
                                            >
                                                {item.subject}
                                            </small>

                                        </div>


                                        <span className="fw-bold">

                                            {item.mark}/{item.maxMark}

                                            <small className="text-success ms-2">
                                                {percentage}%
                                            </small>

                                        </span>

                                    </div>

                                );

                            })}


                            <div className="d-flex align-items-center justify-content-center mt-2">

                                <h6 className="text-primary">
                                    View all Marks <FcRight />
                                </h6>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default DashBoard;