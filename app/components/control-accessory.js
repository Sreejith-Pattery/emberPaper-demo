import Ember from 'ember';

export default Ember.Component.extend({
    noItem:Ember.computed.equal('itemColor', 'none'),

    actions:{
    }
});
