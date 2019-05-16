$(document).ready(function(){
    $.getJSON("portfolio.json", function(json) {
        console.log(json); // this will show the info it in firebug console

        portfolioArray = json.portfolio;
        console.log(portfolioArray);
        for(i = 0;i<portfolioArray.length;i++){
            let entry = '<div class="entry-'+ i +' card" >';
            let titleHeader = '<h5 class="card-title">' + portfolioArray[i].name +'</h5>';
            let endingdiv = '</div>';
            let paragraph = '<p class="summary">' + portfolioArray[i].description + "</p>";
            var link;
            if(portfolioArray[i].github == "false"){
                link = portfolioArray[i].message;
            }else{
                 link = "<a class=\"card-link\" target=\"_blank\" href=\""+ portfolioArray[i].github + "\">Github </a>";
            }
            
            $(".entries").append(entry,endingdiv);
            $(".entry-"+i).append(titleHeader,paragraph,link);

        }
    });
});
