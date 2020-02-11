import React from 'react';
import Layout from './components/layout/Layout';
import Conversation from './containers/Conversation';

function App(props) {
  return (
    <Layout>
      <Conversation services={props.services}/>
    </Layout>
  );
}

export default App;
