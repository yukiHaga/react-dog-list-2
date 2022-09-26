import { useReducer, useEffect } from "react";
import { dogReducer, DogState } from "../reducers/dogReducer";
import fetchDogImages from "../apis/fetchDogImages";
import { REQUEST_STATE } from "../constants/index";
import {
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrorsImpl,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type IFormInputs = {
  name: string;
};

export type UseDog = {
  dogState: DogState;
  handleSubmit: UseFormHandleSubmit<IFormInputs>;
  onSubmit: ({ name }: IFormInputs) => void;
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrorsImpl<{
    name: string;
  }>;
};

export default function useDog(initialDogState: DogState): UseDog {
  const [dogState, dispatch] = useReducer(dogReducer, initialDogState);

  const onSubmit = ({ name }: IFormInputs) => {
    dispatch({ type: REQUEST_STATE.REQUEST });
    fetchDogImages(name)
      .then((data) => {
        dispatch({
          type: REQUEST_STATE.REQUEST_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({ type: REQUEST_STATE.REQUEST_FAILURE, errors: e.message });
      });
  };

  const schema = yup.object({
    name: yup
      .string()
      .required("犬の名前を英語で入力してください")
      .matches(/^[a-z]+$/, "半角英字かつ小文字で入力してください"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch({ type: REQUEST_STATE.REQUEST });
    fetchDogImages()
      .then((data) => {
        dispatch({
          type: REQUEST_STATE.REQUEST_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({ type: REQUEST_STATE.REQUEST_FAILURE, errors: e.message });
      });
  }, []);

  return {
    dogState,
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
}
