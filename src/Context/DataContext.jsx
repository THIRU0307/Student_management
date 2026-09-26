import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {

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


    const [attendance, setAttendance] = useState([
        {
            id: 1,
            studentId: 1,
            status: "Present"
        },
        {
            id: 2,
            studentId: 2,
            status: "Present"
        },
        {
            id: 3,
            studentId: 3,
            status: "Present"
        },
        {
            id: 4,
            studentId: 4,
            status: "Absent"
        }
    ]);


    const [marks, setMarks] = useState([
        {
            id: 1,
            studentId: 2,
            name: "Santhosh Kumar",
            course: "CSE",
            subject: "Data Structures",
            mark: 80,
            maxMark: 100
        },
        {
            id: 2,
            studentId: 4,
            name: "Thirumurugan",
            course: "Electronics",
            subject: "Data Structures",
            mark: 60,
            maxMark: 100
        },
        {
            id: 3,
            studentId: 2,
            name: "Santhosh Kumar",
            course: "CS",
            subject: "JAVA",
            mark: 75,
            maxMark: 100
        },
        {
            id: 4,
            studentId: 3,
            name: "Dinesh",
            course: "Mechanical",
            subject: "Data Structures",
            mark: 70,
            maxMark: 100
        },
        {
            id: 5,
            studentId: 2,
            name: "Santhosh Kumar",
            course: "CSE",
            subject: "Python",
            mark: 90,
            maxMark: 100
        }
    ]);


    return (
        <DataContext.Provider
            value={{
                students,
                setStudents,
                courses,
                setCourses,
                attendance,
                setAttendance,
                marks,
                setMarks
            }}
        >
            {children}
        </DataContext.Provider>
    );
}


export function useData() {
    return useContext(DataContext);
}