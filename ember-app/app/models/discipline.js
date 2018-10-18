import { Model as DisciplineMixin, defineProjections } from
  '../mixins/regenerated/models/discipline';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, DisciplineMixin, {

});

defineProjections(Model);
export default Model;
