import AppHead from "../AppHead/AppHead";
import HomeMain from "../HomeMain/HomeMain";
import MobileNav from "../MobileNav/MobileNav";
import AddPersonUI from "../AddPersonUI/AddPersonUI";
import {useState} from "react";

function App() {
  const [showAddPersonUI, setShowAddPersonUI] = useState(false);
  return (
    <>
      <AppHead />
      <HomeMain />
      <MobileNav state = {showAddPersonUI} callback={setShowAddPersonUI} />
      {showAddPersonUI && <AddPersonUI callback = {()=> setShowAddPersonUI(!showAddPersonUI)} />}
    </>
  );
}


export default App;
