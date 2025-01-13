import React from 'react';
import Divider from './utilities/Divider';

interface JobResponsibilitiesProps {
  responsibilities: string[];
}

const JobResponsibilities: React.FC<JobResponsibilitiesProps> = ({ responsibilities }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">
        What you’ll do
      </h2>
      <ul className="list-disc pl-5 space-y-4 text-base md:text-lg leading-relaxed text-neutral-800">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Divider />
    </section>
  );
};

export default JobResponsibilities;
