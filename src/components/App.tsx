import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
