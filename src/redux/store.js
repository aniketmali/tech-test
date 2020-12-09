import {createStore} from 'redux';
import carouselReducer from './carousel/carouselReducer'

const store = createStore(carouselReducer);

export default store;