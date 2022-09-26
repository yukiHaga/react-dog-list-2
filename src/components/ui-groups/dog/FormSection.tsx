import {
  FormSection as StyledFormSection,
  Title,
  Form,
  TextInput,
  SubmitButton,
  ErrorMessage,
} from "../dog/styledDog";

import { UseDog } from "../../../hooks/useDog";

const FormSection = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
}: Omit<UseDog, "dogState">) => {
  return (
    <StyledFormSection>
      <Title>お気に入りの犬の画像を見つけよう</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextInput
            type="text"
            placeholder="犬の名前を英語で入力してください"
            {...register("name")}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <SubmitButton type="submit">検索</SubmitButton>
      </Form>
    </StyledFormSection>
  );
};

export default FormSection;
