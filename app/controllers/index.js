import Ember from 'ember';

export default Ember.Controller.extend({
    
    items:['hat', 'necklace', 'shoe', 'snap bracelets', 'scarves'],
    itemDetails:Ember.computed(function(){
        return this.get('items').map(
            function(itemName){
                return {
                    itemName:itemName,
                    itemColor:'none'
                }
            }
        )
    }),

    matchesAnotherItem(itemIndex, newColor){
        var color = this.get(`itemDetails.${itemIndex}.itemColor`)
        return (color == newColor);
        /*
        return this.get('itemDetails').any(function(item,index){
            console.log((Ember.get(item, 'itemColor')== color && (index ==itemIndex))+','+color+','+index+','+itemIndex);
            return Ember.get(item, 'itemColor') == color && index == itemIndex
        })*/
    },

    actions:{
        changeItem(itemIndex, newColor){
            var blnIsSelected = this.matchesAnotherItem(itemIndex, newColor);
            this.set(`itemDetails.${itemIndex}.itemColor`, newColor);
            //return this.matchesAnotherItem(itemIndex) 
            return blnIsSelected;
        }
    }
});
