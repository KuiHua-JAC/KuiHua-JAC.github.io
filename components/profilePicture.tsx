import Image from "next/image";
export default function ProfilePicture() {
  return (
    <Image
      src="/profilepic.jpeg"
      alt="Profile picture of website author"
      width={724}
      height={1086}
      className="rounded-full h-48 w-48 object-cover object-top border-4 border-primary shadow-lg"
    />
  );
}
