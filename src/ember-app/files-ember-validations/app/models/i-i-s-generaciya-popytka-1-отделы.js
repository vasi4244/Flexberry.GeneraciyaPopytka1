import {
  defineNamespace,
  defineProjections,
  Model as ОтделыMixin
} from '../mixins/regenerated/models/i-i-s-generaciya-popytka-1-отделы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтделыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
