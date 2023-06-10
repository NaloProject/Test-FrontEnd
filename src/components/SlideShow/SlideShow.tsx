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
      slidesToScroll={slidesToScroll}
      slidesToShow={slidesToShow}
      transitionDuration={300}
      responsive={responsiveSettings}
      prevArrow={
        <button
          className="!hidden md:!flex md:items-center md:justify-center top-[-48px] !left-auto !right-[60px] bg-slate-300 h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-full"
          type="button"
        >
          <DynamicIcon name="prev" size={16} />
        </button>
      }
      nextArrow={
        <button
          className="!hidden md:!flex md:items-center md:justify-center top-[-48px] !right-[16px] bg-slate-300 h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-full"
          type="button"
        >
          <DynamicIcon name="next" size={16} />
        </button>
      }
      indicators
    >
      {children}
    </Slide>
  </div>
)

export default SlideShow
