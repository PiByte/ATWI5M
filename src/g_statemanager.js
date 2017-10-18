function g_statemanager()
{
	this.states = [];
	this.current_state_id = 0;
	
	this.new_state = function(state)
	{
		this.states.push(state);
	}
	
	this.change_state = function(id)
	{
		this.current_state_id = id;
	}
	
	this.get_state = function()
	{
		return this.states[this.current_state_id];
	}
}