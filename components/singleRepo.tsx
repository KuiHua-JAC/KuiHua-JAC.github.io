import Image from "next/image";
import Container from "./container";

export default function SingleRepo({
  url,
  description,
  id,
  full_name,
}: SingleRepoProps) {
  return (
    <Container className="bg-secondary flex my-4 border-2 border-primary justify-start gap-x-4 items-center">
      <div className="w-1/8">
        <Image
          src="/GitHub.png"
          alt="Github logo"
          width={512}
          height={512}
          className="w-24"
        />
      </div>
      <div className="gap-y-2 flex flex-col w-1/2">
        <p className="text-primary font-semibold">{full_name}</p>
        <p className="text-tertiary">{description}</p>
      </div>
      <div className="flex justify-end w-full">
        <a
          className="text-primary max-w-[10rem] bg-secondary hover:bg-primary border-2 hover:text-secondary border-primary font-medium rounded-2xl text-sm px-4 py-2 text-center"
          href={url}
        >
          Visit repository
        </a>
      </div>
    </Container>
  );
}

type SingleRepoProps = {
  url: string;
  description: string;
  id: number;
  full_name: string;
};
