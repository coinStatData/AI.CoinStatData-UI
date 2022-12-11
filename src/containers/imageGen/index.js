import React, { useEffect, useState, useRef } from 'react';
import Input from './input/input';
import openAIService from '../../services/openAI.service';
import ErrorSpinner from '../../components/spinner/error';
import LoadingSpinner from '../../components/spinner/loading';
import './imageGen.css';

function ImageGen({ screenWidth }) {

  const [imgUrl, setImgUrl] = useState(require('../../assets/btcToTheMoon.png'));
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [textareaRows, setTextareaRows] = useState("12");
  const textRef = useRef(null);
  const [numAttempts, setNumAttempts] = useState(Number(sessionStorage.getItem('numAttempts') || 0));

  const submitPrompt = async (e) => {
    e.preventDefault();
    if(numAttempts > 3) {
      alert("Sorry, your daily limit was exceeded.");
      return;
    }
    try {
      setIsLoading(true);
      const text = textRef.current.value;
      const url = await openAIService().generateImage({ prompt: text });
      setNumAttempts(numAttempts + 1);
      sessionStorage.setItem('numAttempts', numAttempts + 1);
      setImgUrl(url);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
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
          {isLoading || isError ? (
            <div className="img-gen-spinner-cont">
              {isError ? (
                <ErrorSpinner />
              ) : (
                <LoadingSpinner />
              )
              }
            </div>
          ) : (
            <img src={imgUrl}></img>
          )
          }

        </div>
      </div>
    </div>
  );
}

export default ImageGen;