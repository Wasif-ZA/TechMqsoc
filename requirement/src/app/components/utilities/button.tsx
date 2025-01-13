import React from 'react';

interface NeuButtonProps {
  text: string;
  className?: string;
}

const NeuButton: React.FC<NeuButtonProps> = ({ text, className }) => {
  return (
   <>
   
      <button
        className={`px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ${className}`}
      >
        {text}
      </button>
      </>
  );
};

export default NeuButton;