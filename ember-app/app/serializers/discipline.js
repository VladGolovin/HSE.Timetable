import { Serializer as DisciplineSerializer } from
  '../mixins/regenerated/serializers/discipline';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DisciplineSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
