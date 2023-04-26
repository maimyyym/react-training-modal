import React from 'react';
import Modal from './elements/Modal';
import useModal from '../hooks/useModal';
import '../styles/style.css';

function App() {
  const { isModalOpen, onOpen, onClose } = useModal();

  return (
    <div className="App">
      <div className="App-box">
        <button type="button" className="button OpenButton" onClick={onOpen}>Open</button>
        <p>Modal Test Page!!!</p>
        {/* isModalOpenがtrueだったらモーダルを表示する。ModalコンポーネントのonCloseにhookのonCloseを渡す。 */}
        {isModalOpen && <Modal onClose={onClose} />}
        </div>
    </div>
  );
}

export default App;
