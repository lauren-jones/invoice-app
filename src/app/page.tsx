import InvoiceList from "./components/InvoiceList";
import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";

export default function Home() {
  return (
    <main className="h-screen bg-gray-100 text-slate-900">
      <div className="flex flex-col lg:flex-row">
        <SideBar />
        <div className="m-auto">
          <TitleBar />
          <InvoiceList />
        </div>
      </div>
    </main>
  );
}
