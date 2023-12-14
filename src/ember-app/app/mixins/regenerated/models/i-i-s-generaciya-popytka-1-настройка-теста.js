import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  название_Теста: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-generaciya-popytka-1-сотрудники', { inverse: null, async: false }),
  тч2: DS.hasMany('i-i-s-generaciya-popytka-1-тч2', { inverse: 'настройка_теста', async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-настройка-теста.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название_Теста: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-настройка-теста.validations.название_Теста.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-настройка-теста.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тч2: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-настройка-теста.validations.тч2.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Настройка_тестаE', 'i-i-s-generaciya-popytka-1-настройка-теста', {
    название_Теста: attr('Название_ теста', { index: 0 }),
    код: attr('Код', { index: 1 }),
    сотрудники: belongsTo('i-i-s-generaciya-popytka-1-сотрудники', 'Сотрудники', {
      отчество: attr('Отчество', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'отчество' }),
    тч2: hasMany('i-i-s-generaciya-popytka-1-тч2', 'Тч2', {
      вариантОт1: attr('Вариант от1', { index: 0 }),
      вариантОт3: attr('Вариант от3', { index: 1 }),
      вопрос: attr('Вопрос', { index: 2 }),
      вариантОт2: attr('Вариант от2', { index: 3 }),
      сотрудники: belongsTo('i-i-s-generaciya-popytka-1-сотрудники', 'Сотрудники', {
        отчество: attr('Отчество', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'отчество' }),
      список_Сотрудников_для_прохождения_теста: hasMany('i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста', 'Список_ сотрудников_для_прохождения_теста', {
        дата: attr('Дата', { index: 0 }),
        настройка_теста: belongsTo('i-i-s-generaciya-popytka-1-настройка-теста', 'Настройка_теста', {
          название_Теста: attr('Название_ теста', { index: 2, hidden: true })
        }, { index: 1, displayMemberPath: 'название_Теста' })
      })
    })
  });

  modelClass.defineProjection('Настройка_тестаL', 'i-i-s-generaciya-popytka-1-настройка-теста', {
    название_Теста: attr('Название_ теста', { index: 0 }),
    код: attr('Код', { index: 1 }),
    сотрудники: belongsTo('i-i-s-generaciya-popytka-1-сотрудники', 'Отчество', {
      отчество: attr('Отчество', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
