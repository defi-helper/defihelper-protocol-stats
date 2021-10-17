# protocol-stats

## Install
1. `cp ./.env.dist ./.env`
2. `npm i`
3. `npm run build`

## Run
* `npm run start:dev`
* `npm run start`
* `npm run build`

# Cli
* `npm run cli TestToolEcho`

# Routes
* `GET /api/v1/followers`
  * telegramChannel: string
  

* `GET /api/v1/coin`
  * coinGeckoUrl: string
  * coinMarketCapUrl: string
  

* `GET /api/v1/posts`
  * twitterRssFeedUrl: string
  * mediumRssFeedUrl: string