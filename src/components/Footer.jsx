import Link from 'next/link'
import clsx from 'clsx'

import { BsTwitter, BsGithub, BsSpotify } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-poppins transition md:hover:text-green-500 md:dark:hover:text-green-400"
    >
      {children}
    </Link>
  )
}

function SocialLinkMobile({ className, icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon
        className={clsx(
          className,
          'h-5 w-5 fill-zinc-500 transition dark:fill-zinc-400'
        )}
      />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 bg-gray-100 pt-10 pb-14 dark:border-zinc-700/40 dark:bg-black">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
              <div className="hidden gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200 md:flex">
                <NavLink href="https://github.com/varunpandey2106">GitHub</NavLink>
                <NavLink href="https://twitter.com/v4roooom">Twitter</NavLink>
                <NavLink href="https://open.spotify.com/user/n2v12cyihiyjbvdefwcqk1574?si=f8a251e6d2d64492">Spotify</NavLink>

                <NavLink href="https://www.linkedin.com/in/varun-pandey-bb7743204/">
                  LinkedIn
                </NavLink>
                <NavLink href="mailto:varun.pandey2106@gmail.com">Mail</NavLink>
              </div>
              <div className="flex gap-x-12 md:hidden">
              <SocialLinkMobile
                  href="https://github.com/varunpandey2106"
                  aria-label="Follow on GitHub"
                  icon={BsGithub}
                />
                <SocialLinkMobile
                  href="https://twitter.com/v4roooom"
                  aria-label="Follow on Twitter"
                  icon={BsTwitter}
                />
                <SocialLinkMobile
                  href="https://twitter.com"
                  aria-label="Check out my Music"
                  icon={BsSpotify}
                />
                
                <SocialLinkMobile
                  href="https://www.linkedin.com/in/varun-pandey-bb7743204/"
                  aria-label="Follow on LinkedIn"
                  icon={FaLinkedinIn}
                />
                <SocialLinkMobile
                  className="h-6 w-6"
                  href="mailto:varun.pandey2106@gmail.com"
                  aria-label="Send an email"
                  icon={MdEmail}
                  
                />
              </div>
              <p className="font-poppins text-sm tracking-wider text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Varun Pandey. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
