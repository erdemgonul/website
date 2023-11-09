import { getProjects } from "@/helpers/project-helpers";
import Projects from "@/components/project-components/Projects";

export const metadata = {
  title: "Projects",
  description:
    "browse my latest projects and discover my expertise in creating engaging and responsive user interfaces that leave a lasting impression.",
};

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="md:max-w-screen-md w-full h-full flex flex-col  px-4 md:px-0 md:mx-auto  pt-12 md:pt-24 pb-24">
      <h1 className="mb-4 text-[#bfbfbf] font-medium border-b-2 border-gray-300 pb-2 text-2xl">
        Projects
      </h1>
      <Projects projects={projects} />
    </div>
  );
}
