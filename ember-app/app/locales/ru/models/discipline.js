export default {
  projections: {
    AuditView: {
      name: {
        __caption__: 'Name'
      },
      teacher: {
        __caption__: 'Teacher',
        surname: {
          __caption__: 'Surname'
        }
      },
      disciplineKind: {
        __caption__: ''
      }
    },
    DisciplineD: {
      name: {
        __caption__: 'Название'
      },
      disciplineKind: {
        __caption__: 'Вид',
        name: {
          __caption__: ''
        }
      },
      teacher: {
        __caption__: ''
      }
    },
    DisciplineE: {
      name: {
        __caption__: 'Название'
      },
      teacher: {
        __caption__: 'Преподаватель',
        surname: {
          __caption__: ''
        }
      },
      disciplineKind: {
        __caption__: 'Вид',
        name: {
          __caption__: ''
        }
      }
    },
    DisciplineL: {
      name: {
        __caption__: 'Название'
      },
      teacher: {
        __caption__: 'Преподаватель',
        surname: {
          __caption__: 'Преподаватель'
        }
      },
      disciplineKind: {
        __caption__: 'Вид занятия',
        name: {
          __caption__: 'Вид занятия'
        }
      }
    }
  }
};
