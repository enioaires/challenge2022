import cx from "classnames";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className"> & {
  button?: string;
  inverse?: string;
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={
        props.button && !props.inverse
          ? cx(
              "inline-flex select-none items-center justify-center rounded-full px-4 py-3  font-indie text-xl font-normal border border-gray-300 min-w-full max-h-12",
              "bg-green-primary text-white-default",
              "hover:bg-green-primary"
            )
          : props.button && props.inverse
          ? cx(
              "inline-flex select-none items-center justify-center rounded-full px-4 py-3  font-indie text-xl font-normal border border-green-primary min-w-full max-h-12",
              "bg-white-default text-green-primary",
              "hover:bg-white-default"
            )
          : cx(
              "inline-flex select-none items-center justify-between rounded-3xl px-4 py-3 text-sm font-medium border border-gray-300 min-w-full",
              "bg-transparent text-gray-default",
              "hover:bg-gray-100",
              "focus:outline-none focus-visible:ring focus-visible:ring-white-background focus-visible:ring-opacity-75",
              // Register all radix states
              "group",
              "radix-state-open:bg-gray-default dark:radix-state-open:bg-gray-900",
              "radix-state-on:bg-gray-default dark:radix-state-on:bg-gray-900",
              "radix-state-instant-open:bg-gray-default radix-state-delayed-open:bg-gray-default"
            )
      }
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
