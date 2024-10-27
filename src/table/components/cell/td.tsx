import React, { ReactNode } from 'react'

type TdProps = {
  children: React.ReactElement | string | number | ReactNode | boolean;
}


export function Td (props: TdProps) {
  const { children } = props;

  const style = {
    border: "1px solid"
  }
  return (
    <td style={style}>{children}</td>
  )
}

