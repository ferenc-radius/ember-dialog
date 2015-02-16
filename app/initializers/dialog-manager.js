import DialogManager from 'ember-dialog/services/dialog-manager';
import DialogComponent from 'ember-dialog/components/dialog';

export default {
    name: 'dialog-manager',
    initialize: function(container, application) {
        application.register('component:dialog', DialogComponent);
        application.register('dialog:manager', DialogManager, {singleton: true});
        application.inject('controller', 'dialogManager', 'dialog:manager');
        application.inject('component:dialog', 'dialogManager', 'dialog:manager');
    }
};
