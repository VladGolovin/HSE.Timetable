import { Model as LessonMixin, defineProjections } from
  '../mixins/regenerated/models/lesson';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, LessonMixin, {

});

defineProjections(Model);
export default Model;
