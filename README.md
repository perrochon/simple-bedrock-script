# Simple Bedrock Dedicated Server Script

Simple Script for Bedrock Server and - more importantly - steps to make it work. The script should work on any Bedrock, but the tricky bit is making things work on the dedicated server.

**Goal:** Run Minecraft Bedrock Dedicated Server on Windows with a server side script. Connect from mobile device and see script in action. 

Once you have this script running, you can continue with more exciting scripts.

### Beware
* Dedicated Bedrock Server is in alpha. This means things change frequently and changes will break working scripts. Everything here may be outdated soon. The below is last updated and checked for 1.12.0.28 (check version history of the file for details)
* Things are very fragile. There are no good tools available. One missing comma, and stuff stops working.
* Currently, client scripts only work on Windows 10 (not on iOS, Android, etc.). But you can run server scripts in the server and connect from iOS/Android.

### Why do you want to do this?
* You use Minecraft Bedrock instead of Minecraft Java Server Edition because you want interoperability with mobile devices. Otherwise you Java Server Edition, it's a lot more powerful, and probably better documented.
* You want a dedicated server because you don't want/can't run the full Minecraft for Windows 10. Otherwise run Microsoft for Windows 10 which has a server and a client and is overall a lot more user friendly to run. Much of the official documentation is for that (e.g. the location of the content log file) 
** The main reason to run the server only is to run it in the background, or in the cloud and keep it running all the time.
** The other reason is because it's fun.

### References
* Much of the add-on text is based on this Reddit comment from agent_4125: https://www.reddit.com/r/MCPE/comments/awjzh7/help_implementing_bedrock_server_addons/eizlaf4
* Offical bedrock server documentation: https://minecraft.gamepedia.com/Bedrock_Dedicated_Server
* Official add-on documentation: https://minecraft.gamepedia.com/Add-on
* Official script documentation: https://minecraft.gamepedia.com/Bedrock_Edition_scripting_documentation 

# 1. Install Bedrock Server
installing Bedrock server is pretty well documented elsewhere. Click on the link abvoe to start. Continue here once you have the server running and can connect to it from a mobile device.

Things to look out for in the `server.properties` file

    # Make it easy to debug stuff
    allow-cheats=true
    gamemode=creative
    online-mode=false
    
    # We will need this for add-ons
    texturepack-required=true


# 2. Introducing add-ons to Bedrock Server

Find a behavior pack (eg.g CoolAligators), download, and unzip. You have to add the behavior pack to these folders (I add everything unzipped):

    \server\behavior_packs\CoolAlliga

And the resource pack here:

    \server\resource_packs\CoolAlliga

If they are at the right spot and valid, the server will read them on start and add them to the file

    \server\valid_known_packs.json

It will look like

   {
        "file_system" : "RawPath",
        "path" : "resource_packs/CoolAlliga",
        "uuid" : "0ca59398-f5ce-11e8-8eb2-f2801f1b9fd1",
        "version" : "1.8.0"
    },

    {
        "file_system" : "RawPath",
        "path" : "behavior_packs/CoolAlliga",
        "uuid" : "b2d39a5c-f5c5-11e8-8eb2-f2801f1b9fd1",
        "version" : "1.8.0"
    }

Now you need to add the packs to your world. The files to edit are:

    \server\worlds\your_world\world_behavior_packs.json
    \server\worlds\your_world\world_resource_packs.json

The formatting is different, but you add the uuid and version like this:

    {
        "pack_id" : "b2d39a5c-f5c5-11e8-8eb2-f2801f1b9fd1",
        "version" : [ 1, 8, 0 ]
    }

If successful, it will prompt a connecting client (e.g. iPhone) to download the resource pack. (You did require that in `server.properties`, yes?That tells you it's all working fine.

If you downloaded a world pack (e.g. alien-invasion) unzip into the `worlds` subfolder, then move the 
behavior and resource packs to to the above folders. The `world_<>_packs.json` files will be already there.
You will need to change the level-name in the servers.properties file to point to the right world folder.
You can only have one world/level running at the same time in Bedrock.

    #level-name=Bedrock level
    level-name=alien-invasion
    
Now you know that add-ons are basically working. The server finds them, loads them, and sends anything necessary to the client. Scripts is pretty much just more of the same.

## Updating add-ons

If you are actively developing a resource pack (i.e. changing it) you need to increment the version number
in two locations, the pack itself, and the world.

    \server\resource_packs\CoolAlliga\manifest.json
    \server\worlds\your_world\world_resource_packs.json

Then restart the server, and it will pick the changes up (and prompt clients to download). 

# 3. Scripts

First you get the Vanilla Behavior pack and add it (see above). You can get the pack and some more information from here

https://minecraft.gamepedia.com/Bedrock_Edition_beta_scripting_documentation

It doesn't have any scripts in the folder, so you have to create one. The code below is in the file [`simpleServerScript.js`](simpleServerScript.js).

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

I don't know where any error messages go (if they go anywhere), so if there is anything wrong with your code, even a single missing `;`, it will silently fail. I started validating all code in a separate JavaScript validator (google will find you one).

Note: To actually run scripts, *you need to put your world into experimental mode.* There are at least two ways to do this.

## Use Minecraft for Windows 10
You create the world in the full game and export it. Then import it to the server. This is documented elsewhere, and I haven't tried it as I don't have Minecraft for Windows 10. It may work with Minecraft on iPad, but moving random files from iPad to Windows is tricky, too.

## Patch levels.dat
You patch a (binary) data file. You need a good editor, like Notepad++ so the file doesn't get corrupted. Everytime you patch files like this, make a backup copy first...

First find the file

    server_folder/world/world_name/level.dat

If you use Notepad++ it will say something like

    experimentalgameplay[NUL][SOH]

[NUL] and [SOH] are each just one special control character. Copy the [SOH] character and replace the [NUL]. Make it look like

    experimentalgameplay[SOH][SOH]

This did the trick for me. Quick, easy, ugly. Patching binary code is really not a good way of developing software, but right now it seems the best way for me.

## Future Features
* Experimental a setting in server.properties.
* Content error logging (this is supposed to work, but I don't know where the content file would be)
* Overall better reporting of any issues
* Client side scripts on clients other than Windows 10, foremost Android and iOS
