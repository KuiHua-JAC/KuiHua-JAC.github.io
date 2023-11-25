import Container from "./container";

export default function SingleRepo({
  url,
  description,
  id,
  full_name,
}: SingleRepoProps) {
  return (
    <Container className="bg-secondary flex justify-center">
      <p>{full_name}</p>
    </Container>
  );
}

type SingleRepoProps = {
  url: string;
  description: string;
  id: number;
  full_name: string;
};
