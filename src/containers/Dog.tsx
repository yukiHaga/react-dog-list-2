import { initialDogState } from "../reducers/dogReducer";
import useDog from "../hooks/useDog";
import DogTemplate from "../components/templates/DogTemplate";

const Dog = () => {
  const { dogState, handleSubmit, onSubmit, register, errors } =
    useDog(initialDogState);

  return (
    <>
      <DogTemplate
        {...{ dogState, handleSubmit, onSubmit, register, errors }}
      />
    </>
  );
};

export default Dog;
