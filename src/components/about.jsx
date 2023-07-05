import styled from "styled-components";


export default function About() {
  return (
    <Container id="about">
      <RowContainer>
        <MainImg src={require("../pics/almooos3.png")} />
        <TextContent className="a">
          <h1>About</h1>
          <p>
            Before entering the tech industry, I worked at a multinational
            company. However, I soon realized that I wanted to pursue a more
            impactful and creative path. 
            <br /><br />
            I love solving problems and finding
            practical solutions. It's fulfilling to see my work create value and
            benefit others. 
            <br /><br />
            When I'm not coding, you'll find me outdoors,
            immersing myself in nature. I have a deep passion for the outdoors
            and find inspiration in its beauty. 
            <br /><br />
            I'm excited to apply my skills
            and creativity in the tech industry to make a positive impact.
          </p>
        </TextContent>
      </RowContainer>
      <LastRowContainer>
        <TextContent>
          <h1 className="purple">Tech-stack</h1>
          <IconWrapper>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
              </svg>
              HTML
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
              </svg>
              CSS
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z" />
              </svg>
              Sass
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
              </svg>
              JS
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
              </svg>
              React
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z" />
              </svg>
              Node.js
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
              </svg>
              Express.js
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              GitHub
            </div>
            <div>
              <svg
                viewBox="0 0 600 476.30000000000007"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" />
                <path
                  d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                  fill=""
                />
                <path d="M225 303.1v86.6l150 86.6v-86.6z" fill="" />
                <path d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z" />
              </svg>
              MUI
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z" />
              </svg>
              Figma
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" />
              </svg>
              Bootstrap
            </div>
            <div>
              <svg
                viewBox="0 0 174.38 174.38"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
              >
                <circle cx="87.19" cy="87.19" fill="#fff" r="87.19" />
                <path
                  d="M89.22 88.66c2.55-2.24 4.62-4.35 7.35-5.5 1.6-.67 3.37-1.62 4.89-.15s.56 3.08.1 4.66c-.92 3.17-1.85 6.35-2.69 9.54-.25.93-.67 2 .28 2.83s2.14.28 3.08-.2c3.48-1.78 6.31-3.89 5.87-8.57-.26-2.8 0-5.78 2.59-7.78 1-.79 2.21-1.71 3.48-.83s.36 2 0 3a25.79 25.79 0 0 0-1 11.7c.13.88 0 2.15.81 2.47 1.11.42 1.61-1 2.32-1.58s1.19-1.4 1.81-2.08c1.64-1.79 2.54-3.22.36-5.67-2.53-2.83-1.77-8.37.72-11a5.11 5.11 0 0 1 5.77-1.5c2.17.79 2.88 2.66 2.94 4.85.06 2.46-1 4.62-1.83 7 2.42.61 3.92-.75 5.28-2.22 3.28-3.56 7.08-5.82 12.12-5.29 3.65.38 5.74 2.35 5.55 5.22a4 4 0 0 1-5.72 3.15c-1.14-.61-1-1.17 0-1.75a1.68 1.68 0 0 0 .93-2.06 2.5 2.5 0 0 0-2.23-1.71 5.62 5.62 0 0 0-3.94.88c-3.66 2.34-5.71 8.84-4 12.8 1 2.38 2.86 2.83 4.79 1.14a9.16 9.16 0 0 0 2.34-3.68 10 10 0 0 1 1.19-2.46c.91-1.21 2.17-2.28 3.75-1.63s.77 2.29.51 3.4c-.93 3.85-1.72 7.6 1.54 10.84a.84.84 0 0 1 0 1.24 1.3 1.3 0 0 1-1.52.22 9.11 9.11 0 0 1-5.2-4.66c-.33-.72-.47-1.77-1.64-.74a6 6 0 0 1-7.84.65c-2.84-1.82-3.86-4.55-3.6-7.82.05-.64.13-1.26.21-2-3.27.27-5.93 1-7.8 4a18 18 0 0 1-6.43 5.94c-3.41 2-4.74 1.38-5.66-2.37-.13-.52-.24-1-.44-2a26.24 26.24 0 0 1-7.5 4.71c-5.17 1.84-8.17-.53-7.41-6a39.08 39.08 0 0 1 2.31-8.2c.24-.65.82-1.45 0-2-.6-.38-1.23.26-1.7.66-3.19 2.71-6 5.71-6.92 10a16.27 16.27 0 0 1-1.08 3.68 3.79 3.79 0 0 1-4 2.4c-1.8-.32-.64-2.16-1.14-3.29-1.92 1-3.76 2-5.66 2.87-1.37.63-3.16 1.13-4.16-.05-1.67-2-2.8-1.31-4.56-.19-2.57 1.64-5.52.94-7.85-1.77-1.18-1.37-1.79-1.28-2.93-.06a26 26 0 0 1-8.08 5.65C35.69 113 24 106.66 23.34 93.56 22.56 78.77 28.85 67 41.21 58.79a13.15 13.15 0 0 1 11.09-1.85A9.82 9.82 0 0 1 59.62 67a10.25 10.25 0 0 1-7.79 9.27c-.71.16-1.63.44-2-.23-.56-.9.33-1.51.94-2 3.34-2.82 3.91-6.49 3.28-10.52-.6-3.76-3.28-5.28-6.85-3.91a16.85 16.85 0 0 0-6.58 4.89A41.75 41.75 0 0 0 30.07 88 18.87 18.87 0 0 0 32 99c2.54 4.85 6.85 7 12.17 5.74a25 25 0 0 0 11.21-6.18 4.77 4.77 0 0 0 1.32-3.46c.73-7.6 7.3-13.3 14.64-12.74a7.12 7.12 0 0 1 4.73 2 4 4 0 0 1 .93 4.53c-.71 1.72-2.29 2.28-4.08 2.19a2.28 2.28 0 0 1-2-.81c-.66-1 .6-1.07 1-1.57 1.12-1.4.49-3.07-1.43-3.46a5.49 5.49 0 0 0-5.28 1.68 12.27 12.27 0 0 0-3.36 10.63c.2 1.48.83 2.93 2.46 3.37S67 100.14 68 99a8.63 8.63 0 0 0 1.57-3.2 5.08 5.08 0 0 1 1.69-2.8c1-.77 2.1-1.4 3.28-.71s.46 1.85.46 2.81c0 1.76-1.9 3.81.45 5.16 1.26.72 6.34-3.11 6.74-4.91.63-2.87 1.14-5.77 1.71-8.65a4.9 4.9 0 0 1 1.1-2.77 3.62 3.62 0 0 1 4-1c1.51.63.76 2 .61 3.16-.08.69-.2 1.39-.39 2.57zM123 82c-.26-.7-.68-1.38-1.54-1.29s-1.11.88-1.18 1.62a7 7 0 0 0 2.29 5.91A8.37 8.37 0 0 0 123 82z"
                  fill="#000"
                />
              </svg>
              Canva
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path
                  d="M59.336 31.518c0-3.854-2.65-7.097-6.207-8.023L61.097 0H21.61l7.986 23.57c-3.446 1-5.985 4.188-5.985 7.968 0 2.78 1.4 5.244 3.502 6.763-.834 1.186-1.797 2.28-2.89 3.317-2.057 1.927-4.336 3.41-6.8 4.39-2.224-1.5-3.187-4.15-2.316-6.522 3.39-1.038 5.855-4.206 5.855-7.93 0-4.577-3.724-8.283-8.283-8.283-4.577 0-8.3 3.724-8.3 8.3a8.24 8.24 0 0 0 2.409 5.818l-.39.797c-1.24 2.557-2.65 5.448-3.187 8.7-1.075 6.485.686 11.692 4.93 14.638 2.4 1.65 5.02 2.483 7.856 2.483 4.873 0 9.82-2.446 14.6-4.818 3.41-1.686 6.93-3.446 10.395-4.3 1.28-.315 2.613-.5 4.02-.704 2.854-.408 5.8-.834 8.45-2.372 3.094-1.797 5.207-4.8 5.818-8.246.463-2.65 0-5.318-1.186-7.653.797-1.28 1.24-2.78 1.24-4.39zm-3.613 0c0 2.576-2.094 4.67-4.67 4.67s-4.67-2.094-4.67-4.67c0-.834.222-1.63.61-2.316.148-.26.334-.52.52-.74a4.08 4.08 0 0 1 .649-.611l.02-.02c.148-.11.315-.222.482-.334 0 0 .02 0 .02-.02.074-.037.148-.093.222-.13.02 0 .037-.02.056-.02.074-.037.167-.074.26-.11s.185-.074.26-.11c.02 0 .037-.02.056-.02.074-.02.148-.056.222-.074.02 0 .056-.02.074-.02l.26-.056h.02l.278-.056c.02 0 .056 0 .074-.02.074 0 .148-.02.222-.02h.093c.093 0 .185-.02.296-.02h.24a.76.76 0 0 1 .204.019h.037c.148.02.296.037.445.074a4.71 4.71 0 0 1 3.724 4.595zM26.78 3.706h29.147l-6.69 19.734c-.278.056-.556.148-.834.24l-7.04-14.36-7.06 14.268c-.278-.093-.574-.148-.87-.204zm13.248 26.2c-.352-1.742-1.24-3.298-2.5-4.447l3.836-7.745 3.873 7.912a8.37 8.37 0 0 0-2.316 4.28zm-9.283-2.928l.26-.056h.056c.074-.02.148-.02.222-.037h.074c.074 0 .13-.02.204-.02h.723c.074 0 .13.02.185.02.037 0 .056 0 .093.02.074.02.13.02.204.037.02 0 .037 0 .074.02l.26.056c.093.02.167.037.24.074.02 0 .037.02.074.02.056.02.13.037.185.074.02 0 .037.02.056.02.074.037.148.056.222.093h.02a1 1 0 0 1 .241.13c.093.037.167.093.24.13.02 0 .02.02.037.02.074.037.13.093.204.13l.02.02c.222.167.426.352.63.537l.02.02c.185.204.37.426.52.667a4.66 4.66 0 0 1 .76 2.557c0 2.576-2.094 4.67-4.67 4.67s-4.67-2.094-4.67-4.67c-.02-2.168 1.482-4.002 3.52-4.52zm-18.233-.13c2.576 0 4.67 2.094 4.67 4.67s-2.094 4.67-4.67 4.67-4.67-2.094-4.67-4.67 2.094-4.67 4.67-4.67zm43.1 16.065c-.408 2.372-1.87 4.447-4.02 5.688-2.02 1.167-4.503 1.538-7.115 1.91-1.427.204-2.928.426-4.373.778-3.854.945-7.56 2.798-11.155 4.577-4.595 2.28-8.93 4.428-12.952 4.428-2.094 0-3.965-.593-5.744-1.834-4.076-2.816-3.873-8.097-3.39-10.988.445-2.705 1.686-5.244 2.872-7.67.074-.148.13-.278.204-.426.408.148.834.26 1.28.334-.704 3.928 1.297 7.986 5.188 9.987l.704.37.76-.278c3.243-1.15 6.244-3.02 8.894-5.522a24.89 24.89 0 0 0 3.854-4.577c.426.074.852.093 1.28.093 3.854 0 7.097-2.65 8.023-6.207h3.113c.926 3.576 4.17 6.207 8.023 6.207a8.2 8.2 0 0 0 4.188-1.149c.482 1.4.63 2.835.37 4.28z"
                  fill=""
                />
              </svg>
              JEST
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                viewBox="0 0 32 32"
                width="64"
              >
                <path
                  d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
                  fill="#efeeeebf"
                />
                <path
                  d="M13.445 8.543l2.972 5.995-11.97 11.135z"
                  fill="#cfcfcfbf"
                />
                <path
                  d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
                  fill="#fff"
                />
                <path
                  d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"
                  fill="#efeeeebf"
                />
              </svg>
              Firebase
            </div>
          </IconWrapper>
        </TextContent>
        <MainImg src={require("../pics/almooos2.png")} />
      </LastRowContainer>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 100vh; /* Add spacing equal to the height of the fixed header */
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: calc(100vh - 10vh);

  @media (max-width: 768px) {
    height: auto;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  i {
    font-size: 2.5rem;
    margin-top: 10px;
  }

  div {
    width: 40px;

    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 0.8rem;
  }

  svg {
    width: 45px;
    height: 45px;
    fill: #fff;
  }

  @media (max-width: 1260px) {
    overflow: scroll;

    /* Hide the scrollbars */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    /* Chrome and Safari */
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    overflow: auto;
    height: auto;
  }
`;

const MainImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const RowContainer = styled.div`
  height: 50%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextContent = styled.div`
  width: 50%;
  height: 100%;
  background-color: #282828;
  color: white;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  overflow: scroll;

  /* Hide the scrollbars */

    /* Firefox */
    scrollbar-width: none;

    /* IE and Edge */
    -ms-overflow-style: none; 

    /* Chrome and Safari */
    ::-webkit-scrollbar {
      display: none;
    }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px;
    overflow: auto;
  }

  h1 {
    font-family: "Press Start 2P", cursive;
    color: #14db99;
    margin-top: 0px;
    text-shadow: 3px 3px 0 #8400ff;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
`;

// Add the following styles to swap the sequence on smaller screens
const LastRowContainer = styled(RowContainer)`
  .purple {
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
