import React, { ReactNode } from 'react'


type TColumns = {
  headerName: string,
  field: string,
  width: number,
  minWidth: number,
  maxWidth: number,
  editable: boolean,
};

type ThProps = {
  rowSpan?: number;
  colSpan?: number;
  children: React.ReactElement | string | number | ReactNode | boolean;
} & TColumns;

export function Th  (props: ThProps) {
  const { children, rowSpan, colSpan } = props;
  const optionalProps = {
    rowSpan, colSpan
  }
  const style = {
    // width: props.width+"px",
    // minWidth: props.minWidth+"px",
    // maxWidth: props.maxWidth+"px",
    border: "1px solid"
  }
  return (
    <th style={style} {...optionalProps}>{children}</th>
    // <th style={{border: "1px solid"}} {...{rowSpan: props.rowSpan, colSpan: props.colSpan}}>{props.children}</th>
  )
}
