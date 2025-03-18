import PuzzleChallenge from "../../components/puzzleChallenge/PuzzleChallenge";
import { EmailTitle } from "./Contact.styled";

export const Contact = () => {
  return (
    <>
      <h1>Contact me!</h1>
      <EmailTitle>The easiest way to contact me is through e-mail:</EmailTitle>
      <a href="mailto:">Simon.max.stancovich@gmail.com</a>
      <PuzzleChallenge rows={3} columns={3} />
    </>
  );
};
