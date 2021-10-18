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
  

* `GET /api/v1/coin/:provider/:coinId`
  * `:provider`: `CoinMarketCap` or `CoinGecko`
  * `:coinId`: string, ex. `waves`, `binance-coin`
  

* `GET /api/v1/post/:provider/:username`
  * `:provider`: `Twitter` or `Medium`
  * `:username`: string, ex. `bondappetit`, `drckangelo`