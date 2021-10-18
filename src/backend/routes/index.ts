import { Router } from 'express';

import { CoinGecko as CoinRouteCoinGecko, CoinMarketCap as CoinRouteCoinMarketCap } from './v1/Coin';
import { Telegram as FollowerRouteTelegram } from './v1/Follower';
import PostRoute from './v1/Post';

const apiV1Router = Router();

apiV1Router.get('/coin/CoinGecko/:id', CoinRouteCoinGecko);
apiV1Router.get('/coin/CoinMarketCap/:id', CoinRouteCoinMarketCap);

apiV1Router.get('/post/:provider(Medium|Twitter)/:username', PostRoute);
apiV1Router.get('/follower/Telegram/:username', FollowerRouteTelegram);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/v1', apiV1Router);

export default baseRouter;
