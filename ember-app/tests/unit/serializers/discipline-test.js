import { moduleForModel, test } from 'ember-qunit';

moduleForModel('discipline', 'Unit | Serializer | discipline', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:discipline',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:discipline-kind',
    'model:discipline',
    'model:group',
    'model:lesson',
    'model:room',
    'model:student-group',
    'model:teacher'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
