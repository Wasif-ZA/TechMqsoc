
import React from 'react';

interface ClosingStatementProps {
  statement?: string;
}

const ClosingStatement: React.FC<ClosingStatementProps> = ({ statement }) => {
  if (!statement) return null;
  return (
    <p className="mt-8 text-base md:text-lg leading-relaxed">
      {statement}
    </p>
  );
};

export default ClosingStatement;