const pressed = [];
const secretCode = 'porcodio';

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('') === secretCode) {
    cornify_add();
  }
});
