import Button from "@/components/atoms/Button";
import { TextboxWithAlert } from "@/components/molecules/TextboxWithAlert";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { validationSchema } from "./resolver";

// interface Fields extends FieldValues {
//   lastName: string;
//   firstName: string;
//   mail: string;
// }

type UserCreateFormProps = {
  errors?: Partial<FieldValues>;
  handleSubmit: (data: FieldValues) => void;
};

export const UserCreateForm = (props: UserCreateFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(props.handleSubmit)} className={'form'}>
      <TextboxWithAlert
        inputProps={{ ...register("lastName"), placeholder: "姓" }}
        errorMessage={errors.lastName?.message || props.errors?.lastName}
      />
      <TextboxWithAlert
        inputProps={{ ...register("firstName"), placeholder: "名" }}
        errorMessage={errors.firstName?.message || props.errors?.firstName}
      />
      <TextboxWithAlert
        inputProps={{ ...register("mail"), placeholder: "メールアドレス" }}
        errorMessage={errors.mail?.message || props.errors?.mail}
      />
      <div>
        <Button type="submit">送信</Button>
      </div>
    </form>
  );
};