import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Настройка_тестаMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-popytka-1-настройка-теста';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Настройка_тестаMixin, Validations, {
});

defineProjections(Model);

export default Model;
