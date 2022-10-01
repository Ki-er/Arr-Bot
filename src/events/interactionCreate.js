const client = require('../index');

client.on('interactionCreate', async (interaction) => {
	// Slash Command Handling
	if (interaction.isCommand()) {
		const cmd = client.slashCommands.get(interaction.commandName);
		if (!cmd) return interaction.reply({ content: 'An error has occured ' });

		const args = [];

		for (let option of interaction.options.data) {
			if (option.type === 'SUB_COMMAND') {
				if (option.name) args.push(option.name);
				option.options?.forEach((x) => {
					if (x.value) args.push(x.value);
				});
			} else if (option.value) args.push(option.value);
		}
		interaction.member = interaction.guild.members.cache.get(
			interaction.user.id
		);

		cmd.run(client, interaction, args);
	}

	// Context Menu Handling
	if (interaction.isContextMenu()) {
		await interaction.deferReply({ ephemeral: false });
		const command = client.slashCommands.get(interaction.commandName);
		if (command) command.run(client, interaction);
	}

	// Button Handling
	if (interaction.isButton()) {
		if (interaction.customId == 'codeOfConduct') {
			if (interaction.member.roles.cache.has('973646380771979304')) {
				interaction.reply({
					content: 'You already have agreed to the code of conduct!',
					ephemeral: true,
				});
			} else {
				interaction.member.roles.add('973646380771979304');
				await interaction.reply({
					content:
						'Thank you for agreeing to the code of conduct!\r\nYou can now access the rest of the server!',
					ephemeral: true,
				});
			}
		}
	}
});
