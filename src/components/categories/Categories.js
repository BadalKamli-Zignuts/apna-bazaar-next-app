import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Categories() {
  return (
    <Layout>
      <div className="">
        <h1 className="text-center mb-5">Explore Our Categories</h1>
        <div className="">
          {/* {categories.map((c) => (
            <div className="" key={c._id}>
              <Link href={`/category/${c.slug}`}>
                <a className="">{c.name}</a>
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </Layout>
  );
}
