'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Downfooter = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between">
      <Footer.Copyright href="#" by="Home Exchange™" year={2023} />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon href="#" icon={BsFacebook} />
        <Footer.Icon href="#" icon={BsInstagram} />
        <Footer.Icon href="#" icon={BsTwitter} />
        <Footer.Icon href="#" icon={BsGithub} />
      </div>
    </div>
  );
};

export default Downfooter;
