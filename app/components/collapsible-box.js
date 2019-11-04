import Ember from 'ember';

export default Ember.Component.extend({
    isOpen:true,
    classNames: ['collapsible-box'],

    actions: {
        open(){
            this.set('isOpen', true);
        },

        close(){
            this.set('isOpen', false);
        }
    }
});
