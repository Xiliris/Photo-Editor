let image = document.getElementById('image-edit');

function onFileSelected(e) {
  let selectedFile = e.target.files[0];
  let reader = new FileReader();

  image.title = selectedFile.name;

  reader.onload = function (event) {
    image.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);

  document.getElementById('btn').style = 'display: none';
  image.style = 'display: flex;';
  document.getElementById('sidebar').style = 'display: flex';
}

let filters = {
  blur: '0px',
  brightness: '100%',
  contrast: '100%',
  invert: '0%',
  grayscale: '0%',
  opacity: '100%',
  saturate: '100%',
  sepia: '0%',
};

function edit(e) {
  if (e.target.type == 'file') return;
  let name = e.target.name;
  let value = e.target.value;

  const {
    blur,
    brightness,
    contrast,
    invert,
    grayscale,
    opacity,
    saturate,
    sepia,
  } = filters;

  document.getElementById(name).innerText = `${value}%`;

  if (name == 'blur') {
    filters[name] = value * 0.05 + 'px';
  } else {
    filters[name] = value + '%';
  }

  console.log(value * 0.1);

  console.log(brightness);
  image.style.filter = `blur(${blur}) brightness(${brightness}) contrast(${contrast}) invert(${invert}) grayscale(${grayscale}) opacity(${opacity}) sepia(${sepia}) saturate(${saturate})`;
}

let flts = document.getElementsByTagName('input');

for (e of flts) {
  e.addEventListener('input', edit);
}
