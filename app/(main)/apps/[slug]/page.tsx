import { notFound } from "next/navigation";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";
import AppPage from "@/components/AppPage";

export async function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "App Not Found" };

  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.heroDescription,
  };
}

export default async function AppRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return <AppPage app={app} />;
}
