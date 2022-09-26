export const DOG_URL = "https://dog.ceo/api";

const IMAGE_COUNT = 9;

export const randomSpecificDogImageUrl = (name: string) =>
  `${DOG_URL}/breed/${name}/images/random/${IMAGE_COUNT}`;

export const randomDogImageUrl = `${DOG_URL}/breeds/image/random/${IMAGE_COUNT}`;
