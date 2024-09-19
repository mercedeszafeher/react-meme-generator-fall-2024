# React Meme Generator

This project is a React web application that allows users to generate and download custom memes using the memegen.link API.

## Features

- Top and Bottom Text Inputs: Users can enter custom text for the top and bottom of the meme.
  - Both inputs are empty when the page loads.
  - Each input is labeled as "Top text" and "Bottom text" respectively.
- Meme Preview: A real-time preview of the meme updates as the user types.
  - The meme image element is identified by data-test-id="meme-image.
  - The page loads with a default meme template.
- Template Selector: Users can change the meme background (template).
  - The template selector is labeled "Meme template."
    Example: Selecting the label, typing "doge," and pressing Enter will load the Doge meme template.
- Download Meme: Users can download the generated meme by clicking the "Download" button.

## Usage

1. Enter text for the top and bottom fields to customize your meme.
2. Select a meme template by typing the template name (e.g., "doge") and pressing Enter.
3. Preview your meme as it updates live on the screen.
4. Download the meme by clicking the "Download" button.
