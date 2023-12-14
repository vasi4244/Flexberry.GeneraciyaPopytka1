import { Serializer as ДолжностьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya-popytka-1-должность';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДолжностьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
