"use client";
import React from "react";
import Link from 'next/link';
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineChip,
  HiOutlineArrowLeft,
} from "react-icons/hi";
import { FaTwitter, FaFacebook, FaLinkedinIn, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NeuButton from "./utilities/button";
import Divider from "./utilities/Divider";
import TeamSection from "./jobDescription/TeamSection";
import TitleDescription from './jobDescription/TitleDescription';
import ResponsibilitiesSection from './jobDescription/ResponsibilitiesSection';
import BackgroundSection from './jobDescription/BackgroundSection';
import ClosingStatement from './jobDescription/ClosingStatement';

interface Responsibility {
  bold: string;
  normal: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface JobDescriptionProps {
  title: string;
  description: string;
  additionalInfo: string;
  location: string;
  jobType: string;
  department: string;
  responsibilities?: Responsibility[];
  backgroundPoints?: Responsibility[];
  backgroundClosingStatement?: string;
  benefits?: Benefit[];
  team: { role: string; name: string }[];
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  description,
  additionalInfo,
  location,
  jobType,
  department,
  responsibilities = [],
  backgroundPoints = [],
  backgroundClosingStatement,
  benefits,
  team,
}) => {
  return (
    <div className="min-h-screen bg-white text-neutral-800 px-8 py-16 font-sans">
      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left Section (Scrollable Content) */}
        <div className="md:col-span-2 h-[calc(100vh-64px)] overflow-y-auto pr-4">
          {/* Title, description, additional info */}
          <TitleDescription
            title={title}
            description={description}
            additionalInfo={additionalInfo}
          />
        

          {/* Team Section */}
          <TeamSection team={team} title="Who you’ll work closely with" />
          <Divider />

          {/* Responsibilities: "What you'll do" */}
          <ResponsibilitiesSection responsibilities={responsibilities} />

          {/* Background: "Your background" */}
          <BackgroundSection backgroundPoints={backgroundPoints} />

          {/* Optional closing statement (e.g. diversity statement) */}
          <ClosingStatement statement={backgroundClosingStatement} />

          <Divider />
         
        </div>

        {/* Right Section (Sticky Sidebar) */}
        <aside className="md:col-span-1 flex-shrink-0 sticky top-16">
        <div className="border rounded-lg p-6 shadow-md space-y-6">
            {/* "All roles" heading with animated arrow */}
            <Link href="./careers" passHref>
              <div className="text-xl font-semibold flex items-center space-x-2 group hover:text-indigo-500 cursor-pointer">
                <HiOutlineArrowLeft
                  className="text-indigo-500 w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"
                />
                <span>All roles</span>
              </div>
            </Link>

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
              <FaLink
                className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
                size={18}
              />
              <FaTwitter
                className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
                size={18}
              />
              <FaFacebook
                className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
                size={18}
              />
              <FaLinkedinIn
                className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
                size={18}
              />
              <MdEmail
                className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
                size={18}
              />
            </div>

            {/* Apply button */}
            <NeuButton
              text="Apply for this role"
              className="w-full text-lg md:text-xl"
            />

            {/* Divider */}
            <hr className="my-4 border-t border-neutral-300" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default JobDescription;
