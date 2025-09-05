// some numbers are missing because the gif was too big for the site, too lazy to rename all of them
const gifs = [
  'lainbanner.gif',
  'lainbanner2.gif',
  'lainbanner3.gif',
  'lainbanner4.gif',
  'lainbanner6.gif',
  'lainbanner8.gif',
  'lainbanner9.gif',
  'lainbanner10.gif',
  'lainbanner11.gif',
  'lainbanner12.gif',
  'lainbanner13.gif',
  'lainbanner15.gif',
  'lainbanner16.gif',
  'lainbanner17.gif',
  'lainbanner18.gif',
  'lainbanner19.gif',
  'lainbanner20.gif',
  'lainbanner24.gif',
  'lainbanner25.gif'
];

const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

const gifImg = document.querySelector('.random-gif');
gifImg.src = `/assets/${randomGif}`;
