import { createContext, useReducer, ReactNode, Dispatch } from "react";

import {
  UserState,
  initialUserState,
  userReducer,
  UserAction,
} from "../reducers/userReducer";

type Value = {
  state: UserState;
  dispatch: Dispatch<UserAction>;
};

export const Context = createContext<Value | null>(null);

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const value = {
    state,
    dispatch,
  };

  return <Context.Provider {...{ value }}>{children}</Context.Provider>;
};
