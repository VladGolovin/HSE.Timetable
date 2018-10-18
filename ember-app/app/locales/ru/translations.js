import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'НИУ ВШЭ Расписание',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'НИУ ВШЭ Расписание',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'НИУ ВШЭ Расписание',
          title: 'Hse timetable'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'hse-timetable': {
          caption: 'HseTimetable',
          title: 'HseTimetable',
          'lesson-l': {
            caption: 'Занятия',
            title: ''
          },
          'teacher-l': {
            caption: 'Преподаватели',
            title: ''
          },
          'discipline-l': {
            caption: 'Дисциплины',
            title: ''
          },
          'room-l': {
            caption: 'Аудитории',
            title: ''
          },
          'discipline-kind-l': {
            caption: 'Виды дисциплин',
            title: ''
          },
          'student-group-l': {
            caption: 'Группы',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
