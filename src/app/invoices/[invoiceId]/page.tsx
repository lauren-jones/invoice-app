import SideBar from "@/app/components/SideBar";
import data from "../../components/data.json";
import React from "react";
import EditInvoiceBar from "@/app/components/EditInvoiceBar";
import DetailedInvoiceView from "@/app/components/DetailedInvoiceView";

export default function InvoiceId() {
  return (
    <main className="min-h-screen lg:h-screen pb-3 bg-gray-100 text-slate-900">
      <div className="flex flex-col lg:flex-row">
        <SideBar />
        <div className="m-auto">
          <EditInvoiceBar />
          <DetailedInvoiceView />
        </div>
      </div>
    </main>
  );
}
