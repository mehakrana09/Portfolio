export default function Hobbies() {
    const hobbies = [
      {
        name: "Music Listening",
        description: "I enjoy listening to music across various genres, finding inspiration and relaxation in every melody.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        image: "https://res.cloudinary.com/dt2skn2ln/image/upload/v1736708174/pngtree-headphones-listening-to-music-melody-png-image_3774398_fjkyck.jpg" // Replace with the actual image path
      },
      {
        name: "Mountain Hiking",
        description: "Exploring nature trails and enjoying the great outdoors on weekends.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        image: "https://res.cloudinary.com/dt2skn2ln/image/upload/v1736708095/adventure-1850178_1280_b5zv5z.jpg" // Replace with the actual image path
      },
      {
        name: "Reading",
        description: "Reading allows me to explore new ideas, expand my knowledge, and fuel my imagination.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        image: "https://res.cloudinary.com/dt2skn2ln/image/upload/v1736708261/360_F_272072948_HiAHqdWyphxZmePvKKwXjxxRItUURlEY_g80lwl.jpg" // Replace with the actual image path
      },
    ];
  
    return (
      <section id="hobbies">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <div key={hobby.name} className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                {hobby.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-2">{hobby.name}</h3>
              </div>
              <img 
                src={hobby.image} 
                alt={hobby.name} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
