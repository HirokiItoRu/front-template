import React from "react";
import { UserCreateForm } from "@/components/organisms/UserCreateForm";
import { useUserCreate } from "./useUserCreate";

type UserCreateProps = {}

export const UserCreate = () => {
  const {handleSubmit, data, loading, error } = useUserCreate()

  return (
    <>
      <UserCreateForm
        errors={data?.error?.item}
        handleSubmit={(d) => handleSubmit({variables: d})}
      />
      {loading ? 'loading...' : ''}
      {error ? error : ''}
      {data?.error == null && "OK"}
    </>
  );
};
