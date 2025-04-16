import React from "react";
import Heading from "./microComp/Heading";
import timer from "../assets/timer.png";
import Image from "next/image";
import Arrows from "./microComp/arrows";
const SecondSec = () => {
  return (
    <section className="px-[7%] space-y-[40px]">
      {/* upper part */}
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row items-end gap-[87px]">
          <Heading title="Today’s" heading="Flash Sales" />
          {/* timer */}
          <Image src={timer} alt="timer" className="w-[302px] h-[50px]" />
        </div>
        <div>
          {/* arrows on right side */}
          <Arrows />
        </div>
      </div>
      {/* products */}
      <div>

      </div>
    </section>
  );
};

export default SecondSec;
