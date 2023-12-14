import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      сотрудники: { serialize: 'odata-id', deserialize: 'records' },
      настройка_теста: { serialize: 'odata-id', deserialize: 'records' },
      список_Сотрудников_для_прохождения_теста: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
