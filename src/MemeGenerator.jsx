import React, { useState } from 'react';

function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('doge'); // default meme template is doge

  const generateMemeUrl = () => {
    const baseUrl = 'https:/memegen.link';

    // Encoding the top and bottom text so they`re URL-safe
    const top = encodeURIComponent(topText);
    const bottom = encodeURIComponent(bottomText);

    // Constructing the full URL
    const memeUrl = `${baseUrl}/${template}/${top}/${bottom}.jpg`;

    return memeUrl;
  };

  return (
    <div className="meme-generator">
      <h1>Meme Generator</h1>

      <div className="input">
        <label htmlFor="top-text">Top text</label>
        <input
          id="top-text"
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
          placeholder="Enter top text"
        />
      </div>

      <div className="input">
        <label htmlFor="bottom-text">Top text</label>
        <input
          id="bottom-text"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
          placeholder="Enter bottom text"
        />
      </div>

      <div className="meme-preview">
        <h2>Meme preview</h2>
        <img
          src={generateMemeUrl()}
          alt="Meme Preview"
          data-test-id="meme-image"
          style={{ maxWidth: '400px', height: 'auto' }}
        />
      </div>
    </div>
  );
}

export default MemeGenerator;
