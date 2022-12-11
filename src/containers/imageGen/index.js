import React, { useEffect, useState, useRef } from 'react';
import Input from './input/input';
import openAIService from '../../services/openAI.service';
import './imageGen.css';

function ImageGen({ screenWidth }) {

  const [imgUrl, setImgUrl] = useState(require('../../assets/btcToTheMoon.png'));
  
  const [textareaRows, setTextareaRows] = useState("12");
  const textRef = useRef(null);

  const submitPrompt = async (e) => {
    e.preventDefault();
    const text = textRef.current.value;
    const url = await openAIService().generateImage({ prompt: text });
    setImgUrl(url);
  }

  useEffect(() => {
    if(screenWidth < 600) {
      setTextareaRows("6");
    } else {
      setTextareaRows("12");
    }
  }, [screenWidth]);

  return (
    <div className="image-gen-outer-cont">
      <div className="img-type-title">
        <span>Celine</span>
        <img src={require('../../assets/celine1.png')}></img>
        <span className="ai-type-desc">Image Generation AI</span>
      </div>
      <div className="image-gen-cont">
        <div className="image-gen-text-cont">
          <b>Prompt</b>
          <div className="prompt-help-txt">Write a description of the image you wish for AI to generate.</div>
          <textarea ref={textRef} rows={textareaRows} id="image-gen-text" name="image-gen-text">
          </textarea>
          <Input submitPrompt={submitPrompt} />
        </div>
        <div className="image-gen-img-cont">
          <img src={imgUrl}></img>
        </div>
      </div>
    </div>
  );
}

export default ImageGen;