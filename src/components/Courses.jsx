
import React, { useState } from "react";

function Courses() {

    const [courses, setCourses] = useState([
        {
            id: 1,
            name: "Computer Science",
            code: "CS",
            instructor: "Dr. Rajesh Kumar",
            students: 45,
            duration: "4 Years",
            fees: 200000
        },
        {
            id: 2,
            name: "Computer Application",
            code: "CA",
            instructor: "Dr. Mukesh",
            students: 28,
            duration: "4 Years",
            fees: 220000
        },
        {
            id: 3,
            name: "Information Technology",
            code: "IT",
            instructor: "Prof. Thirumurugan",
            students: 34,
            duration: "4 Years",
            fees: 270000
        },
        {
            id: 4,
            name: "Electronics Engineering",
            code: "EC",
            instructor: "Dr. Arun",
            students: 35,
            duration: "4 Years",
            fees: 250000
        },
        {
            id: 5,
            name: "Mechanical Engineering",
            code: "ME",
            instructor: "Prof. Ravi Kumar",
            students: 25,
            duration: "4 Years",
            fees: 300000
        }
    ]);


    const [showForm, setShowForm] = useState(false);

    const [editId, setEditId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        code: "",
        instructor: "",
        students: "",
        duration: "",
        fees: ""
    });


    // Input change
    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }


    // Add / Update Course
    function handleSubmit(e) {

        e.preventDefault();

        if (editId !== null) {

            // Update course
            setCourses(
                courses.map((course) =>
                    course.id === editId
                        ? {
                            ...course,
                            ...formData,
                            students: Number(formData.students),
                            fees: Number(formData.fees)
                        }
                        : course
                )
            );

        } else {

            // Add course
            const newCourse = {
                id: Date.now(),
                ...formData,
                students: Number(formData.students),
                fees: Number(formData.fees)
            };

            setCourses([...courses, newCourse]);
        }


        // Clear form
        setFormData({
            name: "",
            code: "",
            instructor: "",
            students: "",
            duration: "",
            fees: ""
        });

        setEditId(null);
        setShowForm(false);
    }


    // Add button
    function handleAdd() {

        setFormData({
            name: "",
            code: "",
            instructor: "",
            students: "",
            duration: "",
            fees: ""
        });

        setEditId(null);
        setShowForm(true);
    }


    // Edit
    function handleEdit(course) {

        setFormData({
            name: course.name,
            code: course.code,
            instructor: course.instructor,
            students: course.students,
            duration: course.duration,
            fees: course.fees
        });

        setEditId(course.id);
        setShowForm(true);
    }


    // Delete
    function handleDelete(id) {

        setCourses(
            courses.filter((course) => course.id !== id)
        );

    }


    return (
        <>

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mt-2">

                <div>
                    <h2>Courses</h2>
                    <h4>Manage courses information</h4>
                </div>

                <button
                    className="btn btn-primary me-3"
                    onClick={handleAdd}
                >
                    Add Course
                </button>

            </div>


            {/* Add / Edit Form */}

            {showForm && (

                <div className="card shadow mt-3 m-1">

                    <div className="card-body">

                        <h5 className="fw-bold mb-3">
                            {editId !== null ? "Edit Course" : "Add Course"}
                        </h5>


                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                {/* Course Name */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Course Name
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


                                {/* Code */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Course Code
                                    </label>

                                    <input
                                        type="text"
                                        name="code"
                                        className="form-control"
                                        value={formData.code}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Instructor */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Instructor
                                    </label>

                                    <input
                                        type="text"
                                        name="instructor"
                                        className="form-control"
                                        value={formData.instructor}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Students */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Number of Students
                                    </label>

                                    <input
                                        type="number"
                                        name="students"
                                        className="form-control"
                                        value={formData.students}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Duration */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Duration
                                    </label>

                                    <input
                                        type="text"
                                        name="duration"
                                        className="form-control"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        placeholder="Example: 4 Years"
                                        required
                                    />

                                </div>


                                {/* Fees */}

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Fees
                                    </label>

                                    <input
                                        type="number"
                                        name="fees"
                                        className="form-control"
                                        value={formData.fees}
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
                                    ? "Update Course"
                                    : "Add Course"}
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


            {/* Course Table */}

            <div className="table-responsive">

                <table className="table table-bordered mt-3">

                    <thead>

                        <tr>

                            <th scope="col">
                                COURSE NAME
                            </th>

                            <th scope="col">
                                CODE
                            </th>

                            <th scope="col">
                                INSTRUCTOR
                            </th>

                            <th scope="col">
                                STUDENTS
                            </th>

                            <th scope="col">
                                DURATION
                            </th>

                            <th scope="col">
                                FEES
                            </th>

                            <th scope="col">
                                ACTION
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {courses.map((course) => (

                            <tr key={course.id}>

                                <th className="p-3" scope="row">
                                    {course.name}
                                </th>

                                <td className="p-3">
                                    {course.code}
                                </td>

                                <td className="p-3">
                                    {course.instructor}
                                </td>

                                <td className="p-3">
                                    {course.students}
                                </td>

                                <td className="p-3">
                                    {course.duration}
                                </td>

                                <td className="p-3">
                                    ₹{course.fees.toLocaleString("en-IN")}
                                </td>

                                <td className="p-3">

                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        onClick={() => handleEdit(course)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(course.id)}
                                    >
                                        Delete
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

export default Courses;
