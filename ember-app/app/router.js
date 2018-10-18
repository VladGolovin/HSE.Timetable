import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  // Виды дисциплин
  this.route('discipline-kind-l');
  this.route('discipline-kind-e',
  { path: 'discipline-kind-e/:id' });
  this.route('discipline-kind-e.new',
  { path: 'discipline-kind-e/new' });

  // Дисциплины
  this.route('discipline-l');
  this.route('discipline-e',
  { path: 'discipline-e/:id' });
  this.route('discipline-e.new',
  { path: 'discipline-e/new' });  

  // Группы студентов
  this.route('student-group-l');
  this.route('student-group-e',
  { path: 'student-group-e/:id' });
  this.route('student-group-e.new',
  { path: 'student-group-e/new' });

  // Занятия
  this.route('lesson-l');
  this.route('lesson-e',
  { path: 'lesson-e/:id' });
  this.route('lesson-e.new',
  { path: 'lesson-e/new' });

  // Аудитории
  this.route('room-l');
  this.route('room-e',
  { path: 'room-e/:id' });
  this.route('room-e.new',
  { path: 'room-e/new' });

  // Преподаватели
  this.route('teacher-l');
  this.route('teacher-e',
  { path: 'teacher-e/:id' });
  this.route('teacher-e.new',
  { path: 'teacher-e/new' });
});

export default Router;
