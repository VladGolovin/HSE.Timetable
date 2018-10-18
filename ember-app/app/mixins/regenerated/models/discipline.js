import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  disciplineKind: DS.belongsTo('discipline-kind', { inverse: null, async: false }),
  teacher: DS.belongsTo('teacher', { inverse: 'discipline', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      disciplineKind: { presence: true },
      teacher: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'discipline', {
    name: Projection.attr('Name'),
    teacher: Projection.belongsTo('teacher', 'Teacher', {
      surname: Projection.attr('Surname')
    }),
    disciplineKind: Projection.belongsTo('discipline-kind', '', {

    })
  });
  modelClass.defineProjection('DisciplineD', 'discipline', {
    name: Projection.attr('Название'),
    disciplineKind: Projection.belongsTo('discipline-kind', 'Вид', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    teacher: Projection.belongsTo('teacher', '', {

    }, { hidden: true })
  });
  modelClass.defineProjection('DisciplineE', 'discipline', {
    name: Projection.attr('Название'),
    teacher: Projection.belongsTo('teacher', 'Преподаватель', {
      surname: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'surname' }),
    disciplineKind: Projection.belongsTo('discipline-kind', 'Вид', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  modelClass.defineProjection('DisciplineL', 'discipline', {
    name: Projection.attr('Название'),
    teacher: Projection.belongsTo('teacher', 'Преподаватель', {
      surname: Projection.attr('Преподаватель')
    }, { hidden: true }),
    disciplineKind: Projection.belongsTo('discipline-kind', 'Вид занятия', {
      name: Projection.attr('Вид занятия')
    }, { hidden: true })
  });
};
