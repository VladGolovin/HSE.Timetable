import Ember from 'ember';

const {
  observer,
  isNone
} = Ember;

export default Ember.Component.extend({

  /**
   * Значение редактируемого объекта данных
   * @property {Number} value
   */
  value: null,

  readonly: false,

  /**
   * Значение с которым работает 'flatpickr'
   * @property {Number} _value
   */
  _value: '8:00',

  classNames: ['flexberry-field', 'ui', 'field'],

  valueObserver: observer('_value', function() {
    this.set('value', this.get('_value').replace(':', '.'));
  }),

  init() {
    this._super(...arguments);

    let value = this.get('value');

    let valueString;

    if (!isNone(value)) {
      valueString = value.toString();

      valueString = value < 10 ? `0${valueString}` : valueString;

      if (valueString.contains('.') && valueString.split('.')[1].length === 1) {
        valueString = `${valueString}0`;

        valueString = valueString.replace('.', ':');
      }
    } else {
      valueString = '08:00';
    }

    this.set('_value', valueString);
  },

  didInsertElement() {
    this._super(...arguments);

    if (!this.get('readonly')) {
      this.$('input').flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true
      });
    }
  }
});
