import React from "react";
import EditDeleteButtons from "./EditDeleteButtons";

export default function EditInvoiceBar() {
  return (
    <div className="flex px-6 md:px-0 w-screen md:w-[730px] m-auto justify-between py-10 items-center">
      <div className="flex bg-white w-full rounded-lg px-7 py-5 shadow-sm text-sm items-center justify-between">
        <div className="flex justify-between w-full sm:w-fit justify-content items-center">
          <p className="text-slate-400">Status</p>
          <div className="bg-green-50 px-2 md:px-8 py-2 rounded-sm text-green-500 font-bold flex items-center ml-5">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Pending
          </div>
        </div>
        <div className="hidden sm:block">
          <EditDeleteButtons />
        </div>
      </div>
    </div>
  );
}
