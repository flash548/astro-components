import React from 'react';
import './App.css';
import AstroStatusBar from './Astro/AstroStatusBar.js';
import AstroTabCtrl from './Astro/AstroTabCtrl';
import Airman from './Airman';
import Squadron from './Squadron';

function App() {
  return (
    <>
      <AstroStatusBar title="TRON Common API Console" />
      <div style={{padding: 20}}>
        <AstroTabCtrl id="test">
          <AstroTabCtrl.Tab title="Airman">
            <Airman />
          </AstroTabCtrl.Tab>      
          <AstroTabCtrl.Tab title="Squadron">          
            <Squadron />
          </AstroTabCtrl.Tab>
          <AstroTabCtrl.Tab title="Test">
          <div style={{paddingTop: 20, display: 'flex', flexDirection: 'column', width: '100%'}}>          
            <table className="rux-table" style={{width: 375}}>
            <thead>
            <tr className="rux-table__column-head">
              <th>Hello</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test Content</td>
              </tr>
            </tbody>
            </table>
          </div>
          </AstroTabCtrl.Tab>
        </AstroTabCtrl>
      </div>
      

      
    </>
  );
}

export default App;
