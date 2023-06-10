import { FC, ReactNode, useState } from 'react'
import clsx from 'clsx'

export type SwitchProps = {
  iconOff: ReactNode
  iconOn: ReactNode
  label?: {
    off: string
    on: string
  }
  onClick?: () => void
  on?: boolean
}

const Switch: FC<SwitchProps> = ({
  iconOff,
  iconOn,
  label,
  on = false,
  onClick,
}) => {
  const [toggle, setToggle] = useState(() => on)

  const onSwitchClick = () => {
    if (!onClick) {
      setToggle(!toggle)
      return
    }
    onClick()
  }

  return (
    <nav className="flex justify-end w-full items-center mb-2 md:mb-0">
      {label && (
        <h4 className="font-bold text-[12px] md:text-[14px] text-slate-700 mr-2 md:mr-3">
          <>{on ? label.on : label.off}</>
        </h4>
      )}
      <div
        className="relative rounded-full p-[2px] cursor-pointer border-2 border-slate-700 h-[20px] w-[40px] md:h-[28px] md:w-[56px]"
        onClick={onSwitchClick}
        role="button"
      >
        <div
          className={clsx(
            'absolute flex items-center justify-center rounded-full p-[2px] bg-slate-700 border-slate-700 h-[12px] w-[12px]  md:h-[20px] md:w-[20px] transition-left duration-300 ease-in-out',
            {
              'left-[2px]': onClick ? on : !toggle,
              'left-[22px] md:left-[30px]': onClick ? on : toggle,
            }
          )}
        >
          {on ? iconOff && <>{iconOff}</> : iconOn && <>{iconOn}</>}
        </div>
      </div>
    </nav>
  )
}

export default Switch
