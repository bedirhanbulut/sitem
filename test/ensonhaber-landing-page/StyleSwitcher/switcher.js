/*global $, jQuery, switchStylestyle*/

$('#StyleSwitcher .switcher-btn').click(function () {

    'use strict';

    $('#StyleSwitcher').toggleClass('open');
    return false;
});
$('.color-switch').click(function () {

    'use strict';

    var title = jQuery(this).attr('title');
    jQuery('#color-switch').attr('href', 'css/colors/' + title + '.css');
    return false;
});
