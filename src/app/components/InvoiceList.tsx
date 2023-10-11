import React from "react";
import Invoice from "./InvoiceListItem";
import { InvoiceData } from "../page";

interface InvoiceListProps {
  invoices: InvoiceData[];
}

export default function InvoiceList({ invoices }: InvoiceListProps) {
  return (
    <div className="px-6 md:px-0 md:w-[730px] flex flex-col items-center m-auto gap-4">
      {invoices.map((invoice, index) => (
        <Invoice invoice={invoice} key={index} />
      ))}
    </div>
  );
}
