import Link from "next/link";

import {RiGithubLine, RiLinkedinLine, RiBehanceLine } from 'react-icons/ri'


const Socials = () => {
  return (<div className='flex items-center gap-x-5 text-lg'>
      <Link href='https://www.linkedin.com/in/carloseduardoleosantos/' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href='https://github.com/CarlosSantos99' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
