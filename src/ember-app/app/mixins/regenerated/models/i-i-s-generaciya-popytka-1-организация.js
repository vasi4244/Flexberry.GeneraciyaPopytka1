import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодОрг: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  кодОрг: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-организация.validations.кодОрг.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-generaciya-popytka-1-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-generaciya-popytka-1-организация', {
    наименование: attr('Наименование', { index: 0 }),
    кодОрг: attr('Код орг', { index: 1 })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-generaciya-popytka-1-организация', {
    наименование: attr('Наименование', { index: 0 }),
    кодОрг: attr('Код орг', { index: 1 })
  });
};
