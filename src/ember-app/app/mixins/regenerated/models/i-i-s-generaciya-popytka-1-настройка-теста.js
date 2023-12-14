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
      вопрос: attr('Вопрос', { index: 0 }),
      вариантОт1: attr('Вариант ответа 1', { index: 1 }),
      вариантОт2: attr('Вариант ответа 2', { index: 2 }),
      вариантОт3: attr('Вариант ответа 3', { index: 3 })
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
