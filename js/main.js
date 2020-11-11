// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const mailList = [
  {
    dom: '@mail.ru'
  },
  {
    dom: '@gmail.com'
  },
  {
    dom: '@ukr.net'
  },
  {
    dom: '@outlook.com'
  },
  {
    dom: '@mail.yandex.ru'
  },
  {
    dom: '@mail.yahoo.com'
  },
  {
    dom: '@mail.ex.ua'
  },
  {
    dom: '@bigmir.ua'
  },
  {
    dom: '@i.ua'
  },
  {
    dom: '@meta.ua'
  },
  {
    dom: '@e-mail.ua'
  },
  {
    dom: '@hotmail.com'
  },
  {
    dom: '@fastmail.com'
  }
]

const listUsers = [
  {
    id: '01',
    email: 'maks@gmail.com',
    password: '12345',
    displayName: 'Maksjs'
  },

  {
    id: '02',
    email: 'kate@gmail.com',
    password: '123456',
    displayName: 'KateKillMaks'
  }
]

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user)
      handler();
    } else {
      alert('Пользователь с такими данными не найден')
    }
  },

  logOut() {

  },

  signUp(email, password, handler) {
    if (!this.getUser(email) && this.getDom(afterDog(email))){
      const user = {email, password, displayName: newName(email)};
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
      console.log(listUsers);
    } else if (!this.getUser(email) && !this.getDom(afterDog(email))) {
      alert('Такого email не существует');
    } else {
      alert('Пользователь с таким email уже зарегестрирован');
    }
  },

  getUser(email) {
    return listUsers.find((item) => {
      return item.email === email;
    })
  },

  //для проверки правильности Email
  getDom(email) {
    return mailList.find((item) => {
      return item.dom === afterDog(email);
    })
  },

  authorizedUser(user) {
    this.user = user;
  }
  
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log(user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);

})

loginSignup.addEventListener('click', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
})

toggleAuthDom();


//запись в displayName до знака @
const newName = (email) => {
  let newEmail = email;
  let onlyName = '';
  for (i = 0; i < newEmail.length && newEmail[i] != '@'; i++) {
    onlyName += newEmail[i];
  }
  return onlyName;
}

//Получаем часть логина после знака @
const afterDog = (email) => {
  let mail = email;
  let k = 0;
  let newMail = '';
  for (i = 0; i < mail.length; i++) {
    if (mail[i] == '@') {
      k = i;
    }
  }
  for (j = k; j < mail.length; j++) {
    newMail += mail[j];
  }
  console.log(newMail);

  return newMail;
}



