import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleProps {
  title: string;
  icon?: ReactNode;
  description?: string;
  xs?: boolean;
  className?: string;
}

const style = {
  wrapper: `flex flex-col`,
  titleContent: `flex flex-row justify-start gap-2 items-center`,
  titleText: `text-lg font-bold text-neutral-700`,
  titleDescription: `text-xs text-neutral-500`,
};
export default function Title({
  title,
  icon,
  description,
  xs,
  className,
}: TitleProps) {
  return (
    <div className={twMerge(style.wrapper, className)}>
      <div className={style.titleContent}>
        <h1 className={twMerge(style.titleText, xs && 'text-xs')}>{title}</h1>
        {icon && icon}
      </div>
      {description && <h4 className={style.titleDescription}>{description}</h4>}
    </div>
  );
}
