//Global

var statemanager;

var map;

function preload()
{
	loadImage("res/tilemap.png", function(pl)
	{
		loadStrings("res/lol.csv", function(aaa){
			map = new g_tilemap().load(aaa, pl, 8, 8);
		});
	});
}

function setup()
{
	createCanvas(800, 600);
	frameRate(60);
	
	statemanager = new g_statemanager();
	statemanager.new_state(new g_state_menu());
	
	image(map, 0, 0);
	
	statemanager.get_state().setup();
}

function draw()
{

	statemanager.get_state().draw();
}

function qwe(message) { console.log(message); }