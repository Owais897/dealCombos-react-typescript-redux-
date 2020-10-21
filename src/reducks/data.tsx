import { getCombos } from "../utils/dummyData";

// action types
const DATA_RECEIVED = "DATA_RECEIVED";
const ERROR_OCCURED = "ERROR_OCCURED";
const API_CALLED = "API_CALLED";
const SAVE_SELECTED = "SAVE_SELECTED";

//  effect/thunk
export const get_initial_data = () => async (
  dispatch: (arg0: { type: string; payload?: any }) => void
) => {
  dispatch({
    type: API_CALLED,
  });

  try {
    let combos = await getCombos();

    dispatch({
      type: DATA_RECEIVED,
      payload: {
        data: combos,
      },
    });
  } catch (error) {
    dispatch({
      type: ERROR_OCCURED,
      payload: error,
    });
  }
};

export const save_seleted_item = (payload: any) => {
  return {
    type: SAVE_SELECTED,
    payload,
  };
};

export const reset = (payload: any) => {
  return {
    type: SAVE_SELECTED,
    payload,
  };
};

const defaultState = {
  loading: false,
  Drinks: "",
  Chocolates: "",
  chips: "",
  data: null,
};
function dataReducer(
  state = defaultState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case API_CALLED:
      return { ...state, loading: true };
    case ERROR_OCCURED:
      return { ...state, loading: false, error: action.payload };
    case DATA_RECEIVED:
      return { ...state, loading: false, ...action.payload };
    case SAVE_SELECTED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default dataReducer;

// const delay = (time) => new Promise((res) => setTimeout(res, time));
