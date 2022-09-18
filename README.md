# Arr Bot

> A custom sea of thieves helper bot that has quick links to guides and solutions

## Installation
### 🐋 Docker 
```shell
docker run -d \
--name=arrbot \
-p 6004:6004 \
-e DISCORD_TOKEN='INSERT DISCORD TOKEN' \
-e PREFIX='~' \
--restart unless-stopped \
kieranr27/arrbot:master
```

### 👷 Manual
- Clone the repo 
- Remove the `.template` from `.env.template`
- Add required variables to `.env` 
- Run `npm i`
- Run `node .`

---
## Contributions
While this bot is maintained by [Kieran](https://github.com/KieranRobson), contributors are welcome! 

## Invite
Invite Arr-Bot to your discord server: https://discord.com/api/oauth2/authorize?client_id=1011711622219313314&permissions=8&scope=bot%20applications.commands