
import React from 'react';
import Divider from '../utilities/Divider';

interface TitleDescriptionProps {
  title: string;
  description: string;
  additionalInfo: string;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  description,
  additionalInfo,
}) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-neutral-900">{title}</h1>
      <p className="text-lg md:text-xl mb-6 leading-relaxed">{description}</p>
      <p className="text-lg md:text-xl leading-relaxed">{additionalInfo}</p>
      <Divider />
    </>
  );
};

export default TitleDescription;