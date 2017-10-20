function g_player()
{
	// Add animations
	
	this.player;
	this.player_x;
	this.player_y;
	this.player_img;
	this.player_speed = 2;
	this.player_controls = [87, 65, 83, 68];
	
	this.setup = function(x, y, img)
	{
		player_x = x;
		player_y = y;
		player_img = img;
	}
	
	this.update = function()
	{
		if (keyIsDown(this.player_controls[0])) { this.player_x - this.player_speed; }
		if (keyIsDown(this.player_controls[1])) { this.player_y - this.player_speed; }
		if (keyIsDown(this.player_controls[2])) { this.player_x + this.player_speed; }
		if (keyIsDown(this.player_controls[3])) { this.player_y + this.player_speed; }
		qwe("b");
		image(this.player_img, 10, 10);
	}
}