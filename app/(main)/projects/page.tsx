import { getProjects } from "@/helpers/project-helpers";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects | Erdem Gönül",
  description:
    "browse my latest projects and discover my expertise in creating engaging and responsive user interfaces that leave a lasting impression.",
};

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="portfolio h-full w-full flex flex-col pb-20">
      <div className="md:max-w-screen-xl w-full h-full flex flex-col mx-auto">
        <h1 className="mb-4 text-color font-normal border-b border-gray-300 pb-4 px-3 tracking-wider text-2xl">
          Projects
        </h1>
        <Projects projects={projects} />
      </div>
    </div>
  );
}
