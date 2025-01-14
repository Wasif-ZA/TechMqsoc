
import React from 'react';

interface BackgroundPoint {
  bold: string;
  normal: string;
}

interface BackgroundSectionProps {
  backgroundPoints: BackgroundPoint[];
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ backgroundPoints }) => {
  if (!backgroundPoints.length) return null;
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-neutral-900">Your background</h2>
      <ul className="list-disc pl-5 space-y-4 text-lg md:text-xl leading-relaxed text-neutral-800">
        {backgroundPoints.map((item, index) => (
          <li key={index}>
            <strong>{item.bold}</strong> {item.normal}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BackgroundSection;