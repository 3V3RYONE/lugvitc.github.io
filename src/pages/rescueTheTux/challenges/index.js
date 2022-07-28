import TerminalWindow from "../../../components/terminal/terminalWindow";
import Leaderboard1 from "./Leaderboard/Leaderboard1";

export default function Challenges() {
  return (
    <>
      <h1> Challenges </h1>
      <TerminalWindow title="Challenges">
        <Leaderboard1 />
      </TerminalWindow>
    </>
  );
}