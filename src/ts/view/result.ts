import { Cyra, Page, Action } from 'cyra';
//import { Cyra, Page, Action } from '../../cyra/index';

import tpl from '../../tpl/result';

import { debuger } from '../util/debuger';

const debug = debuger('hello:result');


debug('Page', Page);


class ResultPage extends Page {
    id (): string {
        return 'result';
    }

    // 定义跳转动作
    defineActions (): void {
        debug('defineActions');

        this.actions['GotoHome'] = Cyra.defineAction(this.id(), 'home');
    }

    initialize (next): void {
        debug('initialize', this.models.actions);

        next();
    }

    willAppear (next): void {
        debug('willAppear');

        let data = {
            name: this.transferData.gift,
            price: this.data.price
        };
        this.container.innerHTML = tpl(data);

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

    getState (originState): boolean {
        debug('getState');

        let randomNum = Math.round(Math.random());

        debug('state', originState, randomNum);
        return originState === randomNum;
    }

    setData (price, city): void {
        debug('setData');
        this.data.price = price;
        this.data.city = city;
    }
}

export default Cyra.definePage<ResultPage>(new ResultPage());
//Cyra.definePage(new ResultPage());
