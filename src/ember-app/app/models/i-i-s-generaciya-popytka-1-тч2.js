import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Тч2Mixin
} from '../mixins/regenerated/models/i-i-s-generaciya-popytka-1-тч2';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Тч2Mixin, Validations, {
});

defineProjections(Model);

export default Model;
