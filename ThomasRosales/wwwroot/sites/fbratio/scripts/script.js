var app = angular.module('myApp', ["chart.js", 'ngAnimate']);


var token = 'CAAVFqq1XZBcYBAOpsckJRwivtGAxdtNgNZBJxPWAr62CPBemuJZBZCu2DA0Mota7hT6lfwoFepGpkxqZBsmmXZC4LIjzUBHZBAEsqDRvGZA6JwourTdgF2wiAdeEjN3ex0t0TrgVS0By8LhN37ZBiVPQQVvgv0JCPwu5X9gVmj6LULkAXW0oYmTNmjnS2qi8D3OEZC1qe6seVvQmxZARVBdCq6D';


app.controller('MainCtrl', function ($scope, $http) {

    $scope.attending = [];
    $scope.loading = false;


    // we control our app from here
    $scope.submit = function () {
        $scope.dataStatisticsShow = false;
        $scope.statusText = "Submit button pressed";
        $scope.male = 0;
        $scope.female = 0;
        $scope.unknown = 0;
        $scope.attending = [];
        $scope.ratio = 0;

        //Chart data
        $scope.labels = ["Male", "Female", "Unknown"];
        $scope.barSeries = ['Name Accuracy'];
        $scope.barLabels = ['Total Accuracy', 'Female Name Accuracy', 'Male Name Accuracy'];
        $scope.colours = ['#3366CC', '#FF99FF', '#333333'];
        $scope.data = [];
        $scope.barData = [];

        $scope.loading = true;
        $scope.nameGuessAccuracy = 0;
        $scope.femaleNameAccuracy = 0;
        $scope.maleNameAccuracy = 0;
        $scope.sausageFestPositive = false;
        $scope.analysisComplete = false;
        $scope.fishMarketPositive = false;


        /* Get Facebook Event Info */
        FB.api("/" + $scope.eventId,
        {
            access_token: token
        },
       function (response) {
           if (response && !response.error) {
               $scope.eventName = response.name;
               $scope.eventCity = response.place.location.city;
               $scope.eventStreet = response.place.location.street;
               $scope.eventZip = response.place.location.zip;
               $scope.eventState = response.place.location.state;
               $scope.eventCountry = response.place.location.country;
               $scope.eventPlaceName = response.place.name;
           }
       });


        /* make the FB API call GET PEOPLE ATTENDING EVENT */
        FB.api("/" + $scope.eventId + "?fields=attending.limit(50)",
        {
            access_token: token
        },
       function (response) {
           if (response && !response.error) {

               /* loop each person */
               angular.forEach(response.attending.data, function (attendee, index) {
                   $scope.statusText = "Getting data..."; // this is where loading takes long
                   $scope.totalAttendees = response.attending.data.length;


                   var attendeeImage = "";           
                   /* get attendee profile picture */
                   FB.api("/" + attendee.id + "/picture?type=square",
                   {
                       access_token: token
                   },
                  function (response) {
                      if (response && !response.error) {
                          attendeeImage = response.data.url;
                          $scope.statusText = "Get picture";
                      }
                  });

                   var res = attendee.name.split(" ");

                   if (res[1] == '')
                       if (res[2] != '')
                           res[1] = res[2];

                   //GET GENDER FROM NAME for each person
                   var url = 'http://api.namsor.com/onomastics/api/json/gender/' + res[0] + '/' + res[1];

                 var request =  $http({
                       method: 'GET',
                       url: url
                   }).then(function successCallback(response) {
                       $scope.statusText = "Getting gender for " + attendee.name;
                       $scope.dataStatisticsShow = true;
                       var scale = parseInt((Math.abs(response.data.scale * 100)).toFixed());

                       switch (response.data.gender) {
                           case "female":
                               $scope.female++;
                               $scope.femaleNameAccuracy += scale;
                               break;

                           case "male":
                               $scope.male++;
                               $scope.maleNameAccuracy += scale;
                               break;

                           default:
                               $scope.unknown++;
                               break;
                       }     


                       $scope.nameGuessAccuracy += scale;

                       $scope.attending.push({
                           "name": attendee.name,
                           "gender": response.data.gender,
                           "picture": attendeeImage,
                           "scale": scale + "%"
                       }); //push into array

                       //if Loop finished
                       if ($scope.attending.length == $scope.totalAttendees) {

                           //determine sausagefest or fishmarket
                           if ($scope.male > $scope.female) {
                               $scope.sausageFestPositive = true;
                           }
                           else if ($scope.female > $scope.male) {
                               $scope.fishMarketPositive = true;
                           }

                           //Chart Data initialize
                           $scope.analysisComplete = true;
                           $scope.data = [$scope.male, $scope.female, $scope.unknown];
                          
                           var dat1 = ($scope.nameGuessAccuracy / $scope.totalAttendees).toFixed();
                           var dat2 = ($scope.femaleNameAccuracy / $scope.female).toFixed();
                           var dat3 = ($scope.maleNameAccuracy / $scope.male).toFixed();
                      
                           $scope.barData = [[dat1, dat2, dat3]];

                           $scope.loading = false;
                           $scope.statusText = "Success";
                                               
                       }

                       //calculate ratio
                       $scope.ratio = calculateRatio($scope.male, $scope.female);

                   }, function errorCallback(response) {
                       // called asynchronously if an error occurs
                       // or server returns response with an error status.
                   }); // end http request

               }); // end foreach
           } //end if
       });
    } //end submit

}); // end controller



function calculateRatio(maleNumber, femaleNumber) {
    var temp;
    var ratio;
    if (maleNumber > femaleNumber) {
        temp = maleNumber / femaleNumber;
    }
    else {
        temp = femaleNumber / maleNumber;
    }

    var ratio = 1 / temp;

    return "1 : " + ratio.toFixed(2);
}
