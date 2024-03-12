var currentGrid = document.getElementById('current');
var msnryCurrent = new Masonry( currentGrid, {
	// options for grid1
	itemSelector: '.grid-item',
	columnWidth: 10
});

var completedGrid = document.getElementById('completed');
var msnry2 = new Masonry( completedGrid, {
	// options for grid2
	itemSelector: '.grid-item',
	columnWidth: 150
});

var droppedGrid = document.getElementById('dropped');
var msnry2 = new Masonry( droppedGrid, {
	// options for grid2
	itemSelector: '.grid-item',
	columnWidth: 150
});
