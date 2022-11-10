const rotationInput = document.querySelector("#rotation");
const rpmInput = document.querySelector("#rpm");
const heightInput = document.querySelector("#height");
const radiusInput = document.querySelector("#radius");
const xOutput = document.querySelector("#final-pos");

let r = 0;
let h = 0;
let rpm = 0;
let theta = 0;

function run() {
  rpm = rpmInput.value;
  theta = rotationInput.value * (Math.PI / 180);
  h = heightInput.value;
  r = radiusInput.value;

  xOutput.textContent = "Final Pos: " + (xNot() + tanXVelocity() * time());
}

// Good
function xNot() {
  return launchX() * -1;
}

// Good
function time() {
  return (
    (tanYVelocity() +
      Math.sqrt(Math.pow(tanYVelocity(), 2) + 2 * 9.81 * totalHeight())) /
    9.81
  );
}

// Good
function launchX() {
  return r * Math.cos(theta);
}

// Good
function launchY() {
  return r * Math.sin(theta);
}

// Good
function angVelocity() {
  return rpm / 30;
}

// Good
function tanXVelocity() {
  return angVelocity() * launchX();
}

// Good
function tanYVelocity() {
  return angVelocity() * launchY();
}

// Good
function totalHeight() {
  return parseFloat(h) + launchY();
}
