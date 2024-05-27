import {
  PencilIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
  EyeIcon,
} from "@heroicons/react/16/solid"
import React from "react"

const StudentDetails = () => {
  return (
    <div className="px-1 py-1 grid bg-white gap-1 sm:grid-cols-2 lg:grid-cols-3">
      {/* student image container */}
      <div className="bg-gray-200 px-1 py-2 rounded-md">
        <div className="bg-gradient-to-r from-[#86B341] to-[#86B341] text-white p-2 uppercase rounded-sm text-xl text-center font-semibold">
          <p>Student</p>
        </div>
        <div>
          <p className="text-center mt-2 text-xl">Malik Nabeel</p>
          <div className="relative">
            <img
              src="/student.png"
              alt=""
              className="rounded-full object-cover w-60 h-60 m-auto mt-2 border border-black"
            />
            <div className="p-2 bg-blue-700 w-fit rounded-full ml-auto absolute right-4 -bottom-2">
              <PencilIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* goal container */}
      <div className="bg-gray-200 grid gap-3 py-2 ">
        <div className="bg-gradient-to-r from-[#86B341] to-[#86B341] text-white p-2 uppercase rounded-sm text-xl text-center font-semibold h-fit">
          <p>Goal</p>
        </div>
        <div className="px-2 m-auto">
          <p className="text-sm max-w-96 m-auto sm:text-base">
            I can read complex texts closely and analyze them with depth and
            nuance. They can make logical and insightful inferences based on
            textual evidence and can cite specific examples to support their
            conclusions in a clear and compelling way.
          </p>
        </div>
        <div className="flex justify-end gap-2 items-end px-2">
          <CheckCircleIcon className="w-8 h-8" fill="green" />
          <div className="p-2 bg-blue-400 w-8 h-8 rounded-full">
            <ArrowDownTrayIcon />
          </div>
          <div className="p-2 bg-blue-700 w-8 h-8 rounded-full">
            <PencilIcon className="text-white" />
          </div>
          <div className="p-2 bg-blue-700 w-8 h-8 rounded-full">
            <EyeIcon className="text-white" />
          </div>
        </div>
      </div>

      {/* progress container */}
      <div className="bg-gray-200 py-2 grid gap-3 ">
        <div className="bg-gradient-to-r from-[#86B341] to-[#86B341] text-white p-2 uppercase rounded-sm text-xl text-center font-semibold h-fit">
          <p>Recent Progress</p>
        </div>
        <div className="px-2">
          <div className="flex justify-between align-top border-b border-[#bfb8b8] pb-1">
            <span>12/4/24</span>
            <div className="flex gap-3">
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
            </div>
          </div>
          <div className="flex justify-between align-top border-b border-[#bfb8b8] py-1">
            <span>12/4/24</span>
            <div className="flex gap-3">
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
            </div>
          </div>
          <div className="flex justify-between align-top border-b border-[#bfb8b8] py-1">
            <span>12/4/24</span>
            <div className="flex gap-3">
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
            </div>
          </div>
          <div className="flex justify-between align-top border-b border-[#bfb8b8] py-1">
            <span>12/4/24</span>
            <div className="flex gap-3">
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
            </div>
          </div>
          <div className="flex justify-between align-top border-b border-[#bfb8b8] py-1">
            <span>12/4/24</span>
            <div className="flex gap-3">
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
            </div>
          </div>
          <div className="flex justify-between align-top border-b border-[#bfb8b8] py-1">
            <span>12/4/24</span>
            <div className="flex gap-3">
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
              <p className="px-2 bg-purple-400 rounded-full w-8 h-8 text-center inline-block  leading-8">
                9
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* team container */}
      <div className="bg-gray-200 px-1 py-2 rounded-md">
        <div className="bg-gradient-to-r from-[#86B341] to-[#86B341] text-white p-2 uppercase rounded-sm text-xl text-center font-semibold">
          <p>Team</p>
        </div>
        <div className="mt-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 justify-center">
              <img
                src="/student.png"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">Mr. Stanley</p>
                <p className="text-xs text-center px-1 py-1 bg-primary text-white rounded-md">
                  Facilitator
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <img
                src="/student.png"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">Mrs. Raven</p>
                <p className="text-xs text-center px-1 py-1 bg-primary text-white rounded-md">
                  Teacher
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <img
                src="/student.png"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">Mrs. Jacobs</p>
                <p className="text-xs text-center px-1 py-1 bg-primary text-white rounded-md">
                  Support
                </p>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* team conversation container */}
      <div className="bg-gray-200 px-1 py-2 rounded-md">
        <div className="bg-gradient-to-r from-[#86B341] to-[#86B341] text-white p-2 uppercase rounded-sm text-xl text-center font-semibold">
          <p>Team Conversation</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default StudentDetails
