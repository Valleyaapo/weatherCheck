const ADD_CITY = 'ADD_CITY';
const REMOVE_CITY = 'REMOVE_CITY';
const SHOW_CITY = 'SHOW_CITY';

const initialState = {
    cities: JSON.parse(localStorage.getItem("citylist")),
    city: {}
};


export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.city]
            }
        case REMOVE_CITY:
            return {
                ...state,
                cities: action.payload,
            };
        case SHOW_CITY:
            return {
                ...state,
                city: action.city
            }
        default:
            return state        
    }
}

export function addCity(city) {
    return {
        type: ADD_CITY,
        city
    }
}
export function showCity(city) {
    return {
        type: SHOW_CITY,
        city
    }
}
export function cityRemoved(cities) {
    return {
      type: REMOVE_CITY,
      payload: cities
    };
  }