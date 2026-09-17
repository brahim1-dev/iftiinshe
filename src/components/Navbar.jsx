import { NavLink } from "react-router-dom"

const Navbar = () => {
    // const LinkClass = () => {
    //     return "text-white hover:bg-gray-900 rounded py-2 px-3 "
    // };
    const LinkClass = ({isActive}) => 
        isActive 
            ? "text-white hover:bg-gray-900 rounded py-2 px-3 bg-black"
            : "text-white hover:bg-gray-900 rounded py-2 px-3 ";
return (
<nav className="bg-indigo-700 border-b border-indigo-500">
    <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center">
            <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
                {/*
                <!-- logo --> */}
                <NavLink className="flex items-center" to="/">
                    <img className="h-10 w-auto" src="./logo.png" alt="" />
                    <span className="hidden md:block ml-2 font-bold text-2xl text-white">Iftiinshe</span>
                </NavLink>
                {/*
                <!-- Menu --> */}
                <div className="ml-2 md:ml-auto">
                    <div className="flex items-center space-x-2">
                        <NavLink className={LinkClass} to="/">Home
                        </NavLink>
                        <NavLink className={LinkClass} to="/courses">Courses
                        </NavLink>
                        <NavLink className={LinkClass} to="/add-course">Add
                            Course
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
)
}

export default Navbar