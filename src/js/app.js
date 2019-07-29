import getDate from './getDate.js';

function setDate() {
  const div = window.document.getElementsByTagName('div');

  div.innerHTML = getDate();
}

setDate();