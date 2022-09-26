import { useState } from "react";
import styled from "styled-components";

const Title = styled.div``;

const getUser = () => {
  const url = "https://api.github.com/users/yukiHaga";
  const data = fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
  return data;
};

const Profile = () => {
  const initialName = "hoge";
  const [name] = useState(initialName);
  console.log("start");
  const user = getUser();
  console.log(user);
  console.log("end");
  console.log("アイウエオ");
  return (
    <>
      <Title>お名前</Title>
      <div>{name}</div>
    </>
  );
};

export default Profile;
