angular.module('app.services').service('HomeService',
    function() {

        var userToken;

        function sayHello(){
            console.log('hello');
        }

        function setToken(tk){
            userToken = tk;
        }

        function sayToken(){
            console.log(userToken);
        }


        return{
            SayHello : sayHello,
            SetToken : setToken,
            SayToken : sayToken
        };

});
