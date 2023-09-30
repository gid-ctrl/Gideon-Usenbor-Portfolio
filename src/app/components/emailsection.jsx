import React from 'react'
import GithubIcon from "../../../public/github.svg"
import LinkedIn from "../../../public/linkedin.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='flex flex-col items-center justify-center my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>
          Let's Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {"Hi! I'm currently looking for new opportunities, for work, please feel free to get back to me!"}
        </p>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {"Please get in contact with me through my email: giddyu.gu@gmail.com"}
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/gid-ctrl">
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href={"https://www.linkedin.com/in/gideon-usenbor-550810194/"}>
            <Image src={LinkedIn} alt='LinkedIn Icon'/>
          </Link>
        </div>
        {/* </div> */}
        {/* <div className="z-10">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 hover:bg-white-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};
  


export default EmailSection