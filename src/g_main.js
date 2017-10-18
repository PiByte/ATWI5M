//Global

var statemanager;


function preload()
{
	loadImage("res/tilemap.png", function(pl)
	{
		loadStrings("res/testmap.csv", function(aaa){
			var map = new g_tilemap().load(aaa, pl, 8, 8, 10, 10);
			//image(map, 0, 0);
		});
	});
}

function setup()
{
	createCanvas(800, 600);
	frameRate(60);
	
	statemanager = new g_statemanager();
	statemanager.new_state(new g_state_menu());
	

	
	statemanager.get_state().setup();
}

function draw()
{

	statemanager.get_state().draw();
}

function qwe(message) { console.log(message); }