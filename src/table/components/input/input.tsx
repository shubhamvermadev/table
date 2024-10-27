import React, { ChangeEvent } from 'react'
import { throttle } from '../helper';

type InputProps ={
    name?: string;
    disable?: boolean
    onChange: (e: ChangeEvent<{name: string, value: string}>)=> void;
    throttle?: boolean;
    throttleTime?: number;
}

const dummyFunc = (e: any) =>{}

export function Input (props: InputProps) {
    const {disable, onChange, name, throttleTime = 500, throttle:doThrottle } = props;
  return (
    <input name={name} disabled={disable} onChange={!disable ? doThrottle ? throttle(onChange, throttleTime): onChange : dummyFunc }/>
  )
}
