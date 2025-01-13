import React from 'react';
// Example: using Heroicons via react-icons
// npm install react-icons
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineChip, HiOutlineArrowLeft } from 'react-icons/hi';
import { FaTwitter, FaFacebook, FaLinkedinIn, FaLink } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import NeuButton from './utilities/button';
import Divider from './utilities/Divider';

interface Responsibility {
  bold: string;
  normal: string;
}

interface JobDescriptionProps {
  title: string;
  description: string;
  additionalInfo: string;
  location: string;
  jobType: string;
  department: string;
  responsibilities?: Responsibility[]; // updated type
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  description,
  additionalInfo,
  location,
  jobType,
  department,
  responsibilities = [],
}) => {
  return (
    <div className="min-h-screen bg-white text-neutral-800 px-8 py-16 font-sans">
      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left Section */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-6 text-neutral-900">{title}</h1>
          <p className="text-base md:text-lg mb-6 leading-relaxed">{description}</p>
          <p className="text-base md:text-lg leading-relaxed">{additionalInfo}</p>
          <Divider />
          {/* Conditionally render Responsibilities */}
          {responsibilities.length > 0 && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">What you’ll do</h2>
              <ul className="list-disc pl-5 space-y-4 text-base md:text-lg leading-relaxed text-neutral-800">
                {responsibilities.map((item, index) => (
                  <li key={index}>
                    <strong>{item.bold}</strong>
                    {item.normal}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Divider />
        </div>

        {/* Right Section */}
        <aside className="md:col-span-1 flex-shrink-0">
          <div className="border rounded-lg p-6 shadow-md space-y-6">
            {/* "All roles" heading with animated arrow */}
            <h2 className="text-xl font-semibold flex items-center space-x-2 group hover:text-indigo-500 cursor-pointer">
              <HiOutlineArrowLeft
                className="text-indigo-500 w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"
              />
              <span>All roles</span>
            </h2>

            {/* Vertical list of metadata */}
            <ul className="space-y-2 text-base md:text-lg">
              <li className="flex items-center space-x-2">
                <HiOutlineLocationMarker className="text-indigo-500" size={20} />
                <span>{location}</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiOutlineClock className="text-indigo-500" size={20} />
                <span>{jobType}</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiOutlineChip className="text-indigo-500" size={20} />
                <span>{department}</span>
              </li>
            </ul>

            {/* Icon row (links/social) */}
            <div className="flex items-center space-x-4">
              <FaLink className="text-neutral-400 hover:text-neutral-600 cursor-pointer" size={18} />
              <FaTwitter className="text-neutral-400 hover:text-neutral-600 cursor-pointer" size={18} />
              <FaFacebook className="text-neutral-400 hover:text-neutral-600 cursor-pointer" size={18} />
              <FaLinkedinIn className="text-neutral-400 hover:text-neutral-600 cursor-pointer" size={18} />
              <MdEmail className="text-neutral-400 hover:text-neutral-600 cursor-pointer" size={18} />
            </div>

            {/* Apply button */}
            <NeuButton text="Apply for this role" className="w-full text-base md:text-lg" />

            {/* Divider */}
            <hr className="my-4 border-t border-neutral-300" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default JobDescription;
