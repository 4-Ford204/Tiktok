import config from '~/Config';

//Pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Live from '~/Pages/Live';

//Layouts
import HeaderOnlyLayout from '~/Layouts/HeaderOnlyLayout';

//Routes for guest users
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: config.routes.live, component: Live },
];

//Routes for logged in users
const privateRoutes = [];

export { publicRoutes, privateRoutes };
