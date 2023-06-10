import { Inter } from 'next/font/google'
import { FC, useState, PropsWithChildren, useEffect } from 'react'
import clsx from 'clsx'
import Switch from '@Components/Switch'
import DynamicIcon from '@Components/DynamicIcon'

const inter = Inter({ subsets: ['latin'] })

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    setDarkMode(localStorage.getItem('mode') === 'true')
  }, [darkMode])

  const toggleMode = () => {
    localStorage.setItem('mode', (!darkMode).toString())
    setDarkMode(localStorage.getItem('mode') === 'true')
  }

  return (
    <div
      className={clsx({
        dark: darkMode,
        light: !darkMode,
      })}
    >
      <div className="absolute h-screen w-screen overflow-scroll bg-gradient-to-t from-rose-200 to-rose-100 dark:bg-gradient-to-t dark:from-sky-900 dark:to-sky-800">
        <main
          className={`${inter.className} bg-white dark:bg-slate-800 bg-white flex flex-col items-start min-h-screen px-10 py-6 sm:p-14 md:p-16 lg:p-24 sm:m-10 sm:mb-0 sm:rounded-tl-[32px] sm:rounded-tr-[32px] sm:!rounded-bl-0 sm:!rounded-br-0`}
        >
          <Switch
            on={darkMode}
            onClick={toggleMode}
            iconOff={
              <DynamicIcon
                name="sun"
                className="!fill-white dark:!fill-slate-100"
              />
            }
            iconOn={
              <DynamicIcon
                name="moon"
                className="!fill-white dark:!fill-slate-100"
              />
            }
          />
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
