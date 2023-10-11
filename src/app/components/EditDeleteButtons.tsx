import React from "react";

export default function EditDeleteButtons() {
  return (
    <>
      <button className="bg-slate-100 text-slate-400 font-bold p-4 rounded-full mr-2">
        Edit
      </button>
      <button className="bg-red-400 text-white font-bold p-4 rounded-full mr-2">
        Delete
      </button>
      <button className="bg-violet-500 text-white font-bold p-4 rounded-full mr-2">
        Mark as Paid
      </button>
    </>
  );
}
