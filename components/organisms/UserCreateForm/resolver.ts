import * as yup from "yup";

export const validationSchema = yup
  .object({
    lastName: yup.string().required("姓が未入力です"),
    firstName: yup.string().required("名が未入力です"),
    mail: yup.string().email('メールアドレスの形式が正しくありません').required('必須項目です'),
    // password: yup.string().min(8, '8文字以上で入力してください').matches(/\l/, { message: '半角英小文字で入力してください' }),
  })
  .required();