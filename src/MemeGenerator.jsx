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
    <div
      className="meme-generator"
      style={{
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '600px',
      }}
    >
      <h1>Meme Generator</h1>

      <div
        className="input"
        style={{
          margin: '15px 0',
        }}
      >
        <label htmlFor="top-text">Top text</label>
        <input
          id="top-text"
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
          placeholder="Enter top text"
        />
      </div>

      <div
        className="input"
        style={{
          margin: '15px 0',
        }}
      >
        <label htmlFor="bottom-text">Top text</label>
        <input
          id="bottom-text"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
          placeholder="Enter bottom text"
        />
      </div>

      <div
        className="meme-preview"
        style={{
          margin: '30px 0',
          padding: '15px',
          backgroundColor: '#ffffff',
          border: '2px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
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
