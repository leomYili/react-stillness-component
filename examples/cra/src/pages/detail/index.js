import React, { useReducer } from 'react';

const initialState = {
  loading: false,
  count: 0,
};

const reducer = (state, action) => {

  console.log(action);
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + 1, loading: false };
    }
    case 'decrement': {
      return { ...state, count: state.count - 1, loading: false };
    }
    case 'loading': {
      return { ...state, loading: true };
    }
    default: {
      return state;
    }
  }
};

const delay = (time = 1500) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

function PokemonInfo() {
  const [{ count, loading }, dispatch] = useReducer(reducer, initialState);
  const onHandleIncrement = () => {
    dispatch({ type: 'increment' });
    dispatch({ type: 'increment' });
    dispatch({ type: 'increment' });
  };
  const onHandleDecrement = () => {
    dispatch({ type: 'loading' });
    delay(500);
    dispatch({ type: 'decrement' });
  };
  return (
    <div>
      <p>Count {loading ? 'loading..' : count}</p>
      <button type="button" onClick={onHandleIncrement}>
        +
      </button>
      <button type="button" onClick={onHandleDecrement}>
        -
      </button>
    </div>
  );
}

export default PokemonInfo;