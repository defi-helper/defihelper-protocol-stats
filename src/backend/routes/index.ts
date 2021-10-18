import { Router } from 'express';

import { CoinGecko, CoinMarketCap } from './v1/Coin';
import Followers from './v1/Followers';
import {Medium as PostRouteMedium} from './v1/Post';

const apiV1Router = Router();

apiV1Router.get('/coin/CoinGecko/:id', CoinGecko);
apiV1Router.get('/coin/CoinMarketCap/:id', CoinMarketCap);

apiV1Router.get('/post/Medium/:username', PostRouteMedium);
apiV1Router.get('/followers', Followers);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/v1', apiV1Router);

export default baseRouter;
