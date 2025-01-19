"use client";

import React from "react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
  className?: string;
}

/**
 * BenefitsSection component renders a section displaying a list of benefits.
 *
 * @param {BenefitsSectionProps} props - The properties for the BenefitsSection component.
 * @param {Array<{ title: string, description: string }>} props.benefits - An array of benefit objects, each containing a title and description.
 * @param {string} [props.className] - Optional additional class names to apply to the container div.
 *
 * @returns {JSX.Element} The rendered BenefitsSection component.
 */
const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits, className = "" }) => {
  return (
    <div className={`min-h-screen bg-gray-50 py-16 px-8 font-roboto ${className}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
