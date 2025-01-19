import React from "react";
import JoinTeam from "../components/CareerComponets/JoinTeam";
import RolesTable from "../components/CareerComponets/RolesTable";

const executiveRoles = [
  {
    title: "President",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Vice President",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Treasurer",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Secretary",
    location: "Main Campus",
    type: "Full Time",
  },
];

const functionalRoles = [
  {
    title: "Subcommittee Leader (Cybersecurity)",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Subcommittee Leader (IT)",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Subcommittee Leader (Engineering)",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Subcommittee Leader (Commerce)",
    location: "Main Campus",
    type: "Full Time",
  },

];

const EngineeringAssiocate = [
  {
    title: "Software Engineer",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Ui/Ux Designer",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Backend Developer",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Frontend Developer",
    location: "Main Campus",
    type: "Full Time",
  },

];

const CybersecurityAssiocate = [
  {
    title: "Cybersecurity Analyst",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Security Engineer",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Security Architect",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Security Consultant",
    location: "Main Campus",
    type: "Full Time",
  },

];


const supportRoles = [
  {
    title: "Event Coordinator",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Sponsorship Liaison",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Public Relations Officer",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Membership Coordinator",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Media and Design Officer",
    location: "Main Campus/Remote",
    type: "Full Time",
  },
  {
    title: "Technology Officer (Tech Lead)",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Social Coordinator",
    location: "Main Campus",
    type: "Full Time",
  },
  {
    title: "Diversity and Inclusion Officer",
    location: "Main Campus",
    type: "Full Time",
  },
];

const CareersPage: React.FC = () => {
  return (
    <div className="bg-neutral-50 text-neutral-800 px-6 py-12 font-sans">
      {/* Section for joining the team */}
      <JoinTeam />
      {/* Roles tables for different categories */}
      <RolesTable title="Executive Roles" roles={executiveRoles} />
      <RolesTable title="Engineering Associate" roles={EngineeringAssiocate} />
      <RolesTable title="Cybersecurity Associate" roles={CybersecurityAssiocate} />
      <RolesTable title="Functional Roles" roles={functionalRoles} />
      <RolesTable title="Additional Support Roles" roles={supportRoles} />
    </div>
  );
};

export default CareersPage;
