import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import DisciplineKindLForm from './forms/discipline-kind-l';
import DisciplineLForm from './forms/discipline-l';
import GroupLForm from './forms/group-l';
import LessonLForm from './forms/lesson-l';
import RoomLForm from './forms/room-l';
import StudentGroupLForm from './forms/student-group-l';
import TeacherLForm from './forms/teacher-l';
import DisciplineEForm from './forms/discipline-e';
import DisciplineKindEForm from './forms/discipline-kind-e';
import GroupEForm from './forms/group-e';
import LessonEForm from './forms/lesson-e';
import RoomEForm from './forms/room-e';
import StudentGroupEForm from './forms/student-group-e';
import TeacherEForm from './forms/teacher-e';
import DisciplineKindModel from './models/discipline-kind';
import DisciplineModel from './models/discipline';
import GroupModel from './models/group';
import LessonModel from './models/lesson';
import RoomModel from './models/room';
import StudentGroupModel from './models/student-group';
import TeacherModel from './models/teacher';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'discipline-kind': DisciplineKindModel,
    'discipline': DisciplineModel,
    'group': GroupModel,
    'lesson': LessonModel,
    'room': RoomModel,
    'student-group': StudentGroupModel,
    'teacher': TeacherModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'hse-timetable': {
          caption: 'hse-timetable',
          title: 'hse-timetable',
          'lesson-l': {
            caption: 'lesson-l',
            title: 'lesson-l'
          },
          'teacher-l': {
            caption: 'teacher-l',
            title: 'teacher-l'
          },
          'discipline-l': {
            caption: 'discipline-l',
            title: 'discipline-l'
          },
          'room-l': {
            caption: 'room-l',
            title: 'room-l'
          },
          'studnet-group-l': {
            caption: 'group-l',
            title: 'group-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'discipline-kind-l': DisciplineKindLForm,
    'discipline-l': DisciplineLForm,
    'group-l': GroupLForm,
    'lesson-l': LessonLForm,
    'room-l': RoomLForm,
    'student-group-l': StudentGroupLForm,
    'teacher-l': TeacherLForm,
    'discipline-e': DisciplineEForm,
    'discipline-kind-e': DisciplineKindEForm,
    'group-e': GroupEForm,
    'lesson-e': LessonEForm,
    'room-e': RoomEForm,
    'student-group-e': StudentGroupEForm,
    'teacher-e': TeacherEForm,
  },

});

export default translations;
