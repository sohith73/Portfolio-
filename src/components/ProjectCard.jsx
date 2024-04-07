import React from "react";

const ProjectCard = ({ src, title, description }) => {
     return (
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#4111a2] transition duration-300 ease-in border border-opacity-0 hover:border-opacity-100">
               <img
                    src={src}
                    alt={title}
                    className="w-full h-auto object-contain opacity-80"
               />

               <div className="relative p-4">
                    <h1 className="text-2xl font-semibold text-white">{title}</h1>
                    <p className="mt-2 text-gray-300">{description}</p>
               </div>
          </div>
     );
};

export default ProjectCard;
