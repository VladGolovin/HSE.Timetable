import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  number: DS.attr('number'),
  building: DS.attr('number'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
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
  modelClass.defineProjection('AuditView', 'room', {
    number: Projection.attr('Number'),
    building: Projection.attr('Building')
  });
  modelClass.defineProjection('RoomE', 'room', {
    number: Projection.attr('Номер'),
    building: Projection.attr('Корпус')
  });
  modelClass.defineProjection('RoomL', 'room', {
    number: Projection.attr('Номер'),
    building: Projection.attr('Корпус')
  });
};
