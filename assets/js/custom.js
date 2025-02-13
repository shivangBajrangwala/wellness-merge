
jQuery(document).ready(function () {
    // Whole Script Strict Mode Syntax
    "use strict";
    // Sticky Header JS Start
    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop() >= 100) {
            jQuery(".site-header").addClass("sticky-header");
        } else {
            jQuery(".site-header").removeClass("sticky-header");
        }
    });
    // Sticky Header JS End
})