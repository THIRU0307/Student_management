import React, { useState } from "react";
import { FcApproval, FcPositiveDynamic } from "react-icons/fc";
import { GiPodiumWinner } from "react-icons/gi";

function Mark() {

    const [marks, setMarks] = useState([
        {
            id: 1,
            name: "Santhosh Kumar",
            course: "CSE",
            subject: "Data Structures",
            mark: 80,
            maxMark: 100
        },
        {
            id: 2,
            name: "Thirumurugan",
            course: "Electronics",
            subject: "Data Structures",
            mark: 60,
            maxMark: 100
        },
        {
            id: 3,
            name: "Santhosh Kumar",
            course: "CS",
            subject: "JAVA",
            mark: 75,
            maxMark: 100
        },
        {
            id: 4,
            name: "Dinesh",
            course: "Mechanical",
            subject: "Data Structures",
            mark: 70,
            maxMark: 100
        },
        {
            id: 5,
            name: "Santhosh Kumar",
            course: "CSE",
            subject: "Python",
            mark: 90,
            maxMark: 100
        }
    ]);


    const [showForm, setShowForm] = useState(false);

    const [editId, setEditId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        course: "",
        subject: "",
        mark: "",
        maxMark: 100
    });


    // Handle input change
    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }


    // Add / Update
    function handleSubmit(e) {

        e.preventDefault();

        const newData = {
            ...formData,
            mark: Number(formData.mark),
            maxMark: Number(formData.maxMark)
        };


        if (editId !== null) {

            setMarks(
                marks.map((item) =>
                    item.id === editId
                        ? { ...item, ...newData }
                        : item
                )
            );

        } else {

            const newMark = {
                id: Date.now(),
                ...newData
            };

            setMarks([...marks, newMark]);

        }


        setFormData({
            name: "",
            course: "",
            subject: "",
            mark: "",
            maxMark: 100
        });

        setEditId(null);
        setShowForm(false);
    }


    // Add button
    function handleAdd() {

        setFormData({
            name: "",
            course: "",
            subject: "",
            mark: "",
            maxMark: 100
        });

        setEditId(null);
        setShowForm(true);
    }


    // Edit
    function handleEdit(item) {

        setFormData({
            name: item.name,
            course: item.course,
            subject: item.subject,
            mark: item.mark,
            maxMark: item.maxMark
        });

        setEditId(item.id);
        setShowForm(true);
    }


    // Delete
    function handleDelete(id) {

        setMarks(
            marks.filter((item) => item.id !== id)
        );

    }


    // Highest mark
    const highestMark =
        marks.length > 0
            ? Math.max(...marks.map((item) => item.mark))
            : 0;


    // Pass rate
    const passedStudents = marks.filter(
        (item) =>
            (item.mark / item.maxMark) * 100 >= 40
    ).length;

    const passRate =
        marks.length > 0
            ? ((passedStudents / marks.length) * 100).toFixed(1)
            : 0;


    return (
        <>

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mt-2">

                <div>

                    <h2>Marks</h2>

                    <h4>
                        Manage Student marks and grades
                    </h4>

                </div>

                <button
                    className="btn btn-primary me-3"
                    onClick={handleAdd}
                >
                    Add Marks
                </button>

            </div>


            {/* Add / Edit Form */}

            {showForm && (

                <div className="card shadow mt-3 m-1">

                    <div className="card-body">

                        <h5 className="fw-bold mb-3">
                            {editId !== null
                                ? "Edit Marks"
                                : "Add Marks"}
                        </h5>


                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                {/* Student Name */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Student Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Course */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Course
                                    </label>

                                    <input
                                        type="text"
                                        name="course"
                                        className="form-control"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Subject */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Marks */}

                                <div className="col-md-3 mb-3">

                                    <label className="form-label">
                                        Marks
                                    </label>

                                    <input
                                        type="number"
                                        name="mark"
                                        className="form-control"
                                        value={formData.mark}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Max Marks */}

                                <div className="col-md-3 mb-3">

                                    <label className="form-label">
                                        Max Marks
                                    </label>

                                    <input
                                        type="number"
                                        name="maxMark"
                                        className="form-control"
                                        value={formData.maxMark}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>


                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                            >
                                {editId !== null
                                    ? "Update Marks"
                                    : "Add Marks"}
                            </button>


                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowForm(false)}
                            >
                                Cancel
                            </button>

                        </form>

                    </div>

                </div>

            )}


            {/* Cards */}

            <div className="row m-1 d-flex justify-content-around mt-3">


                {/* Total Records */}

                <div className="col-sm-4 mb-3">

                    <div className="card shadow bg-white">

                        <div className="card-body">

                            <div className="d-flex align-items-center gap-3">

                                <button className="btn btn-primary">
                                    <FcPositiveDynamic />
                                </button>

                                <div>

                                    <h5 className="card-title">
                                        Total Records
                                    </h5>

                                    <h5 className="card-title">
                                        {marks.length}
                                    </h5>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Highest Marks */}

                <div className="col-sm-4 mb-3">

                    <div className="card shadow bg-white">

                        <div className="card-body">

                            <div className="d-flex align-items-center gap-3">

                                <button className="btn btn-warning">
                                    <GiPodiumWinner />
                                </button>

                                <div>

                                    <h5 className="card-title">
                                        Highest Marks
                                    </h5>

                                    <h5 className="card-title">
                                        {highestMark}
                                    </h5>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Pass Rate */}

                <div className="col-sm-4 mb-3">

                    <div className="card shadow bg-white">

                        <div className="card-body">

                            <div className="d-flex align-items-center gap-3">

                                <button className="btn btn-success">
                                    <FcApproval />
                                </button>

                                <div>

                                    <h5 className="card-title">
                                        Pass Rate
                                    </h5>

                                    <h5 className="card-title">
                                        {passRate}%
                                    </h5>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Marks Table */}

            <div className="table-responsive">

                <table className="table table-bordered p-3 mt-4">

                    <thead>

                        <tr>

                            <th>
                                STUDENT NAME
                            </th>

                            <th>
                                COURSE
                            </th>

                            <th>
                                SUBJECT
                            </th>

                            <th>
                                MARKS
                            </th>

                            <th>
                                MAX MARKS
                            </th>

                            <th>
                                PERCENTAGE
                            </th>

                            <th>
                                ACTION
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {marks.map((item) => {

                            const percentage =
                                ((item.mark / item.maxMark) * 100)
                                    .toFixed(1);

                            return (

                                <tr key={item.id}>

                                    <th className="p-3">
                                        {item.name}
                                    </th>

                                    <td className="p-3">
                                        {item.course}
                                    </td>

                                    <td className="p-3">
                                        {item.subject}
                                    </td>

                                    <td className="p-3">
                                        {item.mark}
                                    </td>

                                    <td className="p-3">
                                        {item.maxMark}
                                    </td>

                                    <td className="p-3">
                                        {percentage}%
                                    </td>

                                    <td className="p-3">

                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() =>
                                                handleEdit(item)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            );

                        })}

                    </tbody>

                </table>

            </div>

        </>
    );
}

export default Mark;