import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  surname: DS.attr('string'),
  name: DS.attr('string'),
  middleName: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  discipline: DS.hasMany('discipline', { inverse: 'teacher', async: false }),
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
  modelClass.defineProjection('AuditView', 'teacher', {
    surname: Projection.attr('Surname'),
    name: Projection.attr('Name'),
    middleName: Projection.attr('Middle name')
  });
  modelClass.defineProjection('TeacherE', 'teacher', {
    surname: Projection.attr('Фамилия'),
    name: Projection.attr('Имя'),
    middleName: Projection.attr('Отчество'),
    discipline: Projection.hasMany('discipline', 'Дисциплины', {
      name: Projection.attr('Название'),
      disciplineKind: Projection.belongsTo('discipline-kind', 'Вид', {
        name: Projection.attr('', { hidden: true })
      }, { displayMemberPath: 'name' }),
      teacher: Projection.belongsTo('teacher', '', {

      }, { hidden: true })
    })
  });
  modelClass.defineProjection('TeacherL', 'teacher', {
    surname: Projection.attr('Фамилия'),
    name: Projection.attr('Имя'),
    middleName: Projection.attr('Отчество')
  });
};
