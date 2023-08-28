import React from "react";

import { projectType } from "@/data/projects";
import { HiArrowUpRight } from "react-icons/hi2";

const Project = ({ name, madeAt, stack, link, year }: projectType) => {
	return (
		<div className="w-full h-auto  py-4 border-b-[1px] border-slate-300/10 flex justify-between md:gap-4 lg:gap-0 items-start">
			<p className="w-1/5 md:w-[10%] opacity-60 text-sm">{year}</p>
			<div className="w-4/5 md:w-[50%] lg:w-[30%] text-white2 font-bold text-md">
				{/* For mobile */}
				<div className="block md:hidden">
					{!link?.name && <p className="w-[90%]">{name}</p>}
					{link?.name && (
						<a href={link?.href} className="group hover:cursor-pointer hover:text-sec block md:hidden">
							{name}
							<HiArrowUpRight className="inline ml-[4px] text-[12px] relative top-0 left-0 group-hover:-top-2 group-hover:left-2 transition-all duration-250" />
						</a>
					)}
				</div>
				{/* For tablet and desktop */}
				<p className="hidden md:block w-[95%]">{name}</p>
			</div>
			<p className="lg:w-[10%] hidden lg:block  opacity-60 text-sm">{madeAt ? madeAt : ""}</p>
			<div className="hidden lg:block w-[30%] text-sm">
				{stack && (
					<>
						{stack?.map((item, index) => (
							<p
								key={index}
								className="bg-slate-50 bg-opacity-5 text-[#2DD4BF] rounded-full px-3 font-bold hover:bg-opacity-20 hover:cursor-pointer text-[12px] p-[4px] inline-block mb-2 mr-[6px]">
								{item}
							</p>
						))}
					</>
				)}
			</div>
			<div className="hidden md:block md:w-[40%] w-[20%] lg:w-[20%] ">
				<a href={link?.href} className="group hover:cursor-pointer hover:text-sec  opacity-90 text-sm">
					{link?.name ? link.name : ""}
					{link?.name && <HiArrowUpRight className="inline ml-[4px] text-[12px] relative top-0 left-0 group-hover:-top-2 group-hover:left-2 transition-all duration-250" />}
				</a>
			</div>
		</div>
	);
};

export default Project;
