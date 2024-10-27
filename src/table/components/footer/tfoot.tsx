import React, { ReactNode } from 'react'

type TFootProps = {
    children: React.ReactElement | string | number | ReactNode | boolean;
}

export function TFoot (props: TFootProps) {
    const { children } = props;
    return (
        <tfoot>{children}</tfoot>
    )
}
