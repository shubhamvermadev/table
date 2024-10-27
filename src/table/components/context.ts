import { createContext } from "react";

const TableContext = createContext({} as [{ str: string, html: string }, (state: any) => void]);

export default TableContext;
