import { Serializer as ОтделыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya-popytka-1-отделы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтделыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
