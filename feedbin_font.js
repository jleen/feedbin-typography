// ==UserScript==
// @name         Feedbin Font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://feedbin.com/
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en');


    GM_addStyle(`
        body {
            font-family: 'DG Pro 42';
        }

        .entry-inner p {
            hyphens: auto;
            text-align: justify;
        }
`);
})();
