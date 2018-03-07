    var app = angular.module('myApp', []);




app.directive('twitter', [
    function() {
        return {
            link: function(scope, element, attr) {
                setTimeout(function() {
                        twttr.widgets.createShareButton(
                            attr.url,
                            element[0],
                            function(el) {}, {
                                count: 'none',
                                text: attr.text
                            }
                        );
                });
            }
        }
    }
]);




    //Controller
    app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
        $scope.imageData = []; //json array

        $scope.showSinglePic =  document.URL.split('?')[1];

        var apiURL = undefined;


        var contentCode = $scope.showSinglePic ?  $scope.showSinglePic.split('&')[0] : null;
        var navCode = $scope.showSinglePic ? $scope.showSinglePic.split('&')[1] : null;

        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    //you also get the actual event object
    //do stuff, execute functions -- whatever...
    alert('finish');

     $scope.$apply();
});

        if ((contentCode != null) && (navCode == 'a' ))
        {
          
              apiURL = 'http://www.reddit.com/r/MEOW_IRL/hot/.json?limit=5&count=5&after=' + contentCode;
              next_page = null;
          }
          else if ((contentCode != null) && (navCode == 'p' ))
          {
               apiURL = 'http://www.reddit.com/r/MEOW_IRL/hot/.json?limit=5&count=5&before=' + contentCode;
               next_page = null;
          }
          else if ((contentCode != null) && (navCode == 's' ))
          {
               apiURL = 'http://www.reddit.com/by_id/' + contentCode + '.json'; //Single Pic
               next_page = null;
          }

          else
              apiURL = 'http://www.reddit.com/r/MEOW_IRL/hot/.json?limit=5'; //Home page default load


          $scope.shareOnFacebook = function(img, code, gif)
          {
            if(gif)
            {
                FB.ui({
                    method: 'feed',
                    name: 'No Turning Back Meow',
                    link: img,
                    caption: "The #1 source for your daily fix of cats. Unlimited cats. Updates daily. NoTurningBackMeow.tk",
                    description: "The #1 source for your daily fix of cats. Unlimited cats. Updates daily. &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; http://noturningbackmeow.tk/?" + code ,
                }, function(response) {
                    if(response && response.post_id){}
                        else{}
                    });
            }

            else
            {

                FB.ui({
                    method: 'feed',
                    name: 'No Turning Back Meow',
                    link: "http://noturningbackmeow.tk?" + code,
                    caption: "NoTurningBackMeow.tk",
                    picture: img,
                    description: 'The #1 source for your daily fix of cats. Unlimited cats. Updates daily.'
                }, function(response) {
                    if(response && response.post_id){}
                        else{}
                    });
            }
        }


        $scope.nextClick = function(nextCode)
        {
        $scope.imageData = []; //Clear current content and load new content
        apiURL = 'http://www.reddit.com/r/MEOW_IRL/hot/.json?limit=5&count=5&after=' + nextCode;
        $scope.loadImages(apiURL);
    }

    $scope.previousClick = function(previousCode, nextCode)
    {
        $scope.imageData = []; //Clear current content and load new content
        apiURL = 'http://www.reddit.com/r/MEOW_IRL/hot/.json?limit=5&count=5&before=' + previousCode;
        $scope.loadImages(apiURL);
    }

    $scope.loadImages = function (apiURL) {

      $scope.in_progress= true;

    //  if (apiURL === undefined)


    $http.get(apiURL).success(function (data) {

        $scope.next_page =   data.data.after;
        $scope.previous_page =  data.data.before;

        angular.forEach(data.data.children, function (item) {

            var url = checkURL(item.data.url, $scope);

            $scope.permalink = 'http://www.reddit.com' + item.data.permalink;                

            if (url) 
                     $scope.imageData.push({"imageCodeName": item.data.name, "imageURL": url, "imageGifIndicator": $scope.gifIndicator, "permaLink": $scope.permalink }); //create parallel json array



                 $('meta[name=og\\:image]').attr('content', url);

             });

        $scope.in_progress= false;
    });
}; //end $scope.loadImages

$scope.loadImages(apiURL);

}]);


//Will return false if URL is not valid otherwise returns URL address
function checkURL(url, $scope) {

   $scope.gifIndicator = false;


        //Fix GIF extension
        if (url.indexOf("gifv") > -1)
            url = url.replace('.gifv', '.gif');




        var extension = url.split('.').pop();



        switch (extension) {

            case 'jpg':

            case 'jpeg':

            case 'png':

            break;



            case 'gif':

            case 'gifv':

            $scope.gifIndicator = true;

            break;


            case 'mp4':
            url = url.replace('.mp4', '.gif');

            break;



            case 'com/r/MEOW_IRL/comments/2wikpo/meow_irl/':

            url = false;

            break;



            default:

            if (url.indexOf("imgur") > -1) {
                url = url + '.jpg';

                if (url.indexOf("gallery") > -1) {
                  url = url.replace('/gallery', '');
              }

          }
          else {
            url = false;
        }




        break;



    }



    return (url);

}







