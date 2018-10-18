import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  beginning: DS.attr('number'),
  ending: DS.attr('number'),
  date: DS.attr('date'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  studentGroup: DS.belongsTo('student-group', { inverse: null, async: false }),
  discipline: DS.belongsTo('discipline', { inverse: null, async: false }),
  room: DS.belongsTo('room', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      studentGroup: { presence: true },
      discipline: { presence: true },
      room: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'lesson', {
    beginning: Projection.attr('Beginning'),
    ending: Projection.attr('Ending'),
    date: Projection.attr('Date'),
    discipline: Projection.belongsTo('discipline', 'Discipline', {
      name: Projection.attr('Name')
    }),
    room: Projection.belongsTo('room', 'Room', {
      number: Projection.attr('Number')
    })
  });
  modelClass.defineProjection('LessonE', 'lesson', {
    beginning: Projection.attr('Начало'),
    ending: Projection.attr('Окончание'),
    date: Projection.attr('Дата проведения'),
    studentGroup: Projection.belongsTo('student-group', 'Группа', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    discipline: Projection.belongsTo('discipline', 'Дисциплина', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    room: Projection.belongsTo('room', 'Аудитория', {
      number: Projection.attr('Number', { hidden: true })
    }, { displayMemberPath: 'number' })
  });
  modelClass.defineProjection('LessonL', 'lesson', {
    beginning: Projection.attr('Начало'),
    ending: Projection.attr('Окончание'),
    date: Projection.attr('Дата проведения'),
    studentGroup: Projection.belongsTo('student-group', 'Группа', {
      name: Projection.attr('Группа')
    }, { hidden: true }),
    discipline: Projection.belongsTo('discipline', 'Дисциплина', {
      name: Projection.attr('Дисциплина')
    }, { hidden: true }),
    room: Projection.belongsTo('room', 'Аудитория', {
      number: Projection.attr('Аудитория')
    }, { hidden: true })
  });
};
