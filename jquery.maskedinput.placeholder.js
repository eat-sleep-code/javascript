
/* REQUIRES: jquery.maskedinput.min.js and jquery.placeholder.min.js */
/* Masks the field with the specified mask pattern and mask placeholders on focus. */
/* Removes the mask from the field and replaces it with the value specified by the fields "placeholder" attribute on blur. */

function maskField(fieldIdentifier, maskPattern, maskPlaceholder) {
	$(fieldIdentifier).focus(function () {
		setTimeout(function () {
			$(fieldIdentifier).mask(maskPattern);
		}, 10);
	}).blur(function () {
		if ($(fieldIdentifier).val() == maskPlaceholder) {
			setTimeout(function () {
				$(fieldIdentifier).val($(fieldIdentifier).attr("placeholder"));
				$(fieldIdentifier).addClass("placeholder");
			}, 10);
		}
	});
};
