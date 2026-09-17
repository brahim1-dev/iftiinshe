import { LuCodeXml } from "react-icons/lu";
import { Link } from "react-router-dom";
const CourseCard = ({course}) => {
  return (

    <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
            {/* <!-- Course Title & Category --> */}
            <div className="mb-6">
                <span className="text-gray-600 my-2">
                    {course.type}
                </span>
                <h3 className="text-xl font-bold"> 
                    {course.title}
                </h3>
            </div>

            {/* <!-- Course Description  --> */}
            <div className="mb-5 line-clamp-2">
                {course.description}
            </div>

            {/* <!-- Course Duration and Price --> */}
            <div className="flex justify-between mb-5">
                <h3 className="text-indigo-500">
                    Duration: {course.duration} 
                </h3>
                <h3 className="text-indigo-500">
                    Price: {course.price}
                </h3>
            </div>

            <div className="border border-gray-100 mb-5"></div>

            {/* <!-- Read more button + Tech  --> */}
            <div className="flex  justify-between">
                <span className="text-orange-700 flex gap-2 items-center">
                    {/* <i className="fa-solid fa-code"></i>  */}
                    <LuCodeXml/>
                    {course.technology} 
                </span>
                <Link className="text-center bg-indigo-500 hover:opacity-90 rounded-lg px-4 py-2  text-white"
                    to={`/courses/${course.id}`}>Read
                    More</Link>
            </div>
        </div>
    </div>
  )
}

export default CourseCard