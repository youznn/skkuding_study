"use client";
import Link from "next/link";
import DetailTable from "@/components/DetailTable";
import { useRouter, usePathname } from "next/navigation";

export default function Detail() {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.substring(8);
  console.log(slug);

  if (slug !== undefined) {
    return (
      <div className=" bg-slate-950 text-gray-200 font-light">
        <nav className="hover: cursor-pointer border-b border-solid border-b-yellow-400 text-2xl font-bold gap-4 p-6">
          <Link href={"/"}>
            <h1 className="pl-20 text-yellow-400 hover:text-yellow-400/[0.4]">
              Pokemon List
            </h1>
          </Link>
        </nav>
        <main>
          <DetailTable index={slug} />
        </main>
      </div>
    );
  } else {
    return <div>HELLO</div>;
  }
}
