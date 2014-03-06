/* Placing a link to a stylesheet outside of the <head> tag is not valid, per the W3C spec. */
/* This script will allow you to insert a new stylesheet into the <head> tag from anywhere on the page. */
/* Usage Example: insertStylesheet("/style/mypage.css"); */


function insertStylesheet(stylesheetPath) {
		$('head').append('<link rel="stylesheet" href="' + stylesheetPath + '" />'); 
};
