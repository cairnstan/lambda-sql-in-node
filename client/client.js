var app = angular.module('myApp', []);

app.controller('PersonController', ['$http', function($http){
  var person = this;

  person.people = [];

  person.name = '';
  person.address = '';

  person.sendData = function() {
    $http.post('/people',
      {name: person.name, address: person.address, city: person.city, state: person.state, zip_code: person.zip_code})
      .then(function(serverResponse){
        console.log('this: ', this);
        console.log('person: ', person);
        console.log(serverResponse);
        person.getPeople();
      });

  };
  person.getPeople = function() {

  $http.get('/people').then(function(response){
    person.people = response.data;
    console.log(response);
  })

}
  person.getPeople();
}]);
