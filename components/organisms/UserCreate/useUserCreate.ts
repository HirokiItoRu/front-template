import React from "react";
import { FieldValues } from "react-hook-form";
import fetch from "node-fetch"

type State = {
  errors: Partial<FieldValues> | undefined;
  succeed: boolean | undefined;
};

export function useUserCreate() {
  const [userState, setUserState] = React.useState<State>({
    errors: undefined,
    succeed: undefined,
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const handleSubmit = async (data: FieldValues) => {
    // console.log('handleSubmit')
    try {
      setIsLoading(true)
      const res = await fetch("https://api-server.com/user",
        { method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
      const responseData = await res.json()
      setIsLoading(false)

      if (res.status == 201) {
        setUserState({
          errors: undefined,
          succeed: true,
        });
      } else if (res.status == 409) {
        setUserState({
          errors: responseData.err.item,
          succeed: false,
        });
      }

    } catch (err) {
      console.log('err: ', err)
      setIsLoading(false)
      setUserState({
        errors: ['通信を確かめて再度送信してください'],
        succeed: false,
      });
    }
  }

  const onChange = async (data: FieldValues) => {
    // dispatch({
    //   errors: undefined,
    //   succeed: true,
    // });
  }
  // return [state, { handleSubmit, onChange }] as const;
  return [userState, { handleSubmit, onChange }] as const;
}
