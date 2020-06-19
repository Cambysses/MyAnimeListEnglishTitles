// ==UserScript==
// @name     MyAnimeList English Titles
// @version  1
// @include http*://myanimelist.net/topanime.php*
// @include http*://myanimelist.net/topmanga.php*
// @include http*://myanimelist.net/search/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// @grant    none
// @run-at document-end
// ==/UserScript==



// Top Anime
if (location.href.includes('https://myanimelist.net/topanime.php'))
{
    let titles = document.getElementsByClassName("detail");
    for (i = 0; i < titles.length; i++)
    {
        let titleDetail = titles[i].getElementsByClassName("di-ib clearfix");
        let titleID = titleDetail[0].firstChild.id;
        let titleURL = titleDetail[0].firstChild.href;
        jQuery(titleID).load(titleURL + ' .title-english'); 
    }
}

// Top Manga
else if (location.href.includes('https://myanimelist.net/topmanga.php'))
{
    let titles = document.getElementsByClassName("detail");
    for(i = 0; i < titles.length; i++)
    {
        let titleDetail = titles[i].getElementsByTagName("a");
        let titleID = titleDetail[0].id;
        let titleURL = titleDetail[0].href;
        jQuery(titleID).load(titleURL + ' .title-english'); 
    }
}

// Search -- Does not work yet
else if (location.href.includes('https://myanimelist.net/search/'))
{
    let results = document.getElementsByClassName('js-scrollfix-bottom-rel');
    let titles = document.getElementsByClassName("hoverinfo_trigger fw-b fl-l");
    for (i = 0; i < titles.length; i++)
    {
        let titleID = titles[i].id;
        let titleURL = titles[i].href;
        jQuery(titleID).load(titleURL + ' .title-english');
    }
}
