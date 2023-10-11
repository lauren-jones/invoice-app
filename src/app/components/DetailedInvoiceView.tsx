import React from "react";

export default function DetailedInvoiceView() {
  return (
    <div className="px-6 md:px-0 md:w-[730px] flex flex-col items-center m-auto">
      <div className="flex flex-col bg-white w-full rounded-lg px-9 py-5 shadow-sm text-sm items-center justify-between">
        <div className="flex w-full justify-between mt-6">
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-slate-400 font-bold">#</p>
              <p className="font-bold">XM9141</p>
            </div>
            <p className="text-slate-400">Graphic Design</p>
          </div>
          <div className="text-slate-400 text-right">
            <p>19 Union Terrace</p>
            <p>London</p>
            <p>E1 3EZ</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between mt-6">
          <div className="flex sm:flex-col justify-between sm:justify-start">
            <div>
              <p className="text-slate-400 mb-2">Invoice Date</p>
              <p className="font-bold mb-4">21 Aug 2021</p>
            </div>
            <div className="text-right sm:text-left">
              <p className="text-slate-400 mb-2">Payment Due</p>
              <p className="font-bold">20 Sep 2021</p>
            </div>
          </div>
          <div className="flex sm:flex-col w-full sm:w-fit">
            <p className="text-slate-400 mb-2">Bill To</p>
            <div className="ml-3 sm:ml-0">
              <p className="font-bold mb-1">Alex Grim</p>
              <p className="text-slate-400">84 Church Way</p>
              <p className="text-slate-400">Bradford</p>
              <p className="text-slate-400">BD1 9PB</p>
              <p className="text-slate-400">United Kingdom</p>
            </div>
          </div>
          <div className="flex sm:flex-col mt-3 sm:mt-0 justify-end sm:justify-start">
            <p className="text-slate-400 mb-2">Sent to</p>
            <p className="font-bold ml-2 sm:ml-0">alexgrim@mail.com</p>
          </div>
        </div>
        <div className="bg-slate-100 w-full rounded-t-xl mt-8 p-8">
          <div className="w-full justify-between items-center flex mb-2">
            <div className="flex flex-col sm:flex-row items-center">
              <p className="text-slate-400 font-bold text-xl">Banner design</p>
              <p className="ml-5">1 x £200.00</p>
            </div>
            <p className="font-bold text-lg">£200.00</p>
          </div>
          <div className="w-full justify-between items-center flex">
            <div className="flex flex-col sm:flex-row items-center">
              <p className="text-slate-400 font-bold text-xl">Email design</p>
              <p className="ml-5">2 x £150.00</p>
            </div>
            <p className="font-bold text-lg">£300.00</p>
          </div>
        </div>
        <div className="flex w-full justify-between p-8 bg-slate-700 rounded-b-xl">
          <p className="text-slate-400">Amount Due</p>
          <p className="text-2xl font-bold text-white">£556.00</p>
        </div>
      </div>
    </div>
  );
}
