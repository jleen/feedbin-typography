// ==UserScript==
// @name         Feedbin Font
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  pleasant typography for Feedbin
// @author       John M. Leen
// @match        https://feedbin.com/
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    // Hyphenation requires a language declaration.
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en');

    GM_addStyle(`
        body {
            font-family: 'DG Pro 42';  // Or bring your favorite.
        }

        .entry-inner p {
            hyphens: auto;
            text-align: justify;
        }
`);
})();
