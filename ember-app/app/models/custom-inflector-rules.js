import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('discipline', 'Disciplines');
inflector.irregular('teacher', 'Teachers');
inflector.irregular('lesson', 'Lessons');
inflector.irregular('group', 'Groups');
inflector.irregular('kind', 'Kinds');
inflector.irregular('room', 'Rooms');

export default {};
