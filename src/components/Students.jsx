
import React, { useState } from "react";

function Students() {

    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Rahul Sharma",
            roll: "CS001",
            email: "rahul.sharma@email.com",
            course: "Computer Science",
            phone: "+91-9867543001",
            location: "Mumbai, Maharashtra",
            status: "Active"
        },
        {
            id: 2,
            name: "Santhosh Kumar",
            roll: "CS002",
            email: "santhosh@email.com",
            course: "Computer Science",
            phone: "+91-9876543210",
            location: "Chennai, Tamil Nadu",
            status: "Active"
        },
        {
            id: 3,
            name: "Dinesh",
            roll: "ME001",
            email: "dinesh@email.com",
            course: "Mechanical Engineering",
            phone: "+91-9876501234",
            location: "Trichy, Tamil Nadu",
            status: "Active"
        },
        {
            id: 4,
            name: "Thirumurugan",
            roll: "EC001",
            email: "thirumurugan@email.com",
            course: "Electronics Engineering",
            phone: "+91-9876512345",
            location: "Pudukkottai, Tamil Nadu",
            status: "Inactive"
        }
    ]);

    const [showForm, setShowForm] = useState(false);

    const [editId, setEditId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        roll: "",
        email: "",
        course: "",
        phone: "",
        location: "",
        status: "Active"
    });


    // Input value change
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    // Add / Update student
    function handleSubmit(e) {
        e.preventDefault();

        if (editId !== null) {

            // Update existing student
            setStudents(
                students.map((student) =>
                    student.id === editId
                        ? { ...student, ...formData }
                        : student
                )
            );

        } else {

            // Add new student
            const newStudent = {
                id: Date.now(),
                ...formData
            };

            setStudents([...students, newStudent]);
        }

        // Clear form
        setFormData({
            name: "",
            roll: "",
            email: "",
            course: "",
            phone: "",
            location: "",
            status: "Active"
        });

        setEditId(null);
        setShowForm(false);
    }


    // Edit student
    function handleEdit(student) {

        setFormData({
            name: student.name,
            roll: student.roll,
            email: student.email,
            course: student.course,
            phone: student.phone,
            location: student.location,
            status: student.status
        });

        setEditId(student.id);
        setShowForm(true);
    }


    // Delete student
    function handleDelete(id) {

        setStudents(
            students.filter((student) => student.id !== id)
        );
    }


    // Open Add form
    function handleAdd() {

        setFormData({
            name: "",
            roll: "",
            email: "",
            course: "",
            phone: "",
            location: "",
            status: "Active"
        });

        setEditId(null);
        setShowForm(true);
    }


    return (
        <>

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mt-1">

                <div>
                    <h2>Students</h2>
                    <h4>Manage student information</h4>
                </div>

                <div>
                    <button
                        className="btn btn-primary me-3"
                        onClick={handleAdd}
                    >
                        Add Student
                    </button>
                </div>

            </div>


            {/* Add / Edit Form */}
            {showForm && (
                <div className="card shadow mt-3 m-1">

                    <div className="card-body">

                        <h5 className="fw-bold mb-3">
                            {editId !== null ? "Edit Student" : "Add Student"}
                        </h5>

                        <form onSubmit={handleSubmit}>

                            <div className="row">

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


                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Roll Number
                                    </label>

                                    <input
                                        type="text"
                                        name="roll"
                                        className="form-control"
                                        value={formData.roll}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


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


                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Location
                                    </label>

                                    <input
                                        type="text"
                                        name="location"
                                        className="form-control"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Status
                                    </label>

                                    <select
                                        name="status"
                                        className="form-select"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>

                            </div>


                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                            >
                                {editId !== null ? "Update Student" : "Add Student"}
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


            {/* Student Cards */}

            <div className="row m-1 mt-3">

                {students.map((student) => (

                    <div
                        className="col-sm-6 mb-3"
                        key={student.id}
                    >

                        <div className="card bg-white shadow">

                            <div className="card-body">

                                {/* Name + Status */}

                                <div className="d-flex justify-content-around align-items-center">

                                    <div className="d-flex align-items-center">

                                        <button className="btn btn-primary border rounded-circle me-2">
                                            {student.name.charAt(0).toUpperCase()}
                                        </button>

                                        <div>
                                            <p className="fw-bold mb-0">
                                                {student.name}
                                            </p>
                                        </div>

                                    </div>


                                    <button
                                        className={
                                            student.status === "Active"
                                                ? "btn btn-outline-success fw-bold me-3"
                                                : "btn btn-outline-danger fw-bold me-3"
                                        }
                                    >
                                        {student.status}
                                    </button>

                                </div>


                                {/* Student Details */}

                                <div className="ms-5">

                                    <div>
                                        Roll: {student.roll}
                                    </div>

                                    <div>
                                        Email: {student.email}
                                    </div>

                                    <div>
                                        Course: {student.course}
                                    </div>

                                    <div>
                                        Phone: {student.phone}
                                    </div>

                                    <div>
                                        Location: {student.location}
                                    </div>

                                </div>


                                {/* Buttons */}

                                <div className="d-flex justify-content-evenly gap-3 mt-2">

                                    <button
                                        className="btn btn-primary px-5 py-1"
                                        onClick={() => handleEdit(student)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger px-5 py-1"
                                        onClick={() => handleDelete(student.id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </>
    );
}

export default Students;
