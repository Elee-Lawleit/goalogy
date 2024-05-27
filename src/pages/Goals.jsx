import { PencilIcon } from "@heroicons/react/16/solid"
import React from "react"

const Goals = () => {
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
      </div>
    </div>
  )
}

export default Goals
