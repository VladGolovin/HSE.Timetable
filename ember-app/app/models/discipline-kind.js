import { Model as DisciplineKindMixin, defineProjections } from
  '../mixins/regenerated/models/discipline-kind';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, DisciplineKindMixin, {

});

defineProjections(Model);
export default Model;
