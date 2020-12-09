import Carousel from './components/carousel'
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Carousel />
      </div>
    </Provider>
  );
}

export default App;
