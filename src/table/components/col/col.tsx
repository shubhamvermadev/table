import React, { ReactNode } from 'react'

type ColProps = {
  children: React.ReactElement | string | number | ReactNode | boolean;
}

export function Col (props: ColProps) {
  const { children } = props;
  return (
    <col>{children}</col>
  )
}
