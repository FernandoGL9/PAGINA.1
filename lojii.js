const body = document.body

const colors = {
    green: { r: 0, g: 255, b: 0 },
    blue: { r: 0, g: 0, b: 255 },
    purple: {r: 49, g: 0, b: 70},
    yelow:  {r: 100, g: 100, b: 0},
    ira: {r: 180, g: 0, b: 0},
    nor: {r: 132, g: 130, b: 130, a: 0.4} 
};

function addColor(color) {
  // Obtener el color actual del div
    let current = window.getComputedStyle(body).backgroundColor;
    let rgb = current.match(/\d+/g).map(Number);

  // Sumar los valores RGB, pero limitar a 255
    let r = Math.min(rgb[0] + color.r, 255);
    let g = Math.min(rgb[1] + color.g, 255);
    let b = Math.min(rgb[2] + color.b, 255);

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
function rein(colo){
    body.style.backgroundColor = `rgba(${colo.r}, ${colo.g}, ${colo.b},${colo.a})`;
}

document.getElementById('asco').addEventListener('click', () => addColor(colors.green));
document.getElementById('tristeza').addEventListener('click', () => addColor(colors.blue));
document.getElementById('miedo').addEventListener('click', () => addColor(colors.purple));
document.getElementById('alegria').addEventListener('click', () => addColor(colors.yelow));
document.getElementById('ira').addEventListener('click', () => addColor(colors.ira));
document.getElementById('reset').addEventListener('click', () => rein(colors.nor));