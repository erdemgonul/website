import { notFound } from "next/navigation";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";
import AppPage from "@/components/AppPage";

export async function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const app = getAppBySlug(params.slug);
  if (!app) return { title: "App Not Found" };

  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.heroDescription,
  };
}

export default function AppRoute({ params }: { params: { slug: string } }) {
  const app = getAppBySlug(params.slug);

  if (!app) {
    notFound();
  }

  return <AppPage app={app} />;
}
