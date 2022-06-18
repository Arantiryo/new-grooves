import { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
  className: string;
};

export default function Title({ children, className }: TitleProps) {
  return <h1 className={className}>{children}</h1>;
}
