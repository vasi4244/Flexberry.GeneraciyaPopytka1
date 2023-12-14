import {
  defineNamespace,
  defineProjections,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-popytka-1-сотрудники';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрудникиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
