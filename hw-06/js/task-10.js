'use strict';

import users from './users.js';

export function task_10() {
    // Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений 
    // и они должны быть отсортированы в алфавитном порядке.

    const getSortedUniqueSkills = users => users.reduce((acc, user) => {

        user.skills.forEach(idx => acc.includes(idx) ? false : acc.push(idx));

        return acc.sort()

    }, []);

    console.log(getSortedUniqueSkills(users));
    // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
}