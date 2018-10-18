import { Serializer as TeacherSerializer } from
  '../mixins/regenerated/serializers/teacher';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TeacherSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
