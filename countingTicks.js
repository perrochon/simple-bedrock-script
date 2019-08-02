// Minimal server side script: Broadcast every 100 ticks. Noisy, but confirms server scripts are running.
system = server.registerSystem(0, 0);

var tickNumber = 0;

system.update = function () {
    // increase the tick number
    tickNumber++;

    // if the tick number is exactly divisible by 100 (so every few seconds);
    if (tickNumber % 100 === 0) {
        let BroadcastEventData = this.createEventData("minecraft:display_chat_event");
        BroadcastEventData.data.message = "Tick " + tickNumber.toString();
        this.broadcastEvent("minecraft:display_chat_event", BroadcastEventData);
    }
};    
