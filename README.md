# Arr Bot

> A custom sea of thieves helper bot that has quick links to guides and solutions

## Installation
### Docker 

```shell
docker run -d \
--name=arrbot \
-p 6004:6004 \
-e DISCORD_TOKEN='INSERT DISCORD TOKEN' \
-e PREFIX='~' \
--restart unless-stopped \
kieranr27/arrbot:master
```