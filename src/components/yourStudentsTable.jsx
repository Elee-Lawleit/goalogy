import { useState, useRef } from "react";
import Select from "react-select";
import { FaFileExcel, FaFileCsv, FaRegCopy, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { saveAs } from "file-saver";
import copy from "copy-to-clipboard";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const people = [
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function YourStudentsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const tableRef = useRef();
  const pageSize = 5;
  const totalPages = Math.ceil(people.length / pageSize);
  const visiblePeople = people.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalRows = visiblePeople.length;
  const emptyRows = Math.max(pageSize - totalRows, 0);
  console.log(emptyRows);

  const rowsToRender = visiblePeople.slice(0, pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(people);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "students.xlsx");
    toast.success("Excel File Downloaded!", {
      position: "top-center",
    });
  };

  const handleExportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(people);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "students.csv");
    toast.success("CSV File Downloaded!", {
      position: "top-center",
    });
  };

  const handleCopyToClipboard = () => {
    const data = people
      .map((person) => `${person.name}, ${person.grade}, ${person.email}`)
      .join("\n");
    copy(data);
    toast.success("Data copied to clipboard!", {
      position: "top-center",
    });
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });
  const options = [
    { value: "excel", label: "Excel", icon: <FaFileExcel /> },
    { value: "csv", label: "CSV", icon: <FaFileCsv /> },
    { value: "copy", label: "Copy", icon: <FaRegCopy /> },
    { value: "print", label: "Print", icon: <FaPrint /> },
  ];
  const handleOptionChange = (selectedOption) => {
    switch (selectedOption.value) {
      case "excel":
        handleExportToExcel();
        break;
      case "csv":
        handleExportToCSV();

        break;
      case "print":
        handlePrint();
        break;
      case "copy":
        handleCopyToClipboard();
        break;

      default:
        return;
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold leading-6 text-primary">
            Your Students
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the students in your account including their name,
            grade, email.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <NavLink
            to="add-student"
            className="block rounded-md bg-edit-add px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Student
          </NavLink>
          <div className="mt-2">
            <Select
              label={"Export"}
              options={options}
              onChange={handleOptionChange}
              placeholder="Export"
              getOptionLabel={(option) => (
                <div>
                  {option.icon}
                  <span>{option.label}</span>
                </div>
              )}
              getOptionValue={(option) => option.value}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div ref={tableRef}>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {rowsToRender.map((person) => (
                    <tr key={person.email} className="even:bg-gray-50">
                      <td className="whitespace-nowrap flex items-center gap-2 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        <div className="h-11 w-11 flex-shrink-0">
                          <img
                            className="h-11 w-11 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>

                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.grade}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"></td>
                    </tr>
                  ))}
                  {new Array(emptyRows).fill(0).map((_, index) => (
                    <tr
                      key={`empty-row-${index}`}
                      className="even:bg-gray-50 h-[76px]"
                    >
                      <td
                        colSpan="5"
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-700">
              Showing {pageSize * (currentPage - 1) + 1}-
              {Math.min(pageSize * currentPage, people.length)} of{" "}
              {people.length} students
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Previous
              </button>
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                    page + 1 === currentPage
                      ? "text-primary bg-primary-light"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalRows}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
