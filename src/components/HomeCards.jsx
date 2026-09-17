import { Link } from "react-router-dom"
import Card from "./Card"

const HomeCards = () => {
  return (
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {/* <!-- Learners --> */}
                <Card bg={`bg-gray-100`}>
                {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md"> */}
                    <h2 className="text-2xl font-bold">For Learners</h2>
                    <p className="mt-2 mb-4">Browse our courses and start learning today.</p>
                    <Link className="bg-black text-white w-38 text-center rounded-lg px-4 py-2 hover:bg-gray-700 inline-block"
                        to={`/courses`}>Browse
                        Courses</Link>
                {/* </div> */}
                </Card>

                {/* <!-- Instructors --> */}
                 <Card bg={`bg-indigo-100`}>
                {/* <div className="bg-indigo-100 p-6 rounded-lg shadow-md"> */}
                    <h2 className="text-2xl font-bold">For Instructors</h2>
                    <p className="mt-2 mb-4">Create a course and start teaching today.</p>
                    <Link className="bg-indigo-700 text-white w-38 text-center rounded-lg px-4 py-2 hover:opacity-90 inline-block"
                        to={`/add-course`}>Add
                        Course</Link>
                {/* </div> */}
                </Card>
            </div>
        </div>
    </section>
  )
}

export default HomeCards