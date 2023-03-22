let fontOpt = document.getElementById('font-size');
window.onload = () => {
  for (let i = 16; i <= 32; i++) {
    const opt = document.createElement('option');
    opt.innerHTML = `${i}px`;
    opt.setAttribute('data-fontSize', i);
    fontOpt.appendChild(opt);
  }
};

