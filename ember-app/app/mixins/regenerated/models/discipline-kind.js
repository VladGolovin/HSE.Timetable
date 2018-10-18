import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'discipline-kind', {
    name: Projection.attr('')
  });
  modelClass.defineProjection('DisciplineKindE', 'discipline-kind', {
    name: Projection.attr('Название')
  });
  modelClass.defineProjection('DisciplineKindL', 'discipline-kind', {
    name: Projection.attr('Название')
  });
};
