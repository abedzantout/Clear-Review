// TODO: this got hacky quick..... needs major refactor
//       hide the two icons if the search box is below a certain size.
$(document).ready(function() {
    $('.mdh-toggle-search').click(function() {
        // No search bar is currently shown
        if ($(this).find('i').text() == 'search') {
            $(this).find('i').text('cancel');
            $(this).removeClass('mdl-cell--hide-tablet mdl-cell--hide-desktop'); // Ensures the close button doesn't disappear if the screen is resized.

            $('.mdl-layout__drawer-button, .mdl-layout-title, .mdl-badge, .mdl-layout-spacer').hide();
            $('.mdl-layout__header-row').css('padding-left', '16px'); // Remove margin that used to hold the menu button
            $('.mdh-expandable-search').removeClass('mdl-cell--hide-phone').css('margin', '0 16px 0 0');

        }
        // Search bar is currently showing
        else {
            $(this).find('i').text('search');
            $(this).addClass('mdl-cell--hide-tablet mdl-cell--hide-desktop');

            $('.mdl-layout__drawer-button, .mdl-layout-title, .mdl-badge, .mdl-layout-spacer').show();
            $('.mdl-layout__header-row').css('padding-left', '');
            $('.mdh-expandable-search').addClass('mdl-cell--hide-phone').css('margin', '0 50px');
        }

    });
});