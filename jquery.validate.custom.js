/* REQUIRES: jquery.validate.custom.js */
/* A few custom validation methods for the jQuery Validate library. */

$(document).ready(function () {    

  $.validator.addMethod('dateRange', function(value, element, parameter) {
  	if (this.optional(element)) {
  		return true;
  	}	
  	var startDate = Date.parse('01/01/1900'),
    endDate = Date.parse(new Date()),
    enteredDate = Date.parse(value);       
  	
  	return ((startDate <= enteredDate) && (enteredDate <= endDate));
  
  }, "Please specify a valid date.");
  
  
  $.validator.addMethod("equalTo", function (value, element, parameter) {
  	return value == parameter
  }, "Values must match");
  
  
  $.validator.addMethod("passwordValid", function (value, element, parameter) {
  	return value.match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,})$/g)
  }, "Please enter a valid password.");
  
  
  $.validator.addMethod("postalCodeUS", function(value, element) {
			return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value);
	}, "The specified US ZIP Code is invalid");
		
  
  $.validator.addMethod("ssn", function (value, element, parameter) {
  	return value.match(/^([0-6]\d{2}|7[0-6]\d|77[0-2])([ \-]?)(\d{2})\2(\d{4})$/)
  }, "Please enter a valid Social Security Number.");
  
  
});
