import { Serializer as RoomSerializer } from
  '../mixins/regenerated/serializers/room';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RoomSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
