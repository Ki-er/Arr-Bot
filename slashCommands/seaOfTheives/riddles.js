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
            .setColor('GREEN')
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
            .setColor('GREEN')
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



    },
};