import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <main className="flex pb-8 w-full relative">
      <div className="flex flex-col lg:flex-row w-[93%] mx-auto mt-12 gap-8 ">
        <Sidebar />
        <section className="w-full lg:w-[75%] text-white px-8 py-8 bg-color-dark rounded-md border border-color-gray">
          {children}
        </section>
      </div>
    </main>
  );
}
