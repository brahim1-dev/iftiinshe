import { Link } from "react-router-dom"


const ViewAllCourses = () => {
  return (
    <section className="mx-auto max-w-lg my-10 px-6">
        <Link className="block bg-black text-white text-center text-lg py-4 px-6 rounded-xl hover:opacity-90"
            to={`/courses`}>View All
            Courses</Link>
            
    </section>
  )
}

export default ViewAllCourses