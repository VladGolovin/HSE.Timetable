import { Serializer as DisciplineKindSerializer } from
  '../mixins/regenerated/serializers/discipline-kind';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DisciplineKindSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
