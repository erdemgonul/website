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
    <div className="max-w-screen-md w-full h-full flex flex-col mx-auto pt-24 pb-24">
      <h1 className="mb-4 text-white font-normal border-b border-gray-300 pb-4 px-3 tracking-wider text-2xl">
        Projects
      </h1>
      <Projects projects={projects} />
    </div>
  );
}
