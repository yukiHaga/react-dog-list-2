import { Main } from "../ui-groups/dog/styledDog";
import Header from "../ui-groups/layout/Header";

import { UseDog } from "../../hooks/useDog";
import FormSection from "../ui-groups/dog/FormSection";
import ImagesSection from "../ui-groups/dog/ImagesSection";

const DogTemplate = ({
  dogState,
  handleSubmit,
  onSubmit,
  register,
  errors,
}: UseDog): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <FormSection
          {...{
            handleSubmit,
            onSubmit,
            register,
            errors,
          }}
        />
        <ImagesSection {...{ dogState }} />
      </Main>
    </>
  );
};

export default DogTemplate;
