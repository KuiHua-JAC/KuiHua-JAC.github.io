/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Container from "./container";

export default function AboutMe() {
  return (
    <Container className="border border-primary flex gap-x-4 shadow-lg w-2/3">
      <div className="w-1/2 flex flex-col justify-center items-center text-4xl font-bold gap-y-4">
        <Image
          src="/profilepic.jpeg"
          alt="Profile picture of website author"
          width={724}
          height={1086}
          className="rounded-full h-48 w-48 object-cover object-top border-4 border-primary shadow-lg"
        />
      </div>
      <ul className="w-1/2 list-disc flex flex-col justify-center items-center gap-y-4">
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
