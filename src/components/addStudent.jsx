import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/16/solid"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { addStudentSchema } from "../schema/addStudent"

const AddStudent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(addStudentSchema),
  })

  const [photo, setPhoto] = useState()

  const handleAddStudent = (data) => {
    console.log(data)
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPhoto(URL.createObjectURL(file))
    }
  }

  return (
    <div className="mb-2">
      <div className="bg-primary text-white p-2 uppercase rounded-md text-xl text-center font-semibold h-fit mt-2 mx-2">
        <p>Add Student</p>
      </div>
      <div className="max-w-xl mx-auto">
        <form
          onSubmit={handleSubmit(handleAddStudent)}
          className="px-2 flex flex-col gap-2"
        >
          <div>
            {photo ? (
              <img
                src={photo}
                alt="User"
                className="w-64 h-64 object-cover mx-auto rounded-full border border-black mt-3"
              />
            ) : (
              <UserCircleIcon
                className="w-64 h-64 object-cover mx-auto rounded-full mt-3"
                aria-hidden="true"
                fill="gray"
              />
            )}
            <input
              type="file"
              id="photo"
              accept="image/*"
              className="hidden"
              {...register("file", {
                onChange: handlePhotoChange,
              })}
            />
            <label
              htmlFor="photo"
              className="cursor-pointer rounded-md bg-edit-add px-2.5 py-1.5 text-sm font-semibold text-white hover:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 block w-fit  ml-auto"
            >
              Change
            </label>
          </div>
          {/* Grid container for input fields */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label htmlFor="first-name" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                {...register("firstname")}
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="middle-name" className="text-sm">
                Middle Name(s)
              </label>
              <input
                type="text"
                id="middle-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                {...register("middlename")}
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="last-name" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                autoComplete="surname"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                {...register("lastname")}
              />
            </div>
            <div className="grid grid-cols-1 w-full sm:grid-cols-2 sm:col-span-3 gap-2">
              <div className="sm:col-span-1">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                  {...register("email")}
                />
              </div>
              <div className="">
                <label htmlFor="facilitator" className="text-sm">
                  Choose Facilitator
                </label>
                <input
                  type="text"
                  id="facilitator-input"
                  list="facilitator"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                  {...register("facilitator")}
                />
                <datalist id="facilitator">
                  <option value="Adam"></option>
                  <option value="Sam"></option>
                  <option value="Sara"></option>
                  <option value="Luke"></option>
                </datalist>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <div className="p-2 bg-green-500 hover:bg-green-600 transition-colors w-10 h-10 rounded-full ml-auto mr-2 cursor-pointer">
              <ChevronRightIcon className="text-white" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStudent
