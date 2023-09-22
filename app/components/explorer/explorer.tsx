"use client";

// Hooks
import { useState } from "react";
import { useTabStore } from "@/app/lib/hooks/useTabStore";
import { cn } from "@/app/lib/utils/style";

// Components
import Link from "next/link";

// Icons
import ChevronRight from "@/app/icons/ChevronRight";

// Links
import { explorerItems } from "@/app/lib/utils/tabs";

export default function Explorer() {
  const [opened, setOpened] = useState<boolean>(true);

  const { addTab } = useTabStore();

  return (
    <div className="w-[18vw] h-full text-slate-300 bg-explorer border-r border-explorerBorder flex flex-col py-[0.5rem] px-[0.75rem]">
      <div className="font-normal mt-2 mb-6 uppercase text-[0.8rem] leading-[1px] ">
        Explorer
      </div>

      {/*  */}
      <div className="h-full">
        <div
          onClick={() => setOpened(!opened)}
          className="flex items-center cursor-pointer"
        >
          <ChevronRight className={cn("transition", opened && "rotate-90")} />
          <div className="ml-[10px] text-[12px] leading-[1px] font-medium uppercase">
            Portfolio
          </div>
        </div>

        <div
          className={cn(
            "mt-[10px] ml-[10px] h-0 w-full transition-all",
            opened && "h-[200px]"
          )}
        >
          {explorerItems.map((item) => (
            <Link
              key={item.name}
              onClick={() => {
                addTab(item);
              }}
              href={item.path}
              className="w-full h-[20px] pl-[4px] rounded-[4px] my-[6px] flex items-center cursor-pointer"
            >
              <img src={item.icon} width={14} height={14} />
              <div className="ml-[8px] font-normal text-[14px] text-white">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
