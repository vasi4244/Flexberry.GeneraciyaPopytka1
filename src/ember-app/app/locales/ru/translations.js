import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISGeneraciya_popytka_1ДолжностьLForm from './forms/i-i-s-generaciya-popytka-1-должность-l';
import IISGeneraciya_popytka_1Настройка_тестаLForm from './forms/i-i-s-generaciya-popytka-1-настройка-теста-l';
import IISGeneraciya_popytka_1ОрганизацияLForm from './forms/i-i-s-generaciya-popytka-1-организация-l';
import IISGeneraciya_popytka_1ОтделыLForm from './forms/i-i-s-generaciya-popytka-1-отделы-l';
import IISGeneraciya_popytka_1СотрудникиLForm from './forms/i-i-s-generaciya-popytka-1-сотрудники-l';
import IISGeneraciya_popytka_1ДолжностьEForm from './forms/i-i-s-generaciya-popytka-1-должность-e';
import IISGeneraciya_popytka_1Настройка_тестаEForm from './forms/i-i-s-generaciya-popytka-1-настройка-теста-e';
import IISGeneraciya_popytka_1ОрганизацияEForm from './forms/i-i-s-generaciya-popytka-1-организация-e';
import IISGeneraciya_popytka_1ОтделыEForm from './forms/i-i-s-generaciya-popytka-1-отделы-e';
import IISGeneraciya_popytka_1СотрудникиEForm from './forms/i-i-s-generaciya-popytka-1-сотрудники-e';
import IISGeneraciya_popytka_1ДолжностьModel from './models/i-i-s-generaciya-popytka-1-должность';
import IISGeneraciya_popytka_1Настройка_тестаModel from './models/i-i-s-generaciya-popytka-1-настройка-теста';
import IISGeneraciya_popytka_1ОрганизацияModel from './models/i-i-s-generaciya-popytka-1-организация';
import IISGeneraciya_popytka_1ОтделыModel from './models/i-i-s-generaciya-popytka-1-отделы';
import IISGeneraciya_popytka_1СотрудникиModel from './models/i-i-s-generaciya-popytka-1-сотрудники';
import IISGeneraciya_popytka_1Список_Сотрудников_для_прохождения_тестаModel from './models/i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста';
import IISGeneraciya_popytka_1Тч2Model from './models/i-i-s-generaciya-popytka-1-тч2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-generaciya-popytka-1-должность': IISGeneraciya_popytka_1ДолжностьModel,
    'i-i-s-generaciya-popytka-1-настройка-теста': IISGeneraciya_popytka_1Настройка_тестаModel,
    'i-i-s-generaciya-popytka-1-организация': IISGeneraciya_popytka_1ОрганизацияModel,
    'i-i-s-generaciya-popytka-1-отделы': IISGeneraciya_popytka_1ОтделыModel,
    'i-i-s-generaciya-popytka-1-сотрудники': IISGeneraciya_popytka_1СотрудникиModel,
    'i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста': IISGeneraciya_popytka_1Список_Сотрудников_для_прохождения_тестаModel,
    'i-i-s-generaciya-popytka-1-тч2': IISGeneraciya_popytka_1Тч2Model
  },

  'application-name': 'Generaciya_popytka_1',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Generaciya_popytka_1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Generaciya_popytka_1',
          title: 'Generaciya_popytka_1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'generaciya-popytka-1': {
          caption: 'Generaciya_popytka_1',
          title: 'Generaciya_popytka_1',
          'i-i-s-generaciya-popytka-1-настройка-теста-l': {
            caption: 'Настройка_теста',
            title: ''
          }
        },
        кадры: {
          caption: 'Кадры',
          title: 'Кадры',
          'i-i-s-generaciya-popytka-1-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-generaciya-popytka-1-отделы-l': {
            caption: 'Отделы',
            title: ''
          },
          'i-i-s-generaciya-popytka-1-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-generaciya-popytka-1-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-generaciya-popytka-1-должность-l': IISGeneraciya_popytka_1ДолжностьLForm,
    'i-i-s-generaciya-popytka-1-настройка-теста-l': IISGeneraciya_popytka_1Настройка_тестаLForm,
    'i-i-s-generaciya-popytka-1-организация-l': IISGeneraciya_popytka_1ОрганизацияLForm,
    'i-i-s-generaciya-popytka-1-отделы-l': IISGeneraciya_popytka_1ОтделыLForm,
    'i-i-s-generaciya-popytka-1-сотрудники-l': IISGeneraciya_popytka_1СотрудникиLForm,
    'i-i-s-generaciya-popytka-1-должность-e': IISGeneraciya_popytka_1ДолжностьEForm,
    'i-i-s-generaciya-popytka-1-настройка-теста-e': IISGeneraciya_popytka_1Настройка_тестаEForm,
    'i-i-s-generaciya-popytka-1-организация-e': IISGeneraciya_popytka_1ОрганизацияEForm,
    'i-i-s-generaciya-popytka-1-отделы-e': IISGeneraciya_popytka_1ОтделыEForm,
    'i-i-s-generaciya-popytka-1-сотрудники-e': IISGeneraciya_popytka_1СотрудникиEForm
  },

});

export default translations;
