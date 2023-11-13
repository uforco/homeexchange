"use client";

import { Footer } from "flowbite-react";
import Downfooter from "./Downfooter";
import Smlogo from "./../othercompo/Smlogo";

const Footers = () => {
  return (
    <div className=" w-full xl:container mx-auto ">
      <Footer container>
        <div className="w-full">
          <div className=" w-full justify-between flex flex-col gap-5 sm:flex-row ">
            <div>
              <div className=" pb-8 ">
                <Smlogo></Smlogo>
              </div>
              <div className=" w-full flex justify-center sm:justify-start pb-5 ">
                <div className=" grid grid-cols-2 gap-2 w-full sm:w-[270px] ">
                  <div className=" overflow-hidden  rounded-md ">
                    <img src="https://i.ibb.co/WptZR3W/footer5.jpg" alt="" />
                  </div>
                  <div className=" overflow-hidden  rounded-md ">
                    <img src="https://i.ibb.co/Y7zYy1t/footer3.jpg" alt="" />
                  </div>
                  <div className=" overflow-hidden  rounded-md ">
                    <img src="https://i.ibb.co/47spSWh/footer4.jpg" alt="" />
                  </div>
                  <div className=" overflow-hidden  rounded-md ">
                    <img src="https://i.ibb.co/Xp0tMjg/footer2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <Downfooter></Downfooter>
        </div>
      </Footer>
    </div>
  );
};

export default Footers;
