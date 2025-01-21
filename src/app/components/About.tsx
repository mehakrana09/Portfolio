import Image from 'next/image'
import Link from 'next/link'

export default function About({ resumeUrl }: { resumeUrl: string }) {
  return (
    <section id="about" className="my-16 bg-white rounded-xl shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image 
            src="https://res.cloudinary.com/dt2skn2ln/image/upload/v1736704887/photo_hkd5xh.jpg" 
            alt="Mehak" 
            width={300} 
            height={300} 
            className="rounded-full shadow-lg "
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-red-600">About Me</h2>
          <p className="text-gray-800 leading-relaxed">
            I'm a passionate Computer Science student at the Punjabi University Patiala, specializing in Machine Learning and Frontend Development. 
            Currently in my third year, I'm dedicated to creating intelligent systems and beautiful user interfaces. 
            My goal is to bridge the gap between cutting-edge AI technologies and user-friendly web applications.
          </p>
          <div className="mt-6">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition duration-300"
            >
              Get in Touch
            </a>

            <Link 
              href={resumeUrl}
              download
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 ml-4">
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

