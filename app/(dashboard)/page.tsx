import AlertTag from "@/components/AlertTag";
import FooterComponent from "@/components/Footer";
import TableComponent from "@/components/Table";
import { ptclQuery } from "@/data/sample-data";
// import { Button, Input } from "flowbite-react";
export default function HomePage() {
  return (
    <div className="flex-col gap-12 p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Clinical Trial Demo{" "}
          </h1>
        </header>
      </section>
      <section className="mb-3 mt-9">
        <AlertTag />
      </section>

      <div className="mb-3 mt-9">
        <TableComponent data={ptclQuery} />
      </div>
      <div className="mb-3 mt-9">
        <TableComponent data={ptclQuery} />
      </div>
      <FooterComponent />
    </div>
  );
}
