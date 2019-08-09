import getDate from './getDate.js';

function setDate() {
  const div = window.document.getElementsByTagName('div');

  div[0].outerText = getDate() + 'wedss';
}

setDate();