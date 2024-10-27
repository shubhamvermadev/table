import React, { ReactElement, ReactNode, useMemo, useState } from 'react'
import TableContext from './components/context';
import Table from './components/table';
import { THead } from './components/head/thead';
import { Th } from './components/head/th';
import { Tr } from './components/row/tr';
import { TBody } from './components/body/tbody';
import { Td } from './components/cell/td';
import { arrObjToHashMap, EventRes, eventToObj } from './components/helper';
import { Input } from './components/input/input';

export type TColumns<T> = {
    headerName: string,
    field: string,
    width?: number,
    minWidth?: number,
    maxWidth?: number,
    editable: boolean,
    child?: (r: T) => ReactElement | ReactNode
};
type TRows<T> = any | T;

type TabingProps<T> = {
    columns: TColumns<T>[];
    rows: TRows<T>[];
    enableColFilter?: boolean;
}

const COL_KEY = "field";

export function SVTable<T>(props: TabingProps<T>) {
    const { columns, rows, enableColFilter = false } = props;
    const colHashMap = arrObjToHashMap(columns, COL_KEY);
    const colList = Object.keys(colHashMap);
    const [state, setState] = useState({ rows: rows, colFilters: [], colFilterCol: "", colFilterValue: "", });


    const colFilter = eventToObj((obj: EventRes) => {
        setState((prev)=>({...prev, colFilterCol: obj.name, colFilterValue: obj.value.toString() }))
    })

    const trows = useMemo(()=>{
        const _rows = state.colFilterValue ? state.rows.filter(row => row[state.colFilterCol].includes(state.colFilterValue)) : state.rows;
        return _rows;
    }, [state.colFilterValue ]);


    return (
        // <TableContext.Provider value={state}>
        <Table>
            <THead>
                <Tr>
                    {colList.map(x => <Th {...colHashMap[x]} >{colHashMap[x].headerName}</Th>)}
                </Tr>
                {enableColFilter && <Tr>
                    {colList.map(x => <Th {...colHashMap[x]} ><Input throttle name={colHashMap[x][COL_KEY]} onChange={colFilter} /></Th>)}
                </Tr>}
            </THead>
            <TBody>
                {trows.map((row, rowIndex) => (
                    <Tr key={`row-${row.id}`}>
                        {colList.map((col) => <Td key={`col-${col}`}>{colHashMap[col].child ? colHashMap[col].child(row) : row[col]}</Td>)}
                    </Tr>
                ))}
            </TBody>
        </Table>
        // </TableContext.Provider>
    )
}
