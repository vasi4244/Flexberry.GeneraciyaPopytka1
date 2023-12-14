import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  настройка_теста: DS.belongsTo('i-i-s-generaciya-popytka-1-настройка-теста', { inverse: null, async: false }),
  тч2: DS.belongsTo('i-i-s-generaciya-popytka-1-тч2', { inverse: 'список_Сотрудников_для_прохождения_теста', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  настройка_теста: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста.validations.настройка_теста.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тч2: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста.validations.тч2.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Список_Сотрудников_для_прохождения_тестаE', 'i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста', {
    дата: attr('Дата', { index: 0 }),
    настройка_теста: belongsTo('i-i-s-generaciya-popytka-1-настройка-теста', 'Настройка_теста', {
      название_Теста: attr('Название_ теста', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название_Теста' })
  });
};
