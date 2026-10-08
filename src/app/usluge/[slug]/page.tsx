import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getService, serviceHref, services } from "@/lib/services";
import { BASE_OPEN_GRAPH, OG_IMAGE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};

  const path = serviceHref(service.slug);
  const title = `${service.metaTitle} | SMG Transport`;
  const image = { url: service.image.src, width: service.image.width, height: service.image.height, alt: service.imageAlt };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      ...BASE_OPEN_GRAPH,
      url: path,
      title,
      description: service.metaDescription,
      images: [image, OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.metaDescription,
      images: [image],
    },
  };
}

export default async function ServiceRoute({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <main>
      <ServicePage service={service} />
    </main>
  );
}
