import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './astro-theme.scss';



export default function AstroGrid(props) {
    if (props.columns == null) return null;

    const onDelete = (data) => {
        props.onDelete && props.onDelete(data);
    }

    return (
        <div className="ag-theme-astro" style={ { height: '900px', width: '100%'} } >
            <AgGridReact
                rowData={props.rowData}
                autoSizeAllColumns
                loadingCellRenderer={null}>
                {
                    Object.keys(props.columns).map(key => 
                        <AgGridColumn key={key}
                            field={key}
                            headerName={props.columns[key]}
                            sortable
                            resizable
                        />                    
                    )
                }
                <AgGridColumn 
                    headerName="Actions" 
                    cellRendererFramework={({data}) =>
                        <div style={{padding: 5,}}>
                            <button className='rux-button rux-button--small' onClick={() => onDelete(data)}>X</button>
                        </div>  
                    } 
                />
                    
            </AgGridReact>
        </div>
    );
}
