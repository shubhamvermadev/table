import React, { ReactNode } from 'react'

type TrProps = {
  children: React.ReactElement | string | number | ReactNode | boolean;
}

export function  Tr (props: TrProps) {
  const { children } = props;
  return (
    <tr>{children}</tr>
  )
}
