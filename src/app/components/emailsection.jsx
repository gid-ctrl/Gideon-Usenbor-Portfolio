import React from 'react'
import GithubIcon from "../../../public/github.svg"
import LinkedIn from "../../../public/linkedin.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>
                Let's Connect
            </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {""}
                    "Hi! I'm currently looking for new oppurtunities, for work, please feel free to get back to me!"
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="github.com">
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href={"linkedIn.com"}>
                        <Image src={LinkedIn} alt='LinkedIn Icon'/>
                    </Link>
                </div>
        </div>
    </section>
  )
}

export default EmailSection