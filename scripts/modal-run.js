//  Code codeEditor masing2
const codeEHtml = document.querySelector('#html-code');
const codeECss = document.querySelector('#css-code');
const codeEJs = document.querySelector('#js-code');
const codeEditor = document.querySelector('.codeEditor');

// button run
const btnRun = document.querySelector('#btnRunId');
const runOutput = document.querySelector('.runOutput');
const btnClose = document.querySelector('#close');
const codeEditorHtml = document.querySelector('.codeEditorHtml');

btnRun.addEventListener('click', function(){
  runOutput.style.display = 'block'
  codeEditorHtml.style.display='none'
})

btnClose.addEventListener('click', function(){
  runOutput.style.display = 'none'
  codeEditorHtml.style.display='block'
  
})

// button html, css, js 
const btnHtml = document.querySelector('#btnHtml');
const btnCss = document.querySelector('#btnCss');
const btnJs = document.querySelector('#btnJs');
// akhir button html, css, js
// button html, code editor
btnHtml.addEventListener('click', function(){
  codeEHtml.style.display = 'block'
  codeECss.style.display = 'none'
  codeEJs.style.display = 'none'
  
})

//Button css, code editor
btnCss.addEventListener('click', function(){
  codeEHtml.style.display = 'none'
  codeECss.style.display = 'block'
  codeEJs.style.display = 'none'
})

// Button javascript, code editor
btnJs.addEventListener('click', function(){
  codeEHtml.style.display = 'none'
  codeECss.style.display = 'none'
  codeEJs.style.display = 'block'
})