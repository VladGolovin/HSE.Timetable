import { moduleForModel, test } from 'ember-qunit';

moduleForModel('discipline', 'Unit | Model | discipline', {
  // Specify the other units that are required for this test.
  needs: [
    'model:discipline-kind',
    'model:discipline',
    'model:group',
    'model:lesson',
    'model:room',
    'model:student-group',
    'model:teacher'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
