"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans p-16">
      <h1 className="text-3xl font-bold mb-12">My Portfolio</h1>

      <div className="flex flex-col gap-8">

        {/* NAVBAR */}
        <div className="flex justify-end items-center mb-12">
          <div className="flex gap-10 text-lg font-medium">
            
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-white"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              Home
            </Link>

            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "text-white"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              About
            </Link>

          </div>
        </div>

        <Link href="/projects/untitled-project">
        {/* Card 1 */}
        <div className="cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-950 p-12 min-h-[400px] transition-all duration-300 hover:-translate-y-2 hover:border-neutral-500 hover:bg-neutral-900 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold">Untitled Project</h3>
          <p className="mt-4 text-lg text-gray-400">
            A summary of my growth and experiences
          </p>
        </div>
        </Link>

        <Link href="/projects/untitled-project">
        {/* Card 2 */}
        <div className="cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-950 p-12 min-h-[400px] transition-all duration-300 hover:-translate-y-2 hover:border-neutral-500 hover:bg-neutral-900 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold">Untitled Project</h3>
          <p className="mt-4 text-lg text-gray-400">
            A summary of my growth and experiences
          </p>
        </div>
        </Link>

        <Link href="/projects/untitled-project">
        {/* Card 3 */}
        <div className="cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-950 p-12 min-h-[400px] transition-all duration-300 hover:-translate-y-2 hover:border-neutral-500 hover:bg-neutral-900 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold">Untitled Project</h3>
          <p className="mt-4 text-lg text-gray-400">
            A summary of my growth and experiences
          </p>
        </div>
        </Link>

      </div>
    </main>
  );
}