import * as yup from "yup"

export const addStudentSchema = yup.object({
  file: yup.mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.length) return true
    return value[0].size <= 2000000
  }),
  firstName: yup.string().required(),
  middleName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  facilitator: yup.string().required(),
})