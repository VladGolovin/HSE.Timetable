import { Serializer as LessonSerializer } from
  '../mixins/regenerated/serializers/lesson';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LessonSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
