import { PencilIcon } from "@heroicons/react/16/solid";
import React, { useRef, useState } from "react";

const GoalsDetails = () => {
  const startDateRef = useRef(null);
  const subjects = ["Mathematics", "Science", "History"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const items = [1, 3, 5, 7, 9];
  const colors = ["#D9D9D9", "#86B341", "#EB9423", "#66CFD2", "#B37DB5"];

  return (
    <div>
      {/* header with student's picture */}
      <div className="w-full flex bg-teal-200 items-center gap-2 py-3 px-2">
        <img
          src="/student.png"
          alt=""
          className="rounded-full object-cover w-20 h-20 border border-black"
        />
        <p className="mr-auto bg-white px-2 py-1 font-semibold rounded-md">
          Malik Nabeel
        </p>
      </div>
      <div className="sm:grid grid-cols-3 gap-2">
        {/* student  */}
        <div className="bg-gray-200 grid gap-3 px-1 py-2 rounded-md sm:col-span-2">
          <div className="bg-primary text-white p-2 uppercase rounded-sm text-xl text-center font-semibold h-fit">
            <p>Student</p>
          </div>
          <div className="px-2 m-auto">
            <p className="text-sm m-auto sm:text-base">
              I can read complex texts closely and analyze them with depth and
              nuance. They can make logical and insightful inferences based on
              textual evidence and can cite specific examples to support their
              conclusions in a clear and compelling way.
            </p>
          </div>

          <div className="flex justify-between px-2 items-center">
            <div>
              <p className="text-xs text-center px-1 py-1 bg-primary text-white rounded-md">
                Reading
              </p>
            </div>
            <div className="xs:flex gap-4">
              <p>Start: 03/4/24</p>
              <p>Target: 03/4/25</p>
            </div>
          </div>
          <div className="p-2 bg-blue-700 w-8 h-8 rounded-full ml-auto mr-2">
            <PencilIcon className="text-white" />
          </div>
        </div>
        <div className="bg-gray-200 grid gap-3 px-1 py-2 rounded-md sm:col-span-2">
          <div className="bg-primary text-white p-2 uppercase rounded-sm text-xl text-center font-semibold">
            <p>Scale</p>
          </div>
          <div className="w-full flex flex-col gap-[1px]">
            <div className="w-full bg-cyan-100">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">9</div>
            </div>
            <div className="w-full ">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">8</div>
            </div>
            <div className="w-full  bg-cyan-100">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">7</div>
            </div>
            <div className="w-full  ">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">6</div>
            </div>
            <div className="w-full  bg-cyan-100">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">5</div>
            </div>
            <div className="w-full  ">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">4</div>
            </div>
            <div className="w-full  bg-cyan-100">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">3</div>
            </div>
            <div className="w-full  ">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">2</div>
            </div>
            <div className="w-full  bg-cyan-100">
              <div className="w-8 bg-purple-500 px-2 rounded-e-xl">1</div>
            </div>
          </div>
          <div className="p-2 bg-blue-700 w-8 h-8 rounded-full ml-auto mr-2">
            <PencilIcon className="text-white" />
          </div>
        </div>
        <div className="bg-gray-200 grid gap-3 px-1 py-2 rounded-md sm:col-span-2">
          <div className="bg-primary text-white p-2 uppercase rounded-sm text-xl text-center font-semibold h-fit">
            <p>Strategies</p>
          </div>
        </div>
        <div className="bg-gray-200 gap-3 px-1 py-2 rounded-md sm:col-start-3 sm:row-start-1 sm:row-span-3">
          <div className="bg-primary text-white p-2 uppercase rounded-sm text-xl text-center font-semibold h-fit">
            <p>Progress Map</p>
          </div>
          <div className="align-top">
            <table className="w-full flex flex-col gap-2 h-fit px-2 py-2">
              <thead className="flex justify-between w-full border-b border-gray-400 pb-1 items-end">
                <tr className="flex gap-2 ml-auto">
                  <th></th>
                  <th className="px-2 text-white font-medium bg-primary rounded-full w-8 h-8 text-center  leading-8 flex justify-center">
                    LA
                  </th>
                  <th className="px-2 text-white font-medium bg-primary rounded-full w-8 h-8 text-center  leading-8 flex justify-center">
                    SS
                  </th>
                  <th className="px-2 text-white font-medium bg-primary rounded-full w-8 h-8 text-center  leading-8 flex justify-center">
                    M
                  </th>
                  <th className="px-2 text-white font-medium bg-primary rounded-full w-8 h-8 text-center  leading-8 flex justify-center">
                    A
                  </th>
                </tr>
              </thead>
              <tbody className="text-center w-full">
                <tr className="flex justify-between w-full border-b border-gray-400 py-1 items-end gap-2">
                  <td>12/4/24</td>
                  <td className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center  leading-8 flex justify-center ml-auto">
                    9
                  </td>
                  <td className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center  leading-8 flex justify-center">
                    9
                  </td>
                  <td
                    className="px-2 bg-purple-400 rounded-full w-8 h-8
                      text-center leading-8 flex justify-center"
                  >
                    9
                  </td>
                  <td className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center  leading-8 flex justify-center">
                    9
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="bg-primary text-white p-2 uppercase rounded-md text-xl text-center font-semibold h-fit">
            <p>Add New Data</p>
          </div>
          <form className="mt-4">
            <label htmlFor="start-date" className="text-sm">
              Start Date
            </label>
            <input
              ref={startDateRef}
              type="date"
              id="start-dates"
              autoComplete="given-name"
              className="block w-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
            />
            <div className="flex flex-col-reverse mt-4">
              {items.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <div
                    className="number bg-primary w-8 font-bold rounded-e-xl text-center"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    {item}
                  </div>
                  <input
                    type="text"
                    className="textofscale"
                    placeholder="Text of scale..."
                  />
                </div>
              ))}
            </div>
            <div className="max-w-md mt-4">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className="flex items-center gap-4 subject mb-4"
                >
                  <div>
                    <label className="mt-1 text-xs px-1 py-1 bg-primary text-white rounded-md">
                      {subject}
                    </label>
                  </div>
                  <div className="radio-group flex w-full justify-end space-x-1 ">
                    {numbers.map((number) => (
                      <label key={number} className="flex items-center">
                        <input
                          type="radio"
                          name={subject}
                          value={number}
                          className="hidden"
                        />
                        <span className="w-8 h-8 inline-block border-2 border-gray-600 rounded-full cursor-pointer flex items-center justify-center text-gray-600">
                          {number}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:col-span-2 mt-4">
              <div>
                <label htmlFor="goal" className="text-sm">
                  Progess Note
                </label>
                <textarea
                  id="progress-note"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoalsDetails;
