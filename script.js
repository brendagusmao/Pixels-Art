// REFERÊNCIAS
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
// https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://medium.datadriveninvestor.com/how-to-select-all-div-elements-on-a-page-using-javascript-9b2cd16af740

// REQUISITO 7,8
let pixels = document.querySelectorAll('.pixel');
let colorPixels = document.querySelectorAll('.color');

for (const color of colorPixels) {
  color.addEventListener('click', function (event) {
    for (let color of colorPixels) {
      color.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function pixelPaint() {
  for (const pixel of pixels) {
    pixel.addEventListener('click', function (event) {
      const selectedColor = getComputedStyle(
        document.querySelector('.selected')
      ).backgroundColor;
      event.target.style.backgroundColor = selectedColor;
    });
  }
}
pixelPaint();

// REQUISITO 9
const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', function () {
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});
// REQUISITO 10
let newTable = document.querySelector('table');
const sizeButton = document.querySelector('#generate-board');
function createTable() {
  let size = parseFloat(document.querySelector('#board-size').value);
  console.log(size);
  if ((size === '' && size < 0) || isNaN(size)) {
    return 'Board inválido!';
  } else if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }
  // CRIAR TABLE
  newTable.removeChild(newTable.childNodes[1]);
  const table = document.createElement('table');
  newTable.appendChild(table);
  for (let index = 0; index < size; index += 1) {
    let child = document.createElement('tr');
    table.appendChild(child);
    for (let i = 0; i < size; i += 1) {
      let childTd = document.createElement('td');
      childTd.className = 'pixel';
      child.appendChild(childTd);
    }
  }
  pixels = document.querySelectorAll('.pixel');
  pixelPaint();
}
sizeButton.addEventListener('click', createTable);
// REQUISITO 12
// https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript
// https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}
