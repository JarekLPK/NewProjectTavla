
import { addDoc, collection } from "@firebase/firestore";
import { firestore} from "./firebase_config/firebase.js";
import Board from "./board/index.jsx";

function App() {




  return (
    <>
      <Board/>

    </>
  )
}

export default App
