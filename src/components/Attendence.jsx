import React, { useState } from "react";
import { TiTimes, TiTick } from "react-icons/ti";

function Attendence() {

    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Rahul Sharma",
            course: "Computer Science",
            status: "Present"
        },
        {
            id: 2,
            name: "Santhosh Kumar",
            course: "Computer Science",
            status: "Present"
        },
        {
            id: 3,
            name: "Dinesh",
            course: "Mechanical Engineering",
            status: "Present"
        },
        {
            id: 4,
            name: "Thirumurugan",
            course: "Electronics Engineering",
            status: "Absent"
        }
    ]);

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("All Courses");


    // Change attendance status
    function changeStatus(id, status) {

        setStudents(
            students.map((student) =>
                student.id === id
                    ? { ...student, status: status }
                    : student
            )
        );

    }


    // Present count
    const presentCount = students.filter(
        (student) => student.status === "Present"
    ).length;


    // Absent count
    const absentCount = students.filter(
        (student) => student.status === "Absent"
    ).length;


    // Filter students by course
    const filteredStudents =
        selectedCourse === "All Courses"
            ? students
            : students.filter(
                (student) => student.course === selectedCourse
            );


    // Save attendance
    function saveAttendance() {

        if (!selectedDate) {
            alert("Please select a date");
            return;
        }

        alert("Attendance saved successfully!");

    }


    return (
        <>

            {/* Header */}

            <div className="container-fluid m-1">

                <h2>Attendance</h2>

                <h4>
                    Manage student attendance
                </h4>

            </div>


            {/* Filters */}

            <div className="row g-3 m-1 pb-2 bg-white shadow rounded">

                <div className="col-md-4">

                    <label className="form-label fw-bold">
                        Select Date
                    </label>

                    <input
                        type="date"
                        className="form-control"
                        value={selectedDate}
                        onChange={(e) =>
                            setSelectedDate(e.target.value)
                        }
                    />

                </div>


                <div className="col-md-4">

                    <label className="form-label fw-bold">
                        Select Course
                    </label>

                    <select
                        className="form-select"
                        value={selectedCourse}
                        onChange={(e) =>
                            setSelectedCourse(e.target.value)
                        }
                    >

                        <option>All Courses</option>

                        <option>
                            Computer Science
                        </option>

                        <option>
                            Mechanical Engineering
                        </option>

                        <option>
                            Electronics Engineering
                        </option>

                    </select>

                </div>


                <div className="col-md-4 d-flex align-items-end">

                    <button
                        className="btn btn-primary w-100"
                        onClick={saveAttendance}
                    >
                        Save Attendance
                    </button>

                </div>

            </div>


            {/* Attendance Cards */}

            <div className="row m-1 d-flex justify-content-around mt-3">


                {/* Total Students */}

                <div className="col-sm-4 mb-3">

                    <div className="card shadow bg-white">

                        <div className="card-body">

                            <div className="d-flex align-items-center gap-3">

                                <button className="btn btn-primary">
                                    👥
                                </button>

                                <div>

                                    <h6 className="card-title">
                                        Total Students
                                    </h6>

                                    <p className="card-title fw-bold">
                                        {students.length}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Present */}

                <div className="col-sm-4 mb-3">

                    <div className="card shadow bg-white">

                        <div className="card-body">

                            <div className="d-flex align-items-center gap-3">

                                <button className="btn btn-success">
                                    <TiTick />
                                </button>

                                <div>

                                    <h6 className="card-title">
                                        Present
                                    </h6>

                                    <p className="card-title fw-bold">
                                        {presentCount}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Absent */}

                <div className="col-sm-4 mb-3">

                    <div className="card shadow bg-white">

                        <div className="card-body">

                            <div className="d-flex align-items-center gap-3">

                                <button className="btn btn-danger">
                                    <TiTimes />
                                </button>

                                <div>

                                    <h6 className="card-title">
                                        Absent
                                    </h6>

                                    <p className="card-title fw-bold">
                                        {absentCount}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Student Table */}

            <div className="table-responsive me-1">

                <table className="table table-bordered mb-0">

                    <thead>

                        <tr>

                            <th>
                                STUDENT NAME
                            </th>

                            <th>
                                COURSE
                            </th>

                            <th>
                                STATUS
                            </th>

                            <th>
                                ACTION
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredStudents.map((student) => (

                            <tr key={student.id}>

                                <td className="p-3">
                                    {student.name}
                                </td>

                                <td className="p-3">
                                    {student.course}
                                </td>

                                <td className="p-3">

                                    <span
                                        className={
                                            student.status === "Present"
                                                ? "badge bg-success"
                                                : "badge bg-danger"
                                        }
                                    >
                                        {student.status}
                                    </span>

                                </td>

                                <td className="p-3">

                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() =>
                                            changeStatus(
                                                student.id,
                                                "Present"
                                            )
                                        }
                                    >
                                        <TiTick /> Present
                                    </button>


                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            changeStatus(
                                                student.id,
                                                "Absent"
                                            )
                                        }
                                    >
                                        <TiTimes /> Absent
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>

    );
}

export default Attendence;