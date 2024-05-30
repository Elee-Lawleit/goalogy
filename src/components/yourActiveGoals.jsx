import { useState, useRef } from "react";
import { FaFileExcel, FaFileCsv, FaRegCopy, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { saveAs } from "file-saver";
import copy from "copy-to-clipboard";
import * as XLSX from "xlsx";
import { NavLink } from "react-router-dom";

const activeGoals = [
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    category: "analysis",
    goal: "Writing",
    startDate: "03/02/2023",
    endDate: "03/02/2023",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    category: "analysis",
    goal: "Writing",
    startDate: "03/02/2023",
    endDate: "03/02/2023",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    category: "analysis",
    goal: "Writing",
    startDate: "03/02/2023",
    endDate: "03/02/2023",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    grade: "10",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    category: "analysis",
    goal: "Writing",
    startDate: "03/02/2023",
    endDate: "03/02/2023",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function YourActiveGoals() {
  const tableRef = useRef();

  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(activeGoals);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "students.xlsx");
  };

  const handleExportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(activeGoals);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "students.csv");
  };

  const handleCopyToClipboard = () => {
    const data = activeGoals
      .map((person) => `${person.name}, ${person.grade}, ${person.email}`)
      .join("\n");
    copy(data);
    alert("Data copied to clipboard!");
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold leading-6 text-primary">
            Your Active Goals
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the goals in your account including their name, grade
            and time.
          </p>
          <div className="flex flex-row gap-4 icons mt-2">
            <FaFileExcel onClick={handleExportToExcel} />
            <FaFileCsv onClick={handleExportToCSV} />
            <FaRegCopy onClick={handleCopyToClipboard} />
            <FaPrint onClick={handlePrint} />
          </div>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <NavLink
            to="add-goal"
            className="block rounded-md bg-edit-add px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Goal
          </NavLink>
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
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary"
                    >
                      Goal
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary"
                    >
                      Start
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary"
                    >
                      End
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="px-3 py-3.5 text-left text-sm font-semibold text-primary">
                        Action
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {activeGoals.map((person, index) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <img
                              className="h-11 w-11 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-primary">
                              {person.name}
                            </div>
                            <div className="mt-1 text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-primary">{person.grade}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {person.goal}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {person.category}
                      </td>{" "}
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {person.startDate}
                      </td>{" "}
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {person.endDate}
                      </td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-center text-sm font-medium sm:pr-0">
                        <button className="rounded-md bg-edit-add px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Add Data
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
