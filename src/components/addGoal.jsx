import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Switch } from "@headlessui/react";
import { addGoalSchema } from "../schema/addGoal";
import { format, addYears } from "date-fns";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddGoal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(addGoalSchema),
  });

  const [enabled, setEnabled] = useState(false);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const today = format(new Date(), "yyyy-MM-dd");
  const oneYearFromToday = format(addYears(new Date(), 1), "yyyy-MM-dd");

  const handleAddGoal = (data) => {
    console.log(data);
  };
  useEffect(() => {
    setValue("startDate", today);
    setValue("endDate", oneYearFromToday);
    setValue("isIEPGoal", false);
  }, [setValue, today, oneYearFromToday]);

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    const newEndDate = format(
      addYears(new Date(newStartDate), 1),
      "yyyy-MM-dd"
    );
    setValue("endDate", newEndDate);
  };

  const handleSwitchChange = (checked) => {
    setEnabled(checked);
    setValue("isIEPGoal", checked);
  };

  console.log(errors);

  return (
    <div className="mb-2 ">
      <div className="bg-primary text-white p-2 uppercase rounded-md text-xl text-center font-semibold h-fit mt-2 mx-2">
        <p>Add Goal</p>
      </div>
      <div className="mt-2">
        <form
          onSubmit={handleSubmit(handleAddGoal)}
          className="px-2 flex flex-col gap-2"
        >
          {/* start/end date div */}
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <label htmlFor="start-date" className="text-sm">
                Start Date
              </label>
              <input
                ref={startDateRef}
                type="date"
                id="start-date"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                {...register("startDate", {
                  onChange: handleStartDateChange,
                  valueAsDate: true,
                })}
              />
            </div>
            <div>
              <label htmlFor="end-date" className="text-sm">
                End Date
              </label>
              <input
                ref={endDateRef}
                type="date"
                id="end-date"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                {...register("endDate", {
                  valueAsDate: true,
                })}
              />
            </div>

            {/* Goal div */}
            <div className="sm:col-span-2">
              <div>
                <label htmlFor="goal" className="text-sm">
                  Goal
                </label>
                <textarea
                  id="goal"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submit outline-none sm:text-sm sm:leading-6 px-1"
                  {...register("goal")}
                />
              </div>
            </div>

            {/* category div */}
            <div className="sm:col-span-2">
              <div className="flex gap-2 items-center">
                <label htmlFor="category" className="text-sm">
                  Choose Category
                </label>
                <p className="mt-1 text-xs text-center px-1 py-1 bg-primary text-white rounded-md">
                  Language Arts
                </p>
              </div>
            </div>

            {/* IEP div */}
            <div className="mt-2">
              <div className="flex gap-2 items-center">
                <label htmlFor="IEP-Goal" className="text-sm">
                  Is this an IEP Goal?
                </label>
                <Switch
                  checked={enabled}
                  onChange={handleSwitchChange}
                  className={classNames(
                    enabled ? "bg-custom-green2" : "bg-gray-200",
                    "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-custom-green2 focus:ring-offset-2"
                  )}
                >
                  <input
                    aria-hidden="true"
                    type="checkbox"
                    id="IEP-Goal"
                    className="hidden"
                    {...register("isIEPGoal")}
                  />
                  <span className="sr-only">Is this an IEP goal?</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      enabled ? "translate-x-5" : "translate-x-0",
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="p-2 bg-green-500 hover:bg-green-600 transition-colors w-10 h-10 rounded-full ml-auto mr-2 cursor-pointer"
            >
              <ChevronRightIcon className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGoal;
