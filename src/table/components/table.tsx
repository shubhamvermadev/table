import React, { ReactNode } from 'react';
import { TBody } from './body/tbody';
import { Td } from './cell/td';
import { Col } from './col/col';
import { Colgroup } from './col/colgroup';
import { TFoot } from './footer/tfoot';
import { Th } from './head/th';
import { THead } from './head/thead';
import { Tr } from './row/tr';

type TableProps = {
  children: React.ReactElement | string | number | ReactNode | boolean;
}

export function Table (props: TableProps) {
  const { children } = props;

  return (
    <table>{children}</table>
  )
}

export default Table

// TBody
// Td
// Col
// Colgroup
// TFoot
// Th
// THead
// Tr