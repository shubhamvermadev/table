import React, { ReactNode } from 'react'

type ColGroupProps = {
  children: React.ReactElement | string | number | ReactNode | boolean;
}

export function Colgroup (props: ColGroupProps) {
  const { children } = props;
  return (
    <colgroup>{children}</colgroup>
  )
}
