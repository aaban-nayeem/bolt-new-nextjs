"use client";

import Lookup from "@/data/Lookup";
import { ArrowRight, Link } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [userInput, setUserInput] = useState();

  return (
    <div className="mt-56 flex flex-col items-center gap-2 xl:mt-52">
      <h2 className="text-4xl font-bold">{Lookup.HERO_HEADING}</h2>
      <p className="font-medium text-gray-400">{Lookup.HERO_DESC}</p>

      <div className="w-full max-w-xl rounded-xl border p-3">
        <div className="flex gap-3">
          <textarea
            onChange={(event) => setUserInput(event.target.value)}
            placeholder={Lookup.INPUT_PLACEHOLDER}
            className="h-32 w-full resize-none bg-transparent outline-none"
          />
          <ArrowRight className="h-8 w-8 cursor-pointer rounded-md bg-blue-500 p-2" />
        </div>

        <div className="">
          <Link className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
