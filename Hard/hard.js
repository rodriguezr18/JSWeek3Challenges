var person = function() {
    //our object to hold our stuff
      var pii = {
          firstName: "Rudy",
          SSN: 226371829,
      }
      //we're goiing to expose our first name but not our SSN, right because ssn is scoped to only be
      //in this function
      return function(){
        //we're able to get pii.firstname because of scope
              return pii.firstName
      }
  }
  var person1 = person()
   var person1Name = person1()
   console.log(person1)
  console.log(person1Name);
