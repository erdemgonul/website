import { getProjects } from "@/helpers/post-helpers";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects | Erdem Gönül",
  description:
    "browse my latest projects and discover my expertise in creating engaging and responsive user interfaces that leave a lasting impression.",
};

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="portfolio h-full w-full flex flex-col pt-[100px] md:pt-[150px] pb-20">
      <div className="md:max-w-screen-xl w-full h-full flex flex-col mx-auto">
        <h1 className="mb-12 md:mb-20 text-color font-light border-b border-gray-300 pb-4 px-3 text-2xl md:text-4xl">
          Projects
        </h1>
        <Projects projects={projects} />
      </div>
    </div>
  );
}
