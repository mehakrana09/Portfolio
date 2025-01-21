'use client'

import { useState } from 'react'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Hobbies from './Hobbies'

const tabs = [
  { id: 'education', label: 'Education', component: Education },
  { id: 'skills', label: 'Skills', component: Skills },
  { id: 'projects', label: 'Projects', component: Projects , projectUrl: "https://github.com/mehakrana09" },
  { id: 'hobbies', label: 'Hobbies', component: Hobbies },
]

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('education')

  return (
    <div className="my-16">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {tabs.map((tab) => (
          activeTab === tab.id && <tab.component key={tab.id} projectUrl={tab.projectUrl} />
        ))}
      </div>
    </div>
  )
}

