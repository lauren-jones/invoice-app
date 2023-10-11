import InvoiceList from "./components/InvoiceList";
import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";
import data from "./components/data.json";

export type InvoiceData = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};

export type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export default function Home() {
  return (
    <main className="min-h-screen lg:h-screen pb-3 bg-gray-100 text-slate-900">
      <div className="flex flex-col lg:flex-row">
        <SideBar />
        <div className="m-auto">
          <TitleBar />
          <InvoiceList invoices={data.invoices} />
        </div>
      </div>
    </main>
  );
}
