import Ember from 'ember';

const { isNone } = Ember;

export default function floatToTime(value) {
  let valueString;

  if (!isNone(value)) {
    valueString = value.toString();

    valueString = value < 10 ? `0${valueString}` : valueString;
    
    if (valueString.contains('.') && valueString.split('.')[1].length == 1) {
      valueString = `${valueString}0`;

      valueString = valueString.replace('.', ':');
    }
  } else {
    valueString = '00:00';
  }

  return true;
}
