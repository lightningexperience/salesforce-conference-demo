function getSessionList(success, error) {
  var soql = "SELECT ffaizi-20200408-demo.Name,ffaizi-20200408-demo.Email__c,ffaizi-20200408-demo.Phone FROM ffaizi-20200408-demo.Account WHERE ffaizi-20200408-demo.Email__c LIKE '%force.com%'";
  force.query(soql, success, error);
}


function showSessionList() {
    getSessionList(
        function (data) {
            var accounts = data.records,
                html = '';
            for (var i=0; i<accounts.length; i++) {
                html += '<li class="table-view-cell"><a href="#accounts/'+  accounts[i].ffaizi-20200408-demo.Account.Name + '</a></li>';
            }
            html =
                '<div class="page style=\"margin:20px;\"">' +
                '<header class="bar bar-nav">' +
                    '<h1 class="title">Data is pulled from Salesforce using REST APIs & oAuth2.0</h1>' +
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
