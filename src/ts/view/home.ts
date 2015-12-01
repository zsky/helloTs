import { Cyra, Page, Action } from 'cyra';
//import { Cyra, Page, Action } from '../../cyra/index';

//import '../../style/home.less';
import tpl from '../../tpl/home';

import { debuger } from '../util/debuger';

const debug = debuger('hello:home');


function ajaxData (cb) {

    let mockData = { name: '抽奖'};

    setTimeout(() => {
        cb(mockData);
    }, 500)

}

debug('hehe');

debug('Page', Page);


class HomePage extends Page {
    id (): string {
        return 'home';
    }

    // 定义跳转动作
    defineActions (): void {
        debug('defineActions');

        let pageId = this.id;
        try {
            this.actions['GotoResult'] = Cyra.defineAction(this.id(), 'result');
        } catch (e) {
            console.log('error', e);
        }

    }

    // 执行跳转动作前（performAction)会执行
    prepareForAction (next: Function, action: Action, destinationPagePerform: Function): void {
        debug('prepareForAction');

        let randomNum = Math.round(Math.random());
        destinationPagePerform('setData', 5600, 'HK');

        if(destinationPagePerform('getState', randomNum)) {
            debug('prevented');
        } else {
            debug('executed');
            next();
        }
    }

    initialize (next): void {
        debug('initialize', this.models.actions);

        let a = {m: 1};
        ajaxData((data) => {
            next(data);
        })
    }

    willAppear (next, data): void {
        debug('willAppear');
        this.container.innerHTML = tpl(data);

        let btn = document.querySelector('.btn');

        btn.addEventListener("click", () => {
            this.performAction(this.actions['GotoResult'], { gift: 'ipone' });
        });
        next();
    }

    didAppear (next): void {
        debug('didAppear');

        next();
    }

    willDisappear (next): void {
        debug('willDisappear');

        next();
    }

}

export default Cyra.definePage<HomePage>(new HomePage());
//Cyra.definePage(new HomePage());
