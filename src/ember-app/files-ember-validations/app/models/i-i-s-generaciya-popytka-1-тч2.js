import {
  defineNamespace,
  defineProjections,
  Model as Тч2Mixin
} from '../mixins/regenerated/models/i-i-s-generaciya-popytka-1-тч2';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Тч2Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
