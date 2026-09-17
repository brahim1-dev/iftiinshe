                    
// this will be making as prop
const Hero = ({title, subtitle}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl">
                    {/* this will be making as prop */}
                    {/* Become a web developer */}
                    {title}
                </h1>
                <p className="my-4 text-xl text-white">
                    {/* this will be making as prop */}
                    {/* Learn skills you need to become a full-stack developer   */}
                    {subtitle}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero