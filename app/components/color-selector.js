import Ember from 'ember';

export default Ember.Component.extend({
    itemColors:["blue","yellow","green","orange","purple","pink","none"],
    actions:{
        changeItem(color){

            var hasMatch =this.attrs.changeItem(color)
            //this.$(`.${color}`).color = "black";

            if(hasMatch){
                alert('already selected');
            }
        }
    }
});
