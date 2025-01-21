'use client'

import { useState } from 'react'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Hobbies from './Hobbies'

// Define the type for tabs
type TabItem = {
  id: string;
  label: string;
  component: React.ComponentType<any>; // Allow components with or without props
  projectUrl?: string; // Optional prop for tabs that need it
};

// Define the Projects component
type ProjectsProps = {
  projectUrl: string;
};

function Project({ projectUrl }: ProjectsProps) {
  return (
    <div>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        {projectUrl}
      </a>
    </div>
  );
}

// Define the tabs array
const tabs: TabItem[] = [
  { id: 'education', label: 'Education', component: Education },
  { id: 'skills', label: 'Skills', component: Skills },
  { id: 'projects', label: 'Projects', component: Projects, projectUrl: 'https://github.com/mehakrana09' },
  { id: 'hobbies', label: 'Hobbies', component: Hobbies },
];

// Main Tab Component
export default function Tabs() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className="my-16">
      {/* Tab Buttons */}
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

      {/* Tab Content */}
      <div className="mt-8">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            tab.id === 'projects' ? (
              <tab.component key={tab.id} projectUrl={tab.projectUrl} />
            ) : (
              <tab.component key={tab.id} />
            )
          ) : null
        )}
      </div>
    </div>
  );
}
