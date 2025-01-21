import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-600 shadow-lg sticky top-0">
      <nav className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          <span className="text-blue-500">Mehak</span> <span className='text-white hover:text-red-600'>Rana</span>
        </h1>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li>
            <Link 
              href="#about" 
              className="text-gray-200 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link 
              href="#tabs" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              My Work
            </Link>
          </li> */}
          <li>
            <Link 
              href="#contact" 
              className="text-gray-200 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

