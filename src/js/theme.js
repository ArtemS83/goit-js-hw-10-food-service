const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkboxTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

setClassForTheme();

refs.checkboxTheme.addEventListener('change', hendlerChangeTheme);

function hendlerChangeTheme() {
  if (!refs.checkboxTheme.checked) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  }
}

function setClassForTheme() {
  const savedTheme = localStorage.getItem('theme'); // null,если первый раз зашел или значение,если изменял...

  if (!savedTheme) {
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.add(savedTheme);

    if (savedTheme === Theme.DARK) {
      refs.checkboxTheme.checked = true;
    }
  }
}
