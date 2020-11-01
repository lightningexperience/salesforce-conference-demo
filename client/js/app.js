function getSessionList(success, error) {
  var soql = "SELECT Name,Email__c,Phone FROM Account WHERE Email__c LIKE '%force.com%'";
  force.query(soql, success, error);
}


function showSessionList() {
    getSessionList(
        function (data) {
            var sessions = data.records,
                html = '';
            for (var i=0; i<sessions.length; i++) {
                html += '<li class="table-view-cell"><a href="#sessions/'+ sessions[i].nubank__Session__r.Id +'">' + sessions[i].nubank__Session__r.Name + '</a></li>';
            }
            html =
                '<div class="page style=\"margin:20px;\"">' +
                '<header class="bar bar-nav">' +
                    '<h1 class="title">Sessions - Data is pulled from Salesforce using REST APIs</h1>' +
                '</header>' +
                '<div class="content">' +
                    '<ul class="table-view session-list">' + html + '</ul>' +
                '</div>' +
                '</div>';
            slider.slidePage($(html));
        },
        function (error) {
            alert("Error: " + JSON.stringify(error));
        });
    return false;
}



var slider = new PageSlider($('body')); // Initialize PageSlider micro-library for nice and hardware-accelerated page transitions
router.addRoute('', showSessionList);
