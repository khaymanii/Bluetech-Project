import Header from "@/components/Header";
import Table from "@/components/Table";
import TableData from "@/Tabledata/Tabledata";

export default function Home() {
  const { headers, data } = TableData();

  return (
    <div>
      <Header />
      <Table headers={headers} data={[]} />
    </div>
  );
}
