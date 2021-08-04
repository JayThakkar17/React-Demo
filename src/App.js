import './App.css';
import Login from './Components/Login/Login';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Login />
      </div>
    </Provider>
  );
}

export default App;
