/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Container from "./container";

export default function AboutMe() {
  return (
    <Container className="border border-primary flex shadow-lg px-4 w-2/3 justify-center">
      <ul className="list-disc flex flex-col justify-center items-center">
        <li className="w-full">
          Electric car enthusiast. Have a question? Let me charge up and get to
          you!🚗
        </li>

        <li className="w-full">
          Amateur snowboarder and victim of the slopes, but still in one piece!
          🏂
        </li>

        <li className="w-full">
          If ever I'm not breaking my brain coding, I'm probably abusing it and
          playing chess. ♟️
        </li>

        <li className="w-full">
          Good day or bad day, come to me and I'll make you laugh. 😄
        </li>
      </ul>
    </Container>
  );
}
