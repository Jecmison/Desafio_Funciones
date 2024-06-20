const ele = document.getElementById('ele1');
ele.style.backgroundColor = 'green'

const pintar = ({ target }, color) => {
  target.style.backgroundColor = color;
}

ele.addEventListener("click", (e) => {
  pintar(e, 'yellow')
});

