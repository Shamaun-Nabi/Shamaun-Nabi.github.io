(function($) {

	$(document).ready(function() {

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

		$(".contactform").on("submit", function() {
      // $(".output_message").text("Message Sentu!");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Message Sent Successfully',
        showConfirmButton: false,
        timer: 1500
      });
		});

	});

})(jQuery);