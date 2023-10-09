import React from "react";

export default function TitleBar() {
  return (
    <div className="flex w-[730px] m-auto justify-between py-10 items-center">
      <div>
        <h1 className="text-4xl font-bold">Invoices</h1>
        <h3 className="text-slate-400 text-sm">There are 7 total invoices</h3>
      </div>
      <div className="flex items-center">
        <p className="font-bold mr-3">Filter by status</p>
        <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1l4.228 4.228L9.456 1"
            stroke="#7C5DFA"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <button className="bg-violet-500 text-white flex items-center rounded-full pr-4">
        <div className="bg-white p-3 rounded-full m-2 ">
          <svg
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-violet-500"
          >
            <path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" />
          </svg>
        </div>
        New Invoice
      </button>
    </div>
  );
}
