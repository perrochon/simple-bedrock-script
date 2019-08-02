# Full Command List

You can retrieve the list from the server with `?`, and then `? 2`, `? 3`, etc.

/? [command: CommandName]
/? <page: int>
/alwaysday [true|false]
/changesetting allow-cheats <true|false>
/changesetting difficulty <value: Difficulty>
/changesetting difficulty <value: int>
/clear [player: target] [itemName: Item] [data: int] [maxCount: int]
/clone <begin: x y z> <end: x y z> <destination: x y z> [replace|masked] [normal|force|move]
/clone <begin: x y z> <end: x y z> <destination: x y z> filtered <normal|force|move> <tileName: Block> <tileData: int>
/connect <serverUri: text>
/daylock [true|false]
/deop <player: target>
/difficulty <difficulty: Difficulty>
/difficulty <difficulty: int>
/effect <player: target> clear
/effect <player: target> <effect: Effect> [seconds: int] [amplifier: int] [true|false]
/enchant <player: target> <enchantmentName: Enchant> [level: int]
/enchant <player: target> <enchantmentId: int> [level: int]
/execute <origin: target> <position: x y z> <command: command>
/execute <origin: target> <position: x y z> detect <detectPos: x y z> <block: Block> <data: int> <command: command>
/fill <from: x y z> <to: x y z> <tileName: Block> [tileData: int] [outline|hollow|destroy|keep]
/fill <from: x y z> <to: x y z> <tileName: Block> <tileData: int> replace [replaceTileName: Block] [replaceDataValue: int]
/function <name: filepath>
/function <name: string>
/gamemode <gameMode: GameMode> [player: target]
/gamemode <gameMode: int> [player: target]
/gamerule
/gamerule <rule: BoolGameRule> [true|false]
/gamerule <rule: IntGameRule> [value: int]
/give <player: target> <itemName: Item> [amount: int] [data: int] [components: json]
/help [command: CommandName]
/help <page: int>
/kick <nameOrXuid: string> <reason: message>
/kill [target: target]
/list
/locate <feature: Feature>
/me <message: message>
/mobevent <minecraft:pillager_patrols_event|minecraft:wandering_trader_event|events_enabled> [true|false]
/msg <target: target> <message: message>
/op <player: target>
/ops <list|reload>
/particle <effect: string> <position: x y z>
/permission <list|reload>
/playsound <sound: string> [player: target] [position: x y z] [volume: float] [pitch: float] [minimumVolume: float]
/reload
/replaceitem block <position: x y z> slot.container <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]
/replaceitem entity <target: target> <slotType: EntityEquipmentSlot> <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]
/save <query|hold|resume>
/say <message: message>
/scoreboard objectives add <objective: string> dummy [displayName: string]
/scoreboard objectives remove <objective: string>
/scoreboard objectives list
/scoreboard objectives setdisplay <list|sidebar> [objective: string] [ascending|descending]
/scoreboard objectives setdisplay belowname [objective: string]
/scoreboard players list [playername: target]
/scoreboard players reset <player: target> [objective: string]
/scoreboard players test <player: target> <objective: string> <min: wildcard int> [max: wildcard int]
/scoreboard players random <player: target> <objective: string> <min: int> <max: int>
/scoreboard players <add|remove|set> <player: target> <objective: string> <count: int>
/scoreboard players operation <targetName: target> <targetObjective: string> <operation: operator> <selector: target> <objective: string>
/setblock <position: x y z> <tileName: Block> [tileData: int] [replace|destroy|keep]
/setmaxplayers <maxPlayers: int>
/setworldspawn [spawnPoint: x y z]
/spawnpoint [player: target] [spawnPos: x y z]
/spreadplayers <x: value> <z: value> <spreadDistance: float> <maxRange: float> <victim: target>
/stop
/stopsound <player: target> [sound: string]
/summon <entityType: EntityType> [spawnPos: x y z] [spawnEvent: string]
/tag <entity: target> <add|remove> <name: string>
/tag <entity: target> list
/teleport <destination: x y z> [yRot: value] [xRot: value]
/teleport <destination: x y z> facing <lookAtPosition: x y z>
/teleport <destination: x y z> facing <lookAtEntity: target>
/teleport <victim: target> <destination: x y z> [yRot: value] [xRot: value]
/teleport <victim: target> <destination: x y z> facing <lookAtPosition: x y z>
/teleport <victim: target> <destination: x y z> facing <lookAtEntity: target>
/teleport <destination: target>
/teleport <victim: target> <destination: target>
/tell <target: target> <message: message>
/tellraw <target: target> <raw json message: json>
/testfor <victim: target>
/testforblock <position: x y z> <tileName: Block> [dataValue: int]
/testforblocks <begin: x y z> <end: x y z> <destination: x y z> [masked|all]
/tickingarea add <from: x y z> <to: x y z> [name: string]
/tickingarea add circle <center: x y z> <radius: int> [name: string]
/tickingarea remove <position: x y z>
/tickingarea remove <name: string>
/tickingarea remove_all
/tickingarea list [all-dimensions]
/time add <amount: int>
/time set <amount: int>
/time set <time: TimeSpec>
/time query <daytime|gametime|day>
/title <player: target> clear
/title <player: target> reset
/title <player: target> <title|subtitle|actionbar> <titleText: message>
/title <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>
/titleraw <player: target> clear
/titleraw <player: target> reset
/titleraw <player: target> <title|subtitle|actionbar> <raw json titleText: json>
/titleraw <player: target> times <fadeIn: int> <stay: int> <fadeOut: int>
/toggledownfall
/tp <destination: x y z> [yRot: value] [xRot: value]
/tp <destination: x y z> facing <lookAtPosition: x y z>
/tp <destination: x y z> facing <lookAtEntity: target>
/tp <victim: target> <destination: x y z> [yRot: value] [xRot: value]
/tp <victim: target> <destination: x y z> facing <lookAtPosition: x y z>
/tp <victim: target> <destination: x y z> facing <lookAtEntity: target>
/tp <destination: target>
/tp <victim: target> <destination: target>
/videostream <serverUri: string> <screenshotSendFrequency: value>
/videostream <serverUri: string> <screenshotSendFrequency: value> <desiredResolutionX: int> <desiredResolutionY: int>
/videostreamaction <none|close>
/w <target: target> <message: message>
/weather <clear|rain|thunder> [duration: int]
/weather query
/whitelist <action: WhitelistAction> [name: string]
/wsserver <serverUri: text>
/xp <amount: int> [player: target]
/xp <amount: int>L [player: target]
