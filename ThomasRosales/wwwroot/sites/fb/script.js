var app = angular.module( 'myApp', [] );

app.controller( 'MainCtrl', function( $scope ) {
  // we control our app from here

$scope.submit = function()
{
  var eventId = $scope.eventId;

  alert(eventId);

}



/* make the API call */
FB.api(
    "/{event-id}",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);


});
