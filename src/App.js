
import './App.less';
import Main from './Pages/Main';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './store';

function App() {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
