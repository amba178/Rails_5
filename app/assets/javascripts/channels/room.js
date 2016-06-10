App.room = App.cable.subscriptions.create("RoomChannel", {
	connected: function(){},
	disconnected: function(){},
	received: function(data){
		$('#messages').append(data['message']);
	},
	speak: function(message){
		return this.perform('speak', {message: message});
	}
});

$(document).on('keypress', '[data-behavior~=room_speaker]', function(event){
	if(event.keyCode===13){
		App.room.speak(event.target.value);
		event.target.value = '';
		event.preventDefault();
	}
})


// // App.room = App.cable.subscriptions.create "RoomChannel",
//   connected: ->
//     # Called when the subscription is ready for use on the server

//   disconnected: ->
//     # Called when the subscription has been terminated by the server

//   received: (data) ->
//     # Called when there's incoming data on the websocket for this channel

//   speak: ->
//     @perform 'speak'
