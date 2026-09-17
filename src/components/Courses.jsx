import CourseCard from "./CourseCard"
// import courses from '../courses.json'
import { useState, useEffect } from "react"

const Courses = ({ isHome }) => {
    // console.log(courses)
    const [courses, setCourses] = useState([]);
    // then use: setCourses(data);

    useEffect(() => {
        const fetchCourses = async () => {
            const apiUrl = isHome
                ? "http://localhost:3000/courses?_page=1&_per_page=3"
                : "http://localhost:3000/courses";
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setCourses(isHome ? data.data : data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchCourses();
    }, [isHome]);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">{isHome ? "Recent Courses" : "All Courses"}</h1>
                {/* <!-- Courses Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {courses.map((course) => (
                        // <h1>{course.title}</h1>
                        <CourseCard course={course} key={course.id} />
                    ))}
                    {/* <!-- Course 1 --> */}
                    {/* <CourseCard course={{
                    type: "Front-End",
                    title: "HTML & CSS",
                    description: "Want to master HTML and CSS? our hands course will guide you through the process of creating stunning, responsive...",
                    duration: "2months",
                    price: " $30",
                    tecnology: "HTML, CSS"
                }} /> */}
                </div>
            </div>
        </section>
    )
}

export default Courses