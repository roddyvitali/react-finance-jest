// { desc: string, qty: number }
const initialState = [];
export const ACCTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

export const addAmount = (payload) => ({
  type: ACCTION_TYPE.ADD,
  payload,
});

export const removeAmount = (index) => ({
  type: ACCTION_TYPE.REMOVE,
  index,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACCTION_TYPE.ADD: {
      return [...state, action.payload];
    }
    case ACCTION_TYPE.REMOVE: {
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    }
    default: {
      return state;
    }
  }
}
