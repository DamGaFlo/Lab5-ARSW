var services  = (function(){
    function points(blueprint){
        return blueprint.reduce(function(total,num){
            return total + num.points.length;
        },0);
    }

    function blueprintsTable(blueprint) {
        var autor = blueprint[0].author;

        $("#bpTable").empty();
        blueprint.map(function(bp){
            var row =  "<tr> <td>" + bp.name + "</td> <td>" + bp.points.length +"</td> <td>" + '<button type="button" class="btn btn-secondary mb-2" onclick="services.searchAuthorByName(\'' + bp.name + '\',\'' + autor +'\')"> Open </button></td></tr>';
            $("#bpTable").append(row);
        })

        var res = points(blueprint);
        $("#totalPoints").text("Total user Points: " + res);


    }

    function draw(blueprint){
        $("#currentBlueprint").text("Current blueprint: " + blueprint.name);
        var myCanvas = document.getElementById("myCanvas");
        var ctx = myCanvas.getContext("2d");
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ctx.beginPath();
        var first = blueprint.points[0];
        ctx.moveTo(first.x,first.y);
        blueprint.points.map(function(punto){
            ctx.lineTo(punto.x,punto.y);
        })
        ctx.stroke();

    }

    function start(){
        var authorSearch = $("#nameValue").val();
        $("#authorLabel").text(authorSearch+"'s blueprints:");
        apimock.getBlueprintsByAuthor(authorSearch, blueprintsTable)
    }
    function searchAuthorByName(name,author) {
        apimock.getBlueprintsByNameAndAuthor(name,author,draw)
    }

    return {
        start:start,
        searchAuthorByName:searchAuthorByName,
    }

})();
