function g_tilemap()
{
	this.mapW;
	this.mapH;
	this.tileW;
	this.tileH;
	this.tile;
	this.img;
	this.tiles = [];
	
	this.load = function(tile, img, tileW, tileH)
	{	
		this.tileW = tileW;
		this.tileH = tileH;
		this.img = img;
		this.tile = tile;
		
		console.log(this.tiles);
		
		this.mapW = (tile[0].length+1)/2;
		this.mapH = tile.length;
		
		console.log(this.tileW);
		for (x = 0; x < (16 / this.tileW); x++)
		{
			for (y = 0; y < (16 / this.tileH); y++)
			{
				this.tiles[x+y] = "Tiles: " + x * this.tileW + ", " + y * this.tileH + "!";
				console.log(x+y);
			}
		}
			
		console.log(this.tiles);
			
		// drawing map
		map = createGraphics(this.mapW * tileW, this.mapH * tileH);
		for (i = 0; i < this.mapH; i++)
		{
			for (j = 0; j < this.mapW; j++)
			{
				//map.image(this.img, this.mapW*this.tileW, this.mapH*this.tileH, this.tileW, this.tileH, );
			}
		}
			
		return map;
		
	}
		
}