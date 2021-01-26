import {useState} from 'react';
import "./styles.css";
import HappyBirthday from './HappyBirthday';

export default function App() {
  const [show, setShow] = useState(false);

  function startTheParty() {
    setShow(true);
  }
  return (
    <div className="App">
      {!show && (
        <button className="startPartyButton" onClick={startTheParty}>
          Start the Party!
        </button>
      )}
      {show && <HappyBirthday />}
    </div>
  );
}
