import { Given, When, Then } from 'cucumber';
import GoogleSearchPage from '../pages/googlesearchpage';
import SearchResultsPage from '../pages/searchresultspage';
import {assert} from 'chai';

Given(/^User is on Google search page$/, async function () {
    await GoogleSearchPage.open();
});

When(/^User searches for Selenium$/, async function () {
    await GoogleSearchPage.searchFor('Selenium');
});

Then(/^User can see Selenium results$/, async function () {
    assert.isTrue(await SearchResultsPage.isSeleniumPresent(), 'Selenium Link Not Present');
});

