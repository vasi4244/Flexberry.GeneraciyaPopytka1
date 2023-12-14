import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Список_Сотрудников_для_прохождения_тестаMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Список_Сотрудников_для_прохождения_тестаMixin, Validations, {
});

defineProjections(Model);

export default Model;
