system = server.registerSystem(0, 0);

system.initialize = function() {
	// Mobs die all the time, so let's react to Mob death...
	this.listenForEvent("minecraft:entity_death", (eventData) => this.onEntityDeath(eventData));
};

system.onEntityDeath = function (eventData) {
        let BroadcastEventData = this.createEventData("minecraft:display_chat_event");
        BroadcastEventData.data.message = "Rest in Peace";
        this.broadcastEvent("minecraft:display_chat_event", BroadcastEventData);
};
