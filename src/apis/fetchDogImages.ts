import axios from "axios";
import { randomSpecificDogImageUrl, randomDogImageUrl } from "../constants/url";

type Response = {
  data: {
    message: string[];
    status: string;
  };
};

export default async function fetchDogImages(name?: string): Promise<string[]> {
  const url = name ? randomSpecificDogImageUrl(name) : randomDogImageUrl;
  const response: Response = await axios.get(url);
  return response.data.message;
}
