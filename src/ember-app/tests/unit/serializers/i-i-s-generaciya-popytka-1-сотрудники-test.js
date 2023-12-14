import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-generaciya-popytka-1-сотрудники', 'Unit | Serializer | i-i-s-generaciya-popytka-1-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-generaciya-popytka-1-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-generaciya-popytka-1-должность',
    'model:i-i-s-generaciya-popytka-1-настройка-теста',
    'model:i-i-s-generaciya-popytka-1-организация',
    'model:i-i-s-generaciya-popytka-1-отделы',
    'model:i-i-s-generaciya-popytka-1-сотрудники',
    'model:i-i-s-generaciya-popytka-1-список-сотрудников-для-прохождения-теста',
    'model:i-i-s-generaciya-popytka-1-тч2',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
