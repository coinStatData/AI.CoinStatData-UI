import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import './styles.css';

const Input = ({ submitPrompt }) => (
  <form className="image-gen-input-cont">
    <button onClick={(e) => submitPrompt(e)}>
      Submit
    </button>
  </form>
)

export default Input;