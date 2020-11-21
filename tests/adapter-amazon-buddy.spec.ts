import {asin} from '../lib';
import {inspect} from 'util';

describe('adapterAmazonBuddy', () => {
    it('asin B07MGMGH9D', async function () {
        const res = await asin({asin: 'B07MGMGH9D'});
        console.log(inspect(res, false, null));
    });
});
