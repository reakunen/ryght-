//@ts-nocheck
"use client";
import { Button, Dropdown, Pagination, Table, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

export default function TableComponent({ data }: any) {
  const [filterText, setFilterText] = useState("");
  const [filterBy, setFilterBy] = useState(""); // State to hold the selected filter option
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Number of rows to display per page

  // Update filtered data when filterText or filterBy changes
  useEffect(() => {
    const filtered = data.filter((item: any) =>
      Object.entries(item).some(
        ([key, val]) =>
          typeof val === "string" &&
          val.toLowerCase().includes(filterText.toLowerCase()) &&
          (filterBy === "" || key === filterBy), // Filter by selected option if any
      ),
    );
    setFilteredData(filtered);
  }, [filterText, filterBy, data]);

  // Calculate pagination range
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle dropdown filter change
  const handleFilterChange = (option: string) => {
    setFilterBy(option);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-[500px] flex-row gap-2">
        <TextInput className="w-64" placeholder="Query..." />{" "}
        <Button className="w-48"> Query </Button>
      </div>
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>

      <div className="mb-4 flex w-full gap-2">
        <TextInput
          id="text"
          type="text"
          className="w-64"
          placeholder="Filter by..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="w-48">
          <Dropdown
            renderTrigger={() => (
              <Button className="flex w-full flex-row items-center gap-6">
                <p className="mx-4">{filterBy === "" ? "All" : filterBy}</p>
                {/* <div className="top-4">
                  <FaChevronDown />
                </div> */}
              </Button>
            )}
            label={filterBy === "" ? "All" : filterBy}
            dismissOnClick={true}
            // onSelect={() => handleFilterChange(option)}
          >
            <Dropdown.Item
              key="all"
              value={""}
              onClick={() => handleFilterChange("")}
            >
              All
            </Dropdown.Item>
            <Dropdown.Divider />

            {Object.keys(data[0]).map((header) => (
              <Dropdown.Item
                key={header}
                value={header} // Pass the header value as the option
                onClick={() => handleFilterChange(header)}
              >
                {header}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      </div>
      <Table striped>
        <Table.Head>
          {Object.keys(data[0]).map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {currentRows.map((row, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              {Object.values(row).map((cell, cellIndex) => (
                <Table.Cell key={cellIndex}>
                  {cell === ""
                    ? "N/A"
                    : cell.length > 200
                      ? `${cell.slice(0, 200)}...`
                      : cell}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="mb-2">
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          showIcons
          totalPages={Math.ceil(filteredData.length / rowsPerPage)}
        />
      </div>
    </div>
  );
}
