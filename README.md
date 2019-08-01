# Simple Bedrock Script

Simple Script for Bedrock Server and - more importantly - steps to make it work. Good luck.

Goal: Run Minecraft Bedrock Dedicated Server on Windows with server side scripts!

### Beware
* Currently, client scripts only work on Windows 10 (not on iOS, Android, etc.). You can run server scripts in the server and connect from iOS/Android, but what you can do is somewhat limited.
* Things change frequently. So everything below may be outdated soon. This is last updated and checked for 1.12.0.28
* Things are very fragile. There are no good tools available. One missing comma, and stuff stops working
* Much is based on this Reddit comment from agent_4125: https://www.reddit.com/r/MCPE/comments/awjzh7/help_implementing_bedrock_server_addons/eizlaf4

### Why do you want to do this?
* You use Minecraft Bedrock instead of Minecraft Java Server Edition because you want interoperability with mobile devices. Otherwise you Java Server Edition, it's a lot more powerful.
* You want a dedicated server because you don't want/can't run Minecraft for Windows 10. Otherwise run Microsoft for Windows 10 which has a server and a client as is overall a lot more user friendly to run. 

# 1. Install Bedrock Server
This is pretty well documented elsewhere. Continue here once you have the server running and can connect to it from a mobile device.

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

If successful, it will prompt a connecting client (e.g. iPhone) to download the resource pack. That tells you it's all working fine.

If you downloaded a world pack (e.g. alien-invasion) unzip into the `worlds` subfolder, then move the 
behavior and resource packs to to the above folders. The `world_<>_packs.json` files will be already there.
You will need to change the level-name in the servers.properties file to point to the right world folder.
You can only have one world/level running at the same time in Bedrock.

    #level-name=Bedrock level
    level-name=alien-invasion

## Updating add-ons

If you are actively developing a resource pack (i.e. changing it) you need to increment the version number
in two locations, the pack itself, and the world.

    \server\resource_packs\CoolAlliga\manifest.json
    \server\worlds\your_world\world_resource_packs.json

Then restart the server, and it will pick the changes up (and prompt clients to download). 

# 3. Scripts
To run scripts, you need to put your world into experimental mode. There are several ways to do this.

## Use Minecraft for Windows 10
You create the world in the full game and export it. Then import it to server. This is documented elsewhere, and I haven't tried it as I don't have Minecraft for Windows 10.

## Patch levels.dat
You patch a (binary) data file. This worked for me, but is taking dedication. You need a good editor, like Notepad++ so the file doesn't get corrupted. First find the file

    server_folder/world/world_name/level.dat

If you use Notepad++ it will say something like

    experimentalgameplay[NUL][SOH]

[NUL] and [SOH] are each just one special control character. Copy the [SOH] character and replace the [NUL]. Make it look like

    experimentalgameplay[SOH][SOH]

This did the trick for me. (Everytime you patch files like this, make a backup copy first...)
