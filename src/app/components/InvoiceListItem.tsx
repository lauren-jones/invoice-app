import React from "react";
import { InvoiceData } from "../page";
import { capitalizeFirstLetter } from "./utils";
import { formatDate } from "./utils";
import { formatAsCurrency } from "./utils";

interface InvoiceProps {
  invoice: InvoiceData;
}

export default function InvoiceListItem({ invoice }: InvoiceProps) {
  return (
    <div className="flex bg-white w-full rounded-lg px-7 py-5 shadow-sm text-sm items-center justify-between">
      <div className="flex">
        <p className="text-slate-400">#</p>
        <p className="font-bold">{invoice.id}</p>
      </div>
      <p className="text-slate-400 hidden md:block">
        Due {formatDate(invoice.paymentDue)}
      </p>
      <p className="text-slate-400">{invoice.clientName}</p>
      <p className="font-bold">{formatAsCurrency(invoice.total)}</p>
      <div className="bg-green-50 px-2 md:px-8 py-2 rounded-sm text-green-500 font-bold flex items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        {capitalizeFirstLetter(invoice.status)}
      </div>
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#7C5DFA"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}
