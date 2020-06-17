// ==UserScript==
// @name     MyAnimeList English Titles
// @version  1
// @include http*://myanimelist.net/topanime.php*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// @grant    none
// @run-at document-end
// ==/UserScript==

// Runs query for every title and appends English name if it exists.
const animes = document.getElementsByClassName("detail");
for(i = 0; i < animes.length; i++)
{
    var animeDetail = animes[i].getElementsByClassName("di-ib clearfix");
    var animeID = animeDetail[0].firstChild.id;
    var animeURL = animeDetail[0].firstChild.href;
    jQuery(animeID).load(animeURL + ' .title-english'); 
}
