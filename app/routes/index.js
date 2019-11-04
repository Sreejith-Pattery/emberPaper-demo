import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        pressRelease(itemName){
            this.send('showModalDialog',`Very ${itemName}.  Much disrupt`);
        }
    }
});
