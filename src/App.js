import React from 'react';
import EdgeDrawer from './components/navbar/navbar'
import ChatShell from './containers/shell/ChatShell';

const App = () => {
  return (
    <div>
      <EdgeDrawer/>
      <ChatShell />
    </div> 
  );
}

export default App;
