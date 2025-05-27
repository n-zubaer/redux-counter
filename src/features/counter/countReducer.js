// make a action for redux
const initialValue = {
  value: 0,
};

const increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};

const decrement = (data) => {
  return {
    type: "DECREMENT",
    payload: data,
  };
};

const reset = (data) => {
  return {
    type: "RESET",
    payload: data,
  };
};

// make a reducer function
const countReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        value: (state.value += action.payload),
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        value: (state.value -= action.payload),
      };
    }
    case "RESET": {
      return {
        ...state,
        value: (state.value = 0),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export { increment, decrement, reset };
export { countReducer };
