import React, { ReactNode } from 'react'

type TheadProps = {
  children: React.ReactElement | string | number | ReactNode | boolean;
}

export function THead (props: TheadProps) {
  const { children } = props;
  return (
    <thead>{children}</thead>
  )
}
