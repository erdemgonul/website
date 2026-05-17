import { notFound } from "next/navigation";
import policies from "@/data/privacy-policies.json";
import PrivacyPolicyPage from "@/components/PrivacyPolicyPage";
import { PrivacyPolicy } from "@/types/privacy-policy";

export async function generateStaticParams() {
  return policies.map((policy) => ({
    appId: policy.appId,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ appId: string }> }) {
  const { appId } = await params;
  const policy = policies.find((p) => p.appId === appId);
  if (!policy) return { title: "Privacy Policy Not Found" };

  return {
    title: `${policy.appName} - Privacy Policy`,
    description: `Privacy policy for ${policy.appName} by ${policy.author}`,
  };
}

export default async function PrivacyPolicyRoute({ params }: { params: Promise<{ appId: string }> }) {
  const { appId } = await params;
  const policy = policies.find((p) => p.appId === appId) as PrivacyPolicy | undefined;

  if (!policy) {
    notFound();
  }

  return <PrivacyPolicyPage policy={policy} />;
}
