import { Model as RoomMixin, defineProjections } from
  '../mixins/regenerated/models/room';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, RoomMixin, {

});

defineProjections(Model);
export default Model;
