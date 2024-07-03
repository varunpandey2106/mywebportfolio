import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage from '@/images/portfolioicon.jpeg'
import { Fragment, useEffect, useRef } from 'react'

import { BsSun, BsMoon, BsChevronDown } from 'react-icons/bs'

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block outline-none">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/50 px-4 py-1 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 outline-none ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/30 dark:text-zinc-200 dark:shadow-none dark:ring-white/5">
        <span className="tracking-wider">Menu</span>
        <BsChevronDown className="ml-3 h-auto w-2 stroke-zinc-600 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-1/3 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <nav className="">
              <ul className="space-y-4 divide-zinc-100 text-center text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/experience">Experience</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/certifications">Certifications</MobileNavItem>
                <MobileNavItem href="/projects">Resume</MobileNavItem>

                <MobileNavItem href="">
                  <span className="text-red-500">Close</span>
                </MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 font-poppins transition',
          isActive
            ? 'text-green-500 dark:text-green-400'
            : 'hover:text-green-500 dark:hover:text-green-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-green-500/0 via-green-500/40 to-green-500/0 dark:from-green-400/0 dark:via-green-400/40 dark:to-green-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/30 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/30 dark:text-zinc-200 dark:shadow-none dark:ring-white/10">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/experience">Experience</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/certifications">Certifications</NavItem>
        {/* <NavItem href="/resume">Resume</NavItem> */}
        <NavItem href="https://drive.google.com/file/d/1B0-3uQ-rAHnrvGnpsFEUs6nPmqtFDpG4/view" target="_blank" rel="noopener noreferrer">Resume</NavItem>



      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('A:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('A:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group mx-3 my-2 outline-none"
      onClick={toggleMode}
    >
      <BsMoon className="h-[1.3rem] w-[1.3rem] fill-zinc-500 transition dark:hidden md:hover:fill-green-400" />
      <BsSun className="hidden h-6 w-6 fill-green-600 transition dark:block md:hover:fill-green-500" />
    </button>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-9 w-9 rounded-full ring-green-500/10 ring-offset-2 duration-300 hover:scale-110 hover:ring-purple-500/80 dark:ring-green-500/20 dark:ring-offset-zinc-900 hover:dark:ring-green-500/80 md:h-10 md:w-10 md:ring-1'
      )}
      {...props}
    />
  )
}

function Avatar({ className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <div className="flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-green-100 via-green-600 to-green-100 duration-300 dark:from-green-900/10 dark:via-violet-400 dark:to-violet-900/10">
        <Image
          src={avatarImage}
          alt="Avatar Image of Varun Pandey"
          sizes="2.25rem"
          className="flex items-center bg-green-500/10 saturate-150 backdrop-blur-sm"
          priority
        />
      </div>
    </Link>
  )
}

export function Header({ previousPathname }) {
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
      }
    }

    function updateStyles() {
      updateHeaderStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateStyles, { passive: true })
    }
  }, [isHomePage])

  return (
    <>
      <header
        // use animate-fade-in only on the home page
        className={clsx(
          'pointer-events-none relative z-50 flex w-full flex-col',
          isHomePage && previousPathname === undefined && 'animate-fade-in'
        )}
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: 'var(--header-position)' }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <AvatarContainer>
                  <Avatar />
                </AvatarContainer>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto flex items-center md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
