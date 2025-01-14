
import React from 'react';

interface Responsibility {
  bold: string;
  normal: string;
}

interface ResponsibilitiesSectionProps {
  responsibilities: Responsibility[];
}

const ResponsibilitiesSection: React.FC<ResponsibilitiesSectionProps> = ({
  responsibilities,
}) => {
  if (!responsibilities.length) return null;
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-neutral-900">What you’ll do</h2>
      <ul className="list-disc pl-5 space-y-4 text-lg md:text-xl leading-relaxed text-neutral-800">
        {responsibilities.map((item, index) => (
          <li key={index}>
            <strong>{item.bold}</strong> {item.normal}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResponsibilitiesSection;