const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    ...new SlashCommandBuilder()
        .setName('riddles')
        .setDescription('Links for riddles')
        .addStringOption(option =>
            option
            .setName('island')
            .setDescription('The island you are on')
            .setRequired(true)
            .addChoices(
                { name: 'Ashen Reaches', value: 'ashenreaches' },
                { name: 'Cannon Cove', value: 'cannoncove' },
                { name: 'Crescent Isle', value: 'crescentisle' },

            )),

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const string = interaction.options.getString('island');

        if(string == 'ashenreaches'){
            const embed = new MessageEmbed()
                .setTitle('Ashen Reaches')
                .setColor('BLUE')
                .setFooter({ text: `Called By: ${interaction.user.tag}`})         
                .setTimestamp()
                .addField(`Buoy on the North East shores`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Buoy%20on%20the%20North%20East%20shores|-10565.25390625_10179.904296875)`)
                .addField(`Burning torch high to the North`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Burning%20torch%20high%20to%20the%20North|-10518.5_10120.25)`)
                .addField(`Cave of bones to the North`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Cave%20of%20bones%20to%20the%20North|-10549.669921875_10135.731445312)`)
                .addField(`Explorers remains in the North cave of bones`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Explorer%27s%20remains%20in%20the%20North%20cave%20of%20bones|-10550.43359375_10130.995117188)`)
                .addField(`Fishermans long forgotten wares to the West`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Fisherman%27s%20long%20forgotten%20wares%20to%20the%20West|-10582.5_10097)`)
                .addField(`Forgotten rowboat to the East`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Forgotten%20rowboat%20to%20the%20East|-10598.702148438_10184.693359375)`)
                .addField(`Greedy looters remains to the North`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Greedy%20looter%27s%20remains%20to%20the%20North|-10580.87890625_10140.861328125)`)
                .addField(`Mutinous pirate to the South East`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Mutinous%20pirate%20to%20the%20South%20East|-10615.01171875_10190.716796875)`)
                .addField(`North East campfire`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|North%20East%20campfire|-10574.26953125_10166.703125)`)
                .addField(`North Scarecrow`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|North%20Scarecrow|-10533.57421875_10121.845703125)`)
                .addField(`Parrot`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Parrot|-10592.37890625_10125.861328125)`)
                .addField(`Rock passage between the boarposts to the North`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Rock%20passage%20between%20the%20boarposts%20to%20the%20North|-10571.412109375_10139.470703125)`)
                .addField(`South East lone boarpost`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|South%20East%20lone%20boarpost|-10626.6640625_10168.931640625)`)
                .addField(`South caves bone shrine`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|South%20cave%27s%20bone%20shrine|-10667.07421875_10178.470703125)`)
                .addField(`Unfortunate adventurer at the West pool`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Unfortunate%20adventurer%20at%20the%20West%20pool|-10609.268554688_10095.259765625)`)
                .addField(`Warning post to the East`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Warning%20post%20to%20the%20East|-10603.912109375_10162.970703125)`)
                .addField(`Withered tree to the North West`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Withered%20tree%20to%20the%20North%20West|-10551.6513671875_10165.8583984375)`)
                .addField(`Wooden jetty`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Wooden%20jetty|-10537.685546875_10187.319335938)`)
                .addField(`Eruption`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=rock_painting|Rock%20Painting|Eruption|-10501.990234375_10104.908203125)`)
                interaction.reply({ embeds: [embed]});
            }

            if(string == 'cannoncove'){
                const embed = new MessageEmbed()
                    .setTitle('Cannon Cove')
                    .setColor('BLUE')
                    .setFooter({ text: `Called By: ${interaction.user.tag}`})         
                    .setTimestamp()
                    .addField(`Abandoned rowboat on the North West shores`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Abandoned%20rowboat%20on%20the%20North%20West%20shores|-5592.9007568359_4474.9590454102)`)
                    .addField(`Campfire near the cave entrance to the East`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Campfire%20near%20the%20cave%20entrance%20to%20the%20East|-5607.6650390625_4521.2431640625)`)
                    .addField(`Cavern below Cannon Peak`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Cavern%20below%20Cannon%20Peak|-5611.9716339111_4505.5)`)
                    .addField(`End of the pier`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|End%20of%20the%20pier|-5538.6507568359_4442.2090454102)`)
                    .addField(`Fallen climber in the cavern below Cannon Peak`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Fallen%20climber%20in%20the%20cavern%20below%20Cannon%20Peak|-5607_4503.75)`)
                    .addField(`Forbidden tomes`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Forbidden%20tomes|-5600.6650390625_4514.2431640625)`)
                    .addField(`Forgotten castaway on the East shores`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Forgotten%20castaway%20on%20the%20East%20shores|-5605.6650390625_4552.7431640625)`)
                    .addField(`Giant’s Stone on the farthest West beach`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Giant%27s%20Stone%20on%20the%20farthest%20West%20beach|-5650.6650390625_4381.2431640625)`)
                    .addField(`Grove below the tip of Cannon Peak`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Grove%20below%20the%20tip%20of%20Cannon%20Peak|-5620.0347137451_4471.1122436523)`)
                    .addField(`Impaled adventurer to the South East`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Impaled%20adventurer%20to%20the%20South%20East|-5623.1650390625_4519.9931640625)`)
                    .addField(`Long abandoned beach camp`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Long%20abandoned%20beach%20camp|-5597.6315879822_4474.691696167`)
                    .addField(`Unfortunate explorer at the abandoned rowboat on the North West shores`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Unfortunate%20explorer%20at%20the%20abandoned%20rowboat%20on%20the%20North%20West%20shores|-5591.9007568359_4480.2090454102)`)
                    .addField(`Painted tale of a monstrous foe`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=rock_painting|Rock%20Painting|Painted%20tale%20of%20a%20monstrous%20foe|-5631.8310546875_4481.3876953125)`)
            interaction.reply({ embeds: [embed]});
        }

        if(string == 'crescentisle'){
            const embed = new MessageEmbed()
            .setTitle('Crescent Isle')
            .setColor('BLUE')
            .setFooter({ text: `Called By: ${interaction.user.tag}`})         
            .setTimestamp()
            .addField(`Angler's camp on the North East beach`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Angler%27s%20camp%20on%20the%20North%20East%20beach|-5313.02734375_2916.2958984375)`)
            .addField(`Five barnacled pots on the East beach`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Five%20barnacled%20pots%20on%20the%20East%20beach|-5423.1455078125_2977.4296875)`)
            .addField(`Grassy outcrop atop the cavern mouth looking to sea`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Grassy%20outcrop%20atop%20the%20cavern%20mouth%20looking%20to%20sea|-5399.03125_2892.1396484375)`)
            .addField(`Headless traveler taking shade atop the island`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Headless%20traveler%20taking%20shade%20atop%20the%20island|-5400.53125_2881.3896484375)`)
            .addField(`Hidden storage chamber`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Hidden%20storage%20chamber|-5418.78125_2882.3896484375)`)
            .addField(`Highest point`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Highest%20point|-5405.0932769775_2887.8334197998)`)
            .addField(`Lonely lookout on the South East coast`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Lonely%20lookout%20on%20the%20South%20East%20coast|-5469.8955078125_2944.4296875)`)
            .addField(`Potters smashed rowboat on the East beach`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Potter%27s%20smashed%20rowboat%20on%20the%20East%20beach|-5431.75_2951)`)
            .addField(`Rickety jetty on the North East shore`, `[Here](https://rarethief.com/sea-of-thieves-riddle-guide/#:~:text=Rickety%20jetty%20on%20the%20North%20East%20shore)`)
            .addField(`Rock pool to the North`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Rock%20pool%20to%20the%20North|-5355.28125_2887.8896484375)`)
            .addField(`Rowboat shooting range to the North East`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Rowboat%20shooting%20range%20to%20the%20North%20East|-5324.78125_2920.3896484375)`)
            .addField(`Scarecrow on the far East shore`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Scarecrow%20on%20the%20far%20East%20shore|-5436.1455078125_2972.9296875)`)
            .addField(`Sky View Cavern`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Sky%20View%20Cavern|-5392.7697601318_2867.6700210571)`)
            .addField(`South East narrow rocky pass leading to the cave`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|South%20East%20narrow%20rocky%20pass%20leading%20to%20the%20cave|-5432.6455078125_2930.4296875)`)
            .addField(`Sun starved palm`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Sun%20starved%20palm|-5391.03125_2871.6396484375)`)
            .addField(`Tallest tree at the highest point`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Tallest%20tree%20at%20the%20highest%20point|-5399.78125_2885.1396484375)`)
            .addField(`Three skull totem near the tunnel entrance`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Three%20skull%20totem%20near%20the%20tunnel%20entrance|-5427.3955078125_2934.6796875)`)
            .addField(`Top of the rock pool waterfall to the North`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Top%20of%20the%20rock%20pool%20waterfall%20to%20the%20North|-5360.75_2885)`)
            .addField(`Unfortunate angler on the North East beach`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Unfortunate%20angler%20on%20the%20North%20East%20beach|-5309.28125_2919.1396484375)`)
            .addField(`Water well to the South East`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Water%20well%20to%20the%20South%20East|-5444.8955078125_2941.9296875)`)
            .addField(`Wooden bridge`, `[Here](https://maps.seaofthieves.rarethief.com/index.html?marker=landmark|Landmark|Wooden%20bridge|-5404.75390625_2880.7596435547)`)

            interaction.reply({ embeds: [embed]});
        }


    },
};