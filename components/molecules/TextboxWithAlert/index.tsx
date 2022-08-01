import { Alert } from "@/components/atoms/Alert";
import React from "react";

export type TextboxWithAlertProps = {
  inputProps: React.ComponentProps<"input">;
  errorMessage?: string;
};

export const TextboxWithAlert = ({
  inputProps: { type, ...inputArgs },
  errorMessage,
}: TextboxWithAlertProps) => {
  return (
    <div className={'py-2'}>
      <input className={'text-base border rounded px-2 py-2'} type="text" {...inputArgs} />
      <Alert message={errorMessage} />
    </div>
  );
};