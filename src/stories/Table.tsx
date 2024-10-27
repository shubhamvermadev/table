import React, { Children } from 'react'
import { Tabing, TColumns } from '../table/tabing'

type TestType = {
    value: string
}

type Rows = {
    id: string;
    name: string;
    roll: string;
    phone: string;
}

const dummyColumn = [
    {
        headerName: "ID",
        field: "id",
        disableFilter: true,
        editable: true,
    },
    {
        headerName: "NAME",
        field: "name",
        width: 90,
        minWidth: 50,
        maxWidth: 100,
        editable: true,
        child: (row: Rows) => <input defaultValue={row.name} />
    },
    {
        headerName: "ROLL NO",
        field: "roll",
        width: 90,
        minWidth: 50,
        maxWidth: 100,
        editable: true,
    },
    {
        headerName: "PHONE",
        field: "phone",
        width: 90,
        minWidth: 50,
        maxWidth: 100,
        editable: true,
    },
]

const dummyRows = [
    { id: "1", name: "shubham", roll: "01", phone: "9991447575", },
    { id: "2", name: "vishal", roll: "02", phone: "9876543212", },
    { id: "3", name: "hardeep", roll: "03", phone: "4567891234", },
    { id: "4", name: "beniwal", roll: "04", phone: "9876512345", },
    { id: "5", name: "kamal", roll: "05", phone: "2345687654", },
]

const Test = ({ value }: TestType) => {
    return (
        <Tabing<Rows>
            columns={dummyColumn}
            rows={dummyRows}
            enableColFilter={true}
        />
    )
}

export default Test