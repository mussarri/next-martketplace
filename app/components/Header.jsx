"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[70px] mt-">
      <div className="header-rounded header-bg max-width h-full px-2 pr-1 flex items-center justify-between gap-10">
        <Link
          href="/"
          className="flex gap-3 items-end font-black text-xl text-green pb-3"
        >
          <img src="/Home_duotone.png" alt="" className="w-[37px]" />
          LOGO
        </Link>
        <div className="flex items-center gap-5 flex-1">
          <a
            href=""
            className="gap-2 font-bold flex text-lg items-center text-gray"
          >
            <img src="/Vector.png" alt="" className="w-[21px]" />
            Kategoriler
          </a>
          <input
            type="text"
            className="h-[45px] p-5 flex-1 border border-green bg-white input-rounded text-xs"
            placeholder="Aradiginiz urun veya markayi yaziniz"
          />{" "}
          <div className="flex items-center gap-1">
            <div className="mr-3">
              <img src="/Heart.png" alt="" className="w-[24px]" />
            </div>
            <div className="mr-3">
              <img src="/Alert.png" alt="" className="w-[24px]" />
            </div>
            <button className="flex login-btn-bg h-[37px] text-white items-center font-bold p-2 pr-4 input-rounded text-xs gap-1">
              <img src="/Frame.png" alt="" className="w-[22px] h-[22px]" />
              Ilan Giris
            </button>
            <button className="flex login-btn-bg2 h-[37px] text-white items-center font-bold p-2 pr-4 input-rounded text-xs gap-1">
              <img src="/Frame.png" alt="" className="w-[22px] h-[22px]" />
              Uye Giris
            </button>
            <div
              className="flex    items-center font-bold p-2 input-rounded text-xs gap-1"
              style={{ color: "rgba(10, 9, 9, 1)" }}
            >
              <img src="/Ellipse 2.png" alt="" className="w-[22px] h-[22px]" />
              TR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
