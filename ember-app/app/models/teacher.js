import { Model as TeacherMixin, defineProjections } from
  '../mixins/regenerated/models/teacher';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, TeacherMixin, {

});

defineProjections(Model);
export default Model;
