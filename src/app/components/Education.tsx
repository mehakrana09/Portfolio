export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Punjabi University Patiala",
      year: "2022 - Present",
      description: "Specializing in Machine Learning and Frontend Development. Current GPA: 8.04/10.0",
      image: "https://res.cloudinary.com/dt2skn2ln/image/upload/v1736706951/Punjabi_University__Patiala_Logo_jjyq0o.png" // Replace with the actual image path
    },
    {
      degree: "Intermediate Of Science (12th)",
      institution: "KV2 DMW Patiala",
      year: "2020 - 2021",
      description: "Passed with 91.6%.",
      image: "https://res.cloudinary.com/dt2skn2ln/image/upload/v1736707021/kvs_etgbg7.jpg" // Replace with the actual image path
    }
  ];

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <div className="flex items-center mb-4">
            <img 
              src={edu.image} 
              alt={edu.institution} 
              className="w-12 h-12 rounded-full mr-4 object-cover" 
            />
            <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
          </div>
          <p className="text-gray-600 font-medium">{edu.institution}</p>
          <p className="text-gray-500">{edu.year}</p>
          <p className="text-gray-700 mt-2">{edu.description}</p>
        </div>
      ))}
    </div>
  );
}
