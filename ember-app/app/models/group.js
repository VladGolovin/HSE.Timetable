import { Model as StudentGroupMixin, defineProjections } from
  '../mixins/regenerated/models/group';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, StudentGroupMixin, {

});

defineProjections(Model);
export default Model;
