  	$(document).ready(function(){
	     $('ul.slimmenu').slimmenu(
{
    resizeWidth: '660', /* Navigation menu will be collapsed when document width is below this size or equal to it. */
    collapserTitle: 'Menu', /* Collapsed menu title. */
    animSpeed: 'medium', /* Speed of the submenu expand and collapse animation. */
    easingEffect: null, /* Easing effect that will be used when expanding and collapsing menu and submenus. */
    indentChildren: false, /* Indentation option for the responsive collapsed submenus. If set to true, all submenus will be indented with the value of the option below. */
    childrenIndenter: '&nbsp;' /* Responsive submenus will be indented with this character according to their level. */
});
	}); // koniec funkcji ready