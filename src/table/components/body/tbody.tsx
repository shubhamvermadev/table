import React, { ReactNode } from 'react'

type TBodyProps = {
  children: React.ReactElement | string | number | ReactNode | boolean;
}

export function TBody (props: TBodyProps) {
  const { children } = props;

  return (
    <tbody>{children}</tbody>
  )
}
