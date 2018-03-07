<?php
// example of how to use basic selector to retrieve HTML contents
include('simple_html_dom.php');
 
// get DOM from URL or file
$html = file_get_html('https://www.facebook.com/kayla.renart/about?section=contact-info&pnref=about');


echo $html;

// find all span tags with class=gb1
foreach($html->find('code.hidden_elem') as $e)
    echo $e;

?>