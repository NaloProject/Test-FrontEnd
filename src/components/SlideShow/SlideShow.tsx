import React, { FC } from 'react'
import { Slide, SlideProps } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import DynamicIcon from '@Components/DynamicIcon'

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
]

const indicators = (index?: number | undefined) => (
  <li className="inline-block relative h-[7px] w-[7px] p-[5px] m-0">
    <button
      aria-label={index ? `Go to slide ${index + 1}` : `Current Slide`}
      className='border-0 bg-transparent transparent before:absolute before:left-0 before:top-0 before:h-[7px] before:w-[7px] before:rounded-full before:bg-slate-400 before:content-[""] before:center'
      data-key={index}
      type="button"
    />
  </li>
)

const SlideShow: FC<SlideProps> = ({
  children,
  slidesToShow,
  slidesToScroll,
  cssClass,
}) => (
  <div className="relative">
    <Slide
      cssClass={cssClass}
      autoplay={false}
      easing="ease-out"
      indicators={indicators}
      slidesToScroll={slidesToScroll}
      slidesToShow={slidesToShow}
      transitionDuration={300}
      responsive={responsiveSettings}
      prevArrow={
        <button
          className="!hidden md:!flex md:items-center md:justify-center top-[-48px] !left-auto !right-[60px] bg-slate-300 dark:bg-slate-600 h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-full"
          type="button"
        >
          <DynamicIcon name="prev" size={16} />
        </button>
      }
      nextArrow={
        <button
          className="!hidden md:!flex md:items-center md:justify-center top-[-48px] !right-[16px] bg-slate-300 dark:bg-slate-600 h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-full"
          type="button"
        >
          <DynamicIcon name="next" size={16} />
        </button>
      }
    >
      {children}
    </Slide>
  </div>
)

export default SlideShow
