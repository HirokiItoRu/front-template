import React from "react";
import { UserCreateForm } from "@/components/organisms/UserCreateForm";
import { useUserCreate } from "./useUserCreate";

type UserCreateProps = {}

export const UserCreate = () => {
  const [state, handlers] = useUserCreate();
  // state.errors: ex.) {mail: "登録済みのアドレスです"}

  return (
    <>
      <UserCreateForm
        errors={state.errors}
        handleSubmit={handlers.handleSubmit}
      />
      {state.succeed && "OK"}
    </>
  );
};
