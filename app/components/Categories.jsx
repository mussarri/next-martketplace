"use client";
import React from "react";

const Categories = () => {
  return (
    <div
      className="max-width h-[58px] categories-bg header-rounded px-5 flex items-center gap-8 "
      style={{ margin: "3px auto 3px" }}
    >
      <a href="" className="text-lg text-gray font-medium">
        Endüstriyel Otomasyon
      </a>
      <a href="" className="text-lg text-gray font-medium">
        Elektrik-Montaj
      </a>
      <a href="" className="text-lg text-gray font-medium">
        Mekanik-Tesisat
      </a>
      <a href="" className="text-lg text-gray font-medium">
        Hidrolik-Pnömatik
      </a>
    </div>
  );
};

export default Categories;
