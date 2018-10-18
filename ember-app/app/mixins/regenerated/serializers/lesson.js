import Ember from 'ember';

export let Serializer = Ember.Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      studentGroup: { serialize: 'odata-id', deserialize: 'records' },
      discipline: { serialize: 'odata-id', deserialize: 'records' },
      room: { serialize: 'odata-id', deserialize: 'records' }
    };

    return Ember.$.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
