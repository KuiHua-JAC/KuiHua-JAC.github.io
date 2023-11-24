import Typewriter from "./animatedText";
import Container from "./container";
import ProfilePicture from "./profilePicture";

export default function PersonalPresentation() {
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <ProfilePicture className={"w-72 h-72"} />
      </div>
      <div className="text-center">
        <Typewriter
          text="Welcome to my personal website, my presentation is coming soon..."
          delay={100}
        />
      </div>
    </Container>
  );
}
