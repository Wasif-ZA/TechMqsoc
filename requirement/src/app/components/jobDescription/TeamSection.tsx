import React from 'react';
import { RandomAvatar } from 'react-random-avatars';
import Divider from '../utilities/Divider';

interface TeamMember {
  role: string;
  name: string;
}

interface TeamSectionProps {
  team: TeamMember[];
  title: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ team, title }) => {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      <div className="flex justify-center space-x-12">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
              <RandomAvatar name={member.name} size={96} />
            </div>
            <p className="mt-4 text-lg font-medium">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
       
      </div>
    </div>
  );
};

export default TeamSection;
