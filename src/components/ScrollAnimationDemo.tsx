import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ScrollAnimationDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[100px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-gray-900">
              Empower Your <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-sky-600">
                Little Athletes!
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Kids exercising with mini workout equipment"
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}