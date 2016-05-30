import Ember from 'ember';

export default Ember.Component.extend({
	isRentalImageShowing:false, 
	  actions: {
	    imageShow() {
	      this.set('isRentalImageShowing', true);
	    },
	    hideShow(){
	    	this.set('isRentalImageShowing', false);
	    }
	  }
});
