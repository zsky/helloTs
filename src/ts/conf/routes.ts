import { Cyra, Page } from 'cyra';
//import { Cyra, Page } from '../../cyra/index';

import { debuger } from '../util/debuger';

const debug = debuger('hello:routes');

// base css
//import '../../style/transition.less';

debug('Info', Cyra, Page);
// pages
import home from '../view/home';
import result from '../view/result';

debug('Home', home);

// routes
let routeHome = Cyra.defineRoute('home', home);
let routeResult = Cyra.defineRoute('result', result);

// routes redirect
//Cyra.defineBackRouteRedirect(routeResult, routeHome, routeResult);

Cyra.initApp({
	root: 'body',
	default: 'home'
})
// Cyra.initApp({
//     root: 'body',
//     default: 'home',
//     pageTransition: {
//         fromPageDisappear: function (next) {
//             debug('fromPageDisappear');
//             next();
//         },
//         toPageAppear: function (next) {
//             debug('toPageAppear');
//             this.container.style.display = 'block';
//             this.container.className = 'fadeIn';
//             next(true);
//         }
//     }
// });
