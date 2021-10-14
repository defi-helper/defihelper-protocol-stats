import { Router } from 'express';

import Coin from './v1/Coin';
import Followers from './v1/Followers';
import Posts from './v1/Posts';

const apiV1Router = Router();
apiV1Router.get('/coin', Coin);
apiV1Router.get('/posts', Posts);
apiV1Router.get('/followers', Followers);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/v1', apiV1Router);

export default baseRouter;
