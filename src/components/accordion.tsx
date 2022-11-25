import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "@radix-ui/react-icons";
import cx from "classnames";

interface AccordionItem {
  header: string;
  content: string;
}

interface Props {
  items: AccordionItem[];
}

const Accordion = (props: Props) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      defaultValue="item-1"
      collapsible
      className={cx("space-y-4 max-w-md")}
    >
      {props.items.map(({ header, content }, i) => (
        <div className="flex flex-row" key={i}>
          <div className="bg-white-default flex items-center justify-center px-2">
            {i + 1}
          </div>
          <div className="px-1" />
          <AccordionPrimitive.Item
            key={`header-${i}`}
            value={`item-${i + 1}`}
            className="rounded-lg focus-within:ring focus-within:ring-white-background focus-within:ring-opacity-75 focus:outline-none min-w-full"
          >
            <AccordionPrimitive.Header className="w-full">
              <AccordionPrimitive.Trigger
                className={cx(
                  "group",
                  "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
                  "focus:outline-none",
                  "inline-flex w-full items-center justify-between bg-white-default px-4 py-2 text-left"
                )}
              >
                <span className="text-sm font-medium text-gray-900">
                  {header}
                </span>
                <PlusIcon
                  className={cx(
                    "ml-2 h-5 w-5 shrink-0 text-gray-800 ease-in-out",
                    "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                  )}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="pt-r1 w-full rounded-b-lg bg-white-default px-4 pb-3 ">
              <div className="text-sm text-gray-700">{content}</div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        </div>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
