var apiclient = (function () {

    return {
        getBlueprintsByAuthor: function(author, callback) {
        $.ajax({
             url: "http://localhost:8080/blueprints/"+author,
             data: string,
             success: function (data) { callback(data) },
             dataType: "json"
           });
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            $.ajax({
                 url: "http://localhost:8080/blueprints/"+author+"/"+name,
                 data: string,
                 success: function (data) { callback(data)},
                 dataType: "json"
               });
            },
        }
    }

})();