import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "My Travel Website",
      description: "A FrontEnd project using React.js.",
      image: "https://res.cloudinary.com/dt2skn2ln/image/upload/v1736710172/Screenshot_2025-01-13_at_12.58.55_AM_dejcei.png",
      tags: ["HTML-CSS", "javascript", "react.js"]
    },
    // {
    //   title: "Personal Blog",
    //   description: "A responsive blog built with React and Next.js.",
    //   image: "/placeholder.svg?height=200&width=300",
    //   tags: ["React", "Next.js", "Tailwind CSS"]
    // },
    {
      title: "Resume Parsing App",
      description: "An ML model categorize resume and to suggest jobs.",
      image: "https://res.cloudinary.com/dt2skn2ln/image/upload/v1736710533/resume_parsing_pnbmbh.png",
      tags: ["Machine Learning", "Python", "Pandas", "NLP"]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
          <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

