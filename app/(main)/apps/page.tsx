import Link from "next/link";
import { apps } from "@/data/apps";

export const metadata = {
  title: "Apps",
  description:
    "        Explore the apps I&apos;ve built. From learning and entertainment to productivity and lifestyle — each app is designed to make your life a little better.",
};

export default function AppsPage() {
  return (
    <div className="md:max-w-screen-md w-full h-full flex flex-col px-4 md:px-0 md:mx-auto pt-12 md:pt-24 pb-24">
      <h1 className="mb-4 text-[#bfbfbf] font-medium border-b-2 border-gray-300 pb-2 text-2xl">
        Apps
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        Apps I&apos;ve designed and built — each solving a real problem I noticed in everyday life.
      </p>

      <div className="grid gap-6">
        {apps.map((app) => (
          <Link
            key={app.slug}
            href={`/apps/${app.slug}`}
            className="group block border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-2xl font-bold text-white shrink-0`}
              >
                {app.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-semibold text-white group-hover:text-red transition-colors">
                    {app.name}
                  </h2>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                    {app.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{app.tagline}</p>
                <p className="text-gray-500 text-sm line-clamp-2">{app.heroDescription}</p>
              </div>
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-red transition-colors shrink-0 mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
