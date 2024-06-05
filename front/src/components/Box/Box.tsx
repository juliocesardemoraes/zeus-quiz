import Link from "next/link";
import React from "react";

export default function Box({ item }: { item: { title: string } }) {
  return (
    <Link href={`/class/${item.title}`}>
      <div className="select__box flex items-center justify-center">
        <h4>{item.title}</h4>
      </div>
    </Link>
  );
}
