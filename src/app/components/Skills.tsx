export default function Skills() {
  const skills = [
    { category: "Programming Language", items: ["Python", "C/C++", "javascript"] },
    { category: "Machine Learning", items: ["TensorFlow", "Pandas", "Matplotlib", "Scikit-learn", "Natural Language Processing"] },
    { category: "Frontend Development", items: ["React", "HTML", "CSS"] },
    { category: "Academic", items: ["Data Structures", "Algorithms", "Operating System", "Computer Networking", "Database Management System"]},
    { category: "Tools and Framework", items: ["Git", "Jupyter", "Visual Studio", "Google Colab", "PyCharm"] }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skillSet) => (
        <div key={skillSet.category} className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillSet.category}</h3>
          <ul className="space-y-2">
            {skillSet.items.map((skill) => (
              <li key={skill} className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

