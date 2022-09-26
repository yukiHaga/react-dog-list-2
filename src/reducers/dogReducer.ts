import { RESPONSE_STATE, REQUEST_STATE } from "./../constants/index";

export type DogState = {
  responseState: keyof typeof RESPONSE_STATE;
  errors?: string;
  dogImages?: string[];
};

export const initialDogState: DogState = {
  responseState: "INITIAL",
  errors: "",
  dogImages: [],
};

export type DogAction = {
  type: keyof typeof REQUEST_STATE;
  payload?: DogState["dogImages"];
  errors?: string;
};

type DogReducer = (state: DogState, action: DogAction) => DogState;

export const dogReducer: DogReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_STATE.REQUEST:
      return {
        ...state,
        responseState: RESPONSE_STATE.LOADING,
      };
    case REQUEST_STATE.REQUEST_SUCCESS:
      return {
        ...state,
        responseState: RESPONSE_STATE.OK,
        dogImages: action.payload,
      };
    case REQUEST_STATE.REQUEST_FAILURE:
      return {
        ...state,
        responseState: RESPONSE_STATE.FAILURE,
        errors: action.errors,
      };
    default:
      throw new Error();
  }
};
