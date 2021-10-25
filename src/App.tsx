import React from 'react';
import Icon from './components/Icon/Icon';
import TabBar from "./components/TabBar/TabBar";
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      <TabBar small items={[ { text: "Hello", content: <h1>Hello</h1>}, { text: "Hello2", content: <h1>Hello2</h1>}]} />
      <Table
        columns={[{text: 'ID', field: 'id'}, {text: 'Name', field: 'name'}, {text: 'Age', field: 'age'}]}
        rows={[{id: 1, name: <Icon icon={'folder'} text={'sdfsf'} title={'terst'}/>, age: 38}]}
      />
    </>
  );
}

export default App;
