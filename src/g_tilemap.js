function g_tilemap()
{
	this.mapW;
	this.mapH;
	this.tileW;
	this.tileH;
	this.map;
	this.img;
	this.tiles = [];
	
	this.load = function(map, img, tileW, tileH)
	{	
		this.tileW = tileW;
		this.tileH = tileH;
		this.img = img;
		this.map = map;
		
		this.mapW = (map[0].length+1)/2;
		this.mapH = map.length;
		
		for (x = 0; x < (this.img.width / this.tileW); x++)
		{
			for (y = 0; y < (this.img.height / this.tileH); y++)
			{
				this.tiles[y*(this.img.width / this.tileW)+x] = [x * this.tileW, y * this.tileH];
			}
		}
		
		map = createGraphics(this.tileW * this.mapW, this.tileH * this.mapH);
		
		for (i = 0; i < this.mapH; i++)
		{
			col = this.map[i].split(",");
			for (j = 0; j < this.mapW; j++)
			{	
				map.copy(this.img, this.tiles[col[j]][0], this.tiles[col[j]][1], this.tileW, this.tileH, j*this.tileW, i*this.tileH, this.tileW, this.tileH);
			}
		}

		return map;
	}
}