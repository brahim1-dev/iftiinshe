import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import Courses from '../components/Courses'
import ViewAllCourses from '../components/ViewAllCourses'

const HomePage = () => {
  return (
    <div>
      <Hero title={"Become a Full-stuck Developer" }subtitle={"Learn Skill you need to become a full-stuck developer"} />
      <HomeCards />
      
      <Courses isHome={true}/>

      <ViewAllCourses/>
    </div>
  )
}

export default HomePage