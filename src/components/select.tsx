import React, { useState } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  CheckIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import cx from "classnames";
import Button from "./shared/button";

type Props = {
  placeholder: string;
  options: string[];
  value: (plan: string | undefined) => void;
};

const Select = (props: Props) => {
  return (
    <SelectPrimitive.Root onValueChange={(e) => props.value(e)}>
      <SelectPrimitive.Trigger asChild aria-label="Options">
        <Button>
          <SelectPrimitive.Value placeholder={props.placeholder} />
          <SelectPrimitive.Icon className="ml-2">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 font-bold">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="bg-white-default p-2 rounded-lg shadow-lg">
          <SelectPrimitive.Group>
            {props.options.map((f, i) => (
              <SelectPrimitive.Item
                key={`${f}-${i}`}
                value={f}
                className={cx(
                  "relative flex items-left px-8 py-2 rounded-md text-sm text-gray-default font-bold focus:bg-gray-300",
                  "radix-disabled:opacity-50",
                  "focus:outline-none select-none"
                )}
              >
                <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <CheckIcon />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 font-bold">
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

export default Select;
