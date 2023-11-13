"use client";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const Contactusfrom = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className=" flex flex-col sm:flex-row justify-between gap-2 ">
        <div className=" w-full ">
          <div className="mb-2  block">
            <Label
              htmlFor="Name"
              className="text-base ml-2 "
              value="Your Name"
            />
          </div>
          <TextInput
            id="Name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className=" w-full ">
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              className="text-base ml-2"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Enter email address"
            required
          />
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Subject" className="text-base ml-2" value="Subject" />
        </div>
        <TextInput
          id="Subject"
          type="text"
          placeholder="Write a subject"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="message "
            className="text-base ml-2"
            value="Message"
          />
        </div>
        <Textarea
          id="message"
          placeholder="Write your message"
          required
          rows={5}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label className="text-base ml-2" htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button
        style={{}}
        className=" bg-red-500 hover:bg-red-600 "
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default Contactusfrom;
