import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  имя: DS.attr('string'),
  номерПас: DS.attr('number'),
  отчество: DS.attr('string'),
  серияПас: DS.attr('number'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-generaciya-popytka-1-должность', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-generaciya-popytka-1-организация', { inverse: null, async: false }),
  отделы: DS.belongsTo('i-i-s-generaciya-popytka-1-отделы', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПас: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.номерПас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПас: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.серияПас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-сотрудники.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-generaciya-popytka-1-сотрудники', {
    iD: attr('ID', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерПас: attr('Номер паспорта', { index: 4 }),
    серияПас: attr('Серия паспорта', { index: 5 }),
    организация: belongsTo('i-i-s-generaciya-popytka-1-организация', 'Организация', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    должность: belongsTo('i-i-s-generaciya-popytka-1-должность', 'Должность', {
      наименование: attr('Наименование', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' }),
    отделы: belongsTo('i-i-s-generaciya-popytka-1-отделы', 'Отделы', {
      наименование: attr('Наименование', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-generaciya-popytka-1-сотрудники', {
    iD: attr('ID', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерПас: attr('Номер паспорта', { index: 4 }),
    серияПас: attr('Серия паспорта', { index: 5 }),
    организация: belongsTo('i-i-s-generaciya-popytka-1-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-generaciya-popytka-1-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    отделы: belongsTo('i-i-s-generaciya-popytka-1-отделы', 'Наименование', {
      наименование: attr('Наименование', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
