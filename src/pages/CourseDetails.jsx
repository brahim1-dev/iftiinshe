import { FaCode, FaArrowLeft } from "react-icons/fa"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  const navigate = useNavigate()
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:3000/courses/${id}`)
        const data = await res.json()
        setCourse(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCourse();
  }, [id])

  if (!course) {
    return <p className="p-6 text-center">Loading course...</p>;
  }
  const handleDelete = async ()=>{
    // alert("yoiu deleted the course")
     try {
        const res = await fetch(`http://localhost:3000/courses/${id}`,{
          method:"Delete",
        });
        navigate("/courses")
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <>
      {/*
  <!-- Back Button --> */}
      <section>
        <div className="container m-auto p-6">
          <Link className="text-indigo-500 hover:text-indigo-600 flex items-center gap-2"
            to="/courses">
            {/* <i class="fas fa-arrow-le<ft mr-2"></i> */}
            <FaArrowLeft className="" />
            Back to Courses</Link>
        </div>
      </section>

      {/*
  <!-- Course Info --> */}
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6 grid grid-cols-1 md:grid-cols-[7fr_4fr] gap-6">
          {/*
      <!-- Course Details --> */}
          <main>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <p className="text-gray-500 mb-4">{course.type}</p>
              <h2 className="text-3xl font-bold mb-4">{course.title} </h2>
              <div className="text-orange-700 flex items-center justify-center md:justify-start gap-2">
                {/* <i class="fa-solid fa-code text-lg"></i> */}
                <FaCode className="font-semibold" />
                <span className="font-semibold">{course.technology} </span>
              </div>
            </div>
            {/*
        <!-- Description --> */}
            <div className="mt-6 bg-white rounded-lg p-6 shadow-md ">
              <h2 className="text-lg font-bold mb-6">Course Description</h2>
              <p>
                {course.description}
              </p>
              <hr className="mt-4" />
              {/*
          <!-- Course Duration and Course Price --> */}
              <div className="flex  justify-between font-semibold text-indigo-500 my-2">
                <h3>Duration :{course.duration} </h3>
                <h3>Price: ${course.price}</h3>
              </div>
            </div>
          </main>

          {/*
      <!-- Instructor Information --> */}
          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">Instructor Info</h2>
              <h3 className="text-2xl">{course.instructor.name}</h3>
              <p className="mt-2">
                {course.instructor.description}
              </p>
              <hr className="my-4" />
              <h3 className="text-xl">Contact Email</h3>
              <p className="font-bold p-2 bg-indigo-100 rounded my-2">{course.instructor.contactEmail}</p>
              <h3 className="text-xl">Contact Phone</h3>
              <p className="font-bold p-2 bg-indigo-100 rounded my-2">{course.instructor.contactPhone} </p>
            </div>

            {/*
        <!-- Edit and Delete Button --> */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl mb-6">Manage Course</h3>
              <Link className="bg-indigo-500 rounded-full text-white text-center font-bold py-2 px-4 hover:bg-indigo-600 block"
                to={`/edit-course/${id}`}>Edit
                Course</Link>
              <button onClick={handleDelete} className="bg-red-500 mt-4 rounded-full w-full text-white text-center font-bold py-2 px-4 hover:bg-red-600 block"
               >Delete
                Course</button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default CourseDetails