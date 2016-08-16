$(document).ready(function() {
	SwitchBopTabs('#ButtonsComp', 'selected');
});
function SwitchBopTabs(id, currentClass) {
	$(id + ' .filter').hide();
	$(id + ' .filter:first').show();
	$(id + ' ul.Tabs li:first').addClass('selected');
	
	$(id + ' ul.Tabs li').click(function() {
		$(id + ' ul.Tabs li').removeClass(currentClass);
		$(this).addClass(currentClass);
		var currentTab = $('.' + currentClass + ' a').attr('href');
		$(id + ' .filter').hide();
		$(currentTab).show();
		return false;
	});
}