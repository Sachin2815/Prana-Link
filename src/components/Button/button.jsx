import React, { useState } from 'react';
import './button.css';
import { Modal } from '@mui/material';

const Buttons = ({ name, children }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="home-btn" onClick={() => setopen(true)}>
        {name}
      </div>
      <Modal
        open={open}
        onClose={() => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </>
  );
};

export default Buttons;
