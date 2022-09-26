import { RESPONSE_STATE, REQUEST_STATE } from "./../constants/index";
export type UserState = {
  responseState: keyof typeof RESPONSE_STATE;
  errors: string;
  user: {
    name: string;
    age: number;
    avatar_url: string;
  };
};

export const initialUserState: UserState = {
  responseState: "INITIAL",
  errors: "",
  user: {
    name: "",
    age: 0,
    avatar_url: "",
  },
};

export type UserAction = {
  type: keyof typeof REQUEST_STATE;
  payload: UserState;
};

type Reducer = (state: UserState, action: UserAction) => UserState;

export const userReducer: Reducer = (state, action) => {
  switch (action.type) {
    case REQUEST_STATE.REQUEST:
      return {
        ...state,
        responseState: RESPONSE_STATE.LOADING,
      };
    case REQUEST_STATE.REQUEST_SUCCESS:
      return {
        ...state,
        user: {
          ...action.payload.user,
        },
        responseState: RESPONSE_STATE.OK,
      };
    case REQUEST_STATE.REQUEST_FAILURE:
      return {
        ...state,
        errors: action?.payload?.errors,
        responseState: RESPONSE_STATE.FAILURE,
      };
    default:
      throw new Error();
  }
};
