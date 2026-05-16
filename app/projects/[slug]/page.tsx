export function generateStaticParams() {
  return [
    { slug: "untitled-project" },
    { slug: "project-1" },
    { slug: "project-2" },
  ];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const formatted =
    slug === "untitled-project"
      ? "Untitled"
      : slug
          .replaceAll("-", " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold">
        Project: {formatted}
      </h1>

      <p className="mt-6 text-lg text-gray-400">
        This is a dynamically generated project page.
      </p>
      <img
        src="/project.png"
        className="mt-6 rounded-xl"
        alt="project preview"
        />
    </main>
  );
}