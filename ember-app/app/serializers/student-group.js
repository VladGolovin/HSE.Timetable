import { Serializer as StudentGroupSerializer } from
  '../mixins/regenerated/serializers/student-group';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(StudentGroupSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
