import ListFormController from 'ember-flexberry/controllers/list-form';

export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'lesson-e'
   */
  editFormRoute: 'lesson-e',

  getCellComponent(attr, bindingPath) {
    let cellComponent = this._super(...arguments);

    if (bindingPath === 'beginning' || bindingPath === 'ending') {
      cellComponent.componentName = 'hse-timepickr';
      cellComponent.componentProperties = {
        readonly: true
      }
    }     

    return cellComponent;
  }
});
