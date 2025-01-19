import React from "react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

interface Role {
  title: string;
  location: string;
  type: string;
}

interface RolesTableProps {
  title: string;
  roles: Role[];
}

const RolesTable: React.FC<RolesTableProps> = ({ title, roles }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 bg-neutral-50">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-black mb-6">{title}</h2>
      <hr className="mb-6 border-black border-t-4" />

      {/* Roles List */}
      <div className="space-y-6">
        {roles.map((role, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-8 items-center py-4 border-b border-black"
          >
            {/* Title as Link */}
            <Link
              href={`/roles/${role.title}`}
              className="relative text-black font-bold text-lg hover:text-indigo-500 flex items-center space-x-3 group"
            >
              <span>{role.title}</span>
              <HiOutlineArrowRight
                className="
                  text-indigo-500
                  w-6
                  h-6
                  opacity-0
                  -translate-x-2
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:translate-x-0
                "
              />
            </Link>
            {/* Location */}
            <span className="text-black text-lg font-medium">{role.location}</span>
            {/* Type */}
            <span className="text-black text-lg font-medium">{role.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RolesTable;
