import {HTMLAttributes} from "react";

interface ColumnDef {
  text: string,
  field: string,
}

export interface TableProps {
  id?: string;
  columns: ColumnDef[];
  rows: any[];
}

export default function Table(
  props: TableProps & HTMLAttributes<HTMLInputElement>
) {
  return (<div><table className={'rux-table'}>
    <thead>
      <tr className={'rux-table__column-head'}>
        { props.columns.map(item => <th key={item.field}>{item.text}</th>)}
      </tr>
    </thead>
    <tbody>
      { props.rows.map((item: any) => <tr key={item}>
        {props.columns.map((col: ColumnDef) => <td key={item}>{item[col.field]}</td>)}
      </tr>)}
    </tbody>
  </table></div>)
}