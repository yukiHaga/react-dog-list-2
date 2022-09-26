import {
  ImagesSection as StyledImagesSection,
  GridContainer,
  GridItem,
  DogImage,
} from "../../ui-groups/dog/styledDog";

import { DogState } from "../../../reducers/dogReducer";

const ImagesSection = ({ dogState }: { dogState: DogState }) => {
  return (
    <StyledImagesSection>
      {dogState.responseState === "FAILURE" && (
        <div>画像が見つかりませんでした</div>
      )}
      <GridContainer>
        {dogState.responseState === "OK" &&
          dogState.dogImages?.map((dogImageUrl, i) => {
            return (
              <GridItem key={i}>
                <DogImage src={dogImageUrl} />
              </GridItem>
            );
          })}
      </GridContainer>
    </StyledImagesSection>
  );
};

export default ImagesSection;
