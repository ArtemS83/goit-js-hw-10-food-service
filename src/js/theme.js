const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkboxTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.body.classList.add(Theme.LIGHT);

refs.checkboxTheme.addEventListener('change', hendlerChangeTheme);

function hendlerChangeTheme() {
  if (!refs.checkboxTheme.checked) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  } else {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  }
  console.log(refs.checkboxTheme.checked); // false or true
}

console.log(hendlerChangeTheme);
