import { Header } from "./components/Header";
import { KnowledgeApplication } from "./components/KnowledgeApplication";
import { LastXP } from "./components/LastXP";
import { PersonalMotivation } from "./components/PersonalMotivation";
import { Studies } from "./components/Studies";

export function App() {
  return (
    <div className="App flex flex-col items-center justify-center gap-4 p-4">
      <Header className="justify-center" />
      <div className="flex gap-3 grid-cols-2">
        <div className="left flex flex-col gap-3 text-xs">
          <LastXP /> 
          <KnowledgeApplication /> 
          <PersonalMotivation />
        </div>
          <Studies/>
      </div>
    </div>
  );
}
