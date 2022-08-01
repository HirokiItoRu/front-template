import React from "react";

export type AlertProps = {
  message?: string;
};

export const Alert = (props: AlertProps) => {
  const defaultStyle = 'text-red-800 text-xs rounded px-2 py-2'
  if (!props.message) return null;
  return (
    <div role="alert" className={defaultStyle}>
      {props.message}
    </div>
  );
};