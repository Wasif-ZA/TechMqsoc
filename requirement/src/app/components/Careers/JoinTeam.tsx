import React from "react";

const JoinTeam = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-neutral-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-neutral-900 mb-4">Join the team</h1>
      <p className="text-neutral-600 text-center max-w-2xl mb-8">
        You arrived on this page with a purpose. Take the next step and engage in a conversation with us to explore if our open roles align with your aspirations.
      </p>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
        {/* Dropdown for Teams */}
        <select className="border border-neutral-300 rounded-md py-2 px-4 text-neutral-700 w-full">
          <option>All teams</option>
          <option>Engineering</option>
          <option>IT</option>
          <option>Cybersecurity</option>
          <option>Commerce</option>
        </select>
        
        {/* Dropdown for Sub-specialties */}
        <select className="border border-neutral-300 rounded-md py-2 px-4 text-neutral-700 w-full">
          <option>All sub-specialties</option>
          {/* Sub-specialties to be decided later */}
        </select>
      </div>
    </section>
  );
};

export default JoinTeam;
