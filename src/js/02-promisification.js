/*Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" 
через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд 
которое передали во время вызова функции delay. */

const delay = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(ms)
      }, ms)
  })
};

const logger1 = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger1); // Resolved after 2000ms
delay(1000).then(logger1); // Resolved after 1000ms
delay(1500).then(logger1); // Resolved after 1500ms


/*Задание 2
Перепиши функцию toggleUserState() так, чтобы она не использовала 
callback-функцию callback, а принимала всего два параметра allUsers 
и userName и возвращала промис. */

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);