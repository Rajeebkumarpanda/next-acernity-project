import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="mt-4 font-normal text-center md-text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est quae
          error corporis, natus possimus adipisci eius. Libero consectetur, in
          deleniti, iste, maiores voluptatibus quisquam et aut tempora dolor
          iusto.
        </p>
        <Input placeholder="your email address" className="bg-black w-[600px] my-3" />
        <Textarea placeholder="your message" className="bg-black w-[600px] my-3" />
        <Button variant="outline" className="text-left">Send Message</Button>
      </div>
    </div>
  );
};

export default page;
