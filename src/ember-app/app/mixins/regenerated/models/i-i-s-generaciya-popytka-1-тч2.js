import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вариантОт1: DS.attr('number'),
  вариантОт2: DS.attr('number'),
  вариантОт3: DS.attr('number'),
  вопрос: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-generaciya-popytka-1-сотрудники', { inverse: null, async: false }),
  настройка_теста: DS.belongsTo('i-i-s-generaciya-popytka-1-настройка-теста', { inverse: 'тч2', async: false }),
  список_Сотрудников_для_прохождения_теста: DS.hasMany('i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста', { inverse: 'тч2', async: false })
});

export let ValidationRules = {
  вариантОт1: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-тч2.validations.вариантОт1.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  вариантОт2: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-тч2.validations.вариантОт2.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  вариантОт3: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-тч2.validations.вариантОт3.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  вопрос: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-тч2.validations.вопрос.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-тч2.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  настройка_теста: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-тч2.validations.настройка_теста.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  список_Сотрудников_для_прохождения_теста: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-тч2.validations.список_Сотрудников_для_прохождения_теста.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Тч2E', 'i-i-s-generaciya-popytka-1-тч2', {
    вопрос: attr('Вопрос', { index: 0 }),
    вариантОт1: attr('Вариант ответа 1', { index: 1 }),
    вариантОт2: attr('Вариант ответа 2', { index: 2 }),
    вариантОт3: attr('Вариант ответа 3', { index: 3 })
  });
};
