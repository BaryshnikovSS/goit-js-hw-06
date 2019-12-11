'use strict'

import {task_01} from './task-01.js'
import {task_02} from './task-02.js'
import {task_03} from './task-03.js'
import {task_04} from './task-04.js'
import {task_05} from './task-05.js'
import {task_06} from './task-06.js'
import {task_07} from './task-07.js'
import {task_08} from './task-08.js'
import {task_09} from './task-09.js'
import {task_10} from './task-10.js'

let inputMessage;

do {
    inputMessage = prompt('Пожалуйста, выберите номер задание от 1 до 10!');
    console.clear();

    if (isNaN(inputMessage) || inputMessage === null) {
        if (isNaN(inputMessage)) {
            alert('Введите пожалуйста цифру!');
            continue;
        } else {
            alert('Спасибо за выбор нашего сервиса! До свидания!');
            break;
        }
    } else {
        inputMessage = Number(inputMessage);

        switch (inputMessage) {
            case 1:
                task_01();
                break;

            case 2:
                task_02();
                break;

            case 3:
                task_03();
                break;

            case 4:
                task_04();
                break;

            case 5:
                task_05();
                break;

            case 6:
                task_06();
                break;

            case 7:
                task_07();
                break;

            case 8:
                task_08();
                break;

            case 9:
                task_09();
                break;

            case 10:
                task_10();
                break;

            default:
                alert('Задание не выбрано! Введите номер задания!');
        }
    }
} while (inputMessage === true);