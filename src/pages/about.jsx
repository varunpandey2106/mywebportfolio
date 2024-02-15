import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'

import { BsTwitter, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import {
  SiPython,
  SiGo,
  SiJavascript,
  SiDjango,
  SiFastapi,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import portraitImage from '@/images/varun.jpeg'
import { baseUrl } from '../seo.config'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          className,
          'group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 hover:text-green-500 dark:text-zinc-200 dark:hover:text-green-500'
        )}
      >
        <Icon className="mr-3 h-[1.2rem] w-[1.2rem] flex-none fill-zinc-500 transition group-hover:fill-green-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Skills({ className, icon: Icon, children }) {
  return (
    <li>
      <div className="group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 dark:text-zinc-200">
        <Icon
          className={clsx(
            className,
            'mr-3 h-[1.2rem] w-[1.2rem] fill-green-500/70 dark:fill-green-300'
          )}
        />
        <span className="ml-4">{children}</span>
      </div>
    </li>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="I&apos;m a Full Stack Web Developer in my pre final year of college."
        canonical={`about/`}
        openGraph={{
          url: `$about/`,
          title: 'About',
          description:
            "I am a Full Stack Web Developer in my pre final year of college.",
          images: [
            {
              url: `api/og?title=About`,
              width: 1200,
              height: 600,
              alt: `Blog | Varun Pandey`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex justify-center lg:col-span-5">
            <div className="pt-2 lg:pl-10">
              <div className="max-w-xs px-2.5">
              <Image
          src={portraitImage}
          alt="Avatar Image of Varun Pandey"
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="rounded-full transition duration-500 hover:scale-110"
          priority
        />
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:col-span-7 lg:row-span-2">
            <h1 className="font-heading text-4xl tracking-wider text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I am{' '}
              <span
                className="animate-gradient bg-gradient-to-r from-purple-500 via-green-500 to-pink-500 bg-clip-text
            text-transparent dark:from-purple-400 dark:via-green-400
            dark:to-pink-400"
              >
                Varun Pandey.
              </span>{' '}
              <br />I'm from Mumbai, India.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 md:text-justify">
              <p>
                I am currently in my pre final year of my college. I am pursuing a dual degree in computer science from from VIT vellore

              </p>
              I am inclined towards building backend web applications and APIs
              <p>
                
              </p>
              I enjoy working out, deadlifts being my favourite. Headbanging to heavy music is a close second.
              <p>
                
              </p>
              <div className="cursor-default">
                <span className="font-poppins font-bold tracking-widest underline">
                  Technologies I use
                </span>
                <ul
                  role="list"
                  className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 font-poppins md:grid-cols-3"
                >
                  <Skills
                    icon={SiPython}
                    className="group-hover:fill-yellow-400 dark:group-hover:fill-yellow-300"
                  >
                    Python
                  </Skills>
                  <Skills
                    icon={SiGo}
                    className="group-hover:fill-blue-400 dark:group-hover:fill-blue-300"
                  >
                    Go
                  </Skills>
                  <Skills
                    icon={SiJavascript}
                    className="group-hover:fill-black dark:group-hover:fill-white"
                  >
                    Javascript
                  </Skills>
                  <Skills
                    icon={SiDjango}
                    className="group-hover:fill-black dark:group-hover:fill-white"
                  >
                    Django
                  </Skills>
                  <Skills
                    icon={SiFastapi}
                    className="group-hover:fill-blue-400"
                  >
                    Fastapi
                  </Skills>
                  <Skills
                    icon={SiReact}
                    className="group-hover:fill-blue-500"
                  >
                    React
                  </Skills>
                  <Skills
                    icon={SiNextdotjs}
                    className="group-hover:fill-orange-400"
                  >
                    Next
                  </Skills>
                  <Skills
                    icon={SiTailwindcss}
                    className="group-hover:fill-blue-400 dark:group-hover:fill-blue-300"
                  >
                    Tailwind
                  </Skills>
                  <Skills
                    icon={SiPostgresql}
                    className="group-hover:fill-yellow-400 dark:group-hover:fill-yellow-300"
                  >
                    Postgres
                  </Skills>
                  <Skills
                    icon={SiDocker}
                    className="group-hover:fill-yellow-400 dark:group-hover:fill-yellow-300"
                  >
                    Docker
                  </Skills>
                </ul>
              </div>

              <div className="flex justify-center pt-8 md:hidden">
                <Button href="/projects" className="py-2">
                  See my projects
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden font-poppins lg:col-span-5 lg:block lg:pl-10">
            <div className="flex justify-center">
              <ul role="list" className="space-y-6">
                <SocialLink
                  href="https://twitter.com/home?lang=en"
                  icon={BsTwitter}
                  className=""
                >
                  v4roooom
                </SocialLink>
                <SocialLink
                  href="https://github.com/varunpandey2106"
                  icon={BsGithub}
                  className=""
                >
                  varunpandey2106
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/varun-pandey-bb7743204/"
                  icon={FaLinkedinIn}
                  className=""
                >
                  varunpandey
                </SocialLink>
                <div className="flex justify-center">
                  <div className="w-24 border-t border-zinc-300 dark:border-zinc-600/40"></div>
                </div>
                <SocialLink
                  href="mailto:varun.pandey2106@gmail.com"
                  icon={MdEmail}
                  className=""
                >
                  varun.pandey2106@gmail.com
                </SocialLink>
                <Button href="/projects" className="py-2">
                  See my projects
                </Button>
              </ul>
            </div>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </Container>
    </>
  )
}
