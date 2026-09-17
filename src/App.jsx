import Courses from './components/Courses'
import Navbar from './components/Navbar'
import AddCoursePage from './pages/AddCoursePage'
import CourseDetails from './pages/CourseDetails'
import CoursesPage from './pages/CoursesPage'
import HomePage from './pages/HomePage'

import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import EditCoursePage from './pages/EditCoursePage'

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/courses/:id' element={<CourseDetails/>}/>
        <Route path='/add-course' element={<AddCoursePage/>}/>
        <Route path='/edit-course/:id' element={<EditCoursePage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App