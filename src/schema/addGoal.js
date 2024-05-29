import * as yup from "yup"

// Helper function to strip the time component from dates
const stripTime = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate())

export const addGoalSchema = yup.object({
  startDate: yup
    .date()
    .transform((value, originalValue) => stripTime(new Date(originalValue)))
    .min(stripTime(new Date()), "Start date cannot be less than today")
    .required("Start date is required"),
  endDate: yup
    .date()
    .transform((value, originalValue) => stripTime(new Date(originalValue)))
    .when("startDate", (startDate, schema) => {
      if (startDate) {
        const dayAfter = new Date(new Date(startDate).getTime() + 86400000)
        return schema.min(
          dayAfter,
          "End date has to be at least one day after the start date"
        )
      }
      return schema
    })
    .required("End date is required"),
  goal: yup.string().required("Goal is required"),
  isIEPGoal: yup.boolean().required(),
})
