//http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
angular.module('app.controllers').controller('ResourceController',
    function($scope,$resource,HomeService) {

        HomeService.SayToken();

        var endpoint = '/books/:id';
        var books =  $resource('',
            {
                //you can stuff params in here like the :id from above
            },
            {
                GET: {
                    url:endpoint,
                    method: 'GET',
                    isArray: true,
                    cache: false//,
                    //transformRequest: QuoteRequestTransformer,
                    //transformResponse: QuoteResponseTransformer
                },
                PUT: {
                    url:endpoint,
                    method: 'PUT',
                    isArray: false,
                    cache: false//,
                    //transformRequest: QuoteRequestTransformer,
                    //transformResponse: QuoteResponseTransformer
                },
                POST: {
                    url:endpoint,
                    method: 'Post',
                    isArray: false,
                    cache: false//,
                    //transformRequest: QuoteRequestTransformer,
                    //transformResponse: QuoteResponseTransformer
                },
                DELETE: {
                    url:endpoint,
                    method: 'Delete',
                    isArray: false,
                    cache: false//,
                    //transformRequest: QuoteRequestTransformer,
                    //transformResponse: QuoteResponseTransformer
                }
            });



        books.GET(function(data){
            console.log('GETting books');
            angular.forEach(data,function(book){
                console.log(book);
            });
        });

        books.PUT().$promise.then(function(data){
            console.log('PUTting books');
            console.log(data);
        });

        books.POST().$promise.then(function(data){

            var dddd = angular.toJson(data);
            console.log(dddd);
            var ffff = angular.fromJson(dddd);
            //var ffff = eval(data);
            console.log(ffff);
            console.log(ffff.tokenId);

        });

        books.DELETE().$promise.then(function(data){
            console.log('DELETING books');
            console.log(data);
        });

    });
