/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('resumeCtrlModule', [])

        .controller('ProfileCtrl', ['$scope', 'ListService', '$location', function ($scope, listSvc, $location) {

                $scope.name = "Siti Nur Insyirah Binti Shauki";
                $scope.groupList = listSvc.groupLists;
                
                $scope.skillGroupList = listSvc.groupSkillLists;

                $scope.getList = function () {

                    var msq = "Analyst Programmer with 2 years’ experience in Dagangnet Technologies Sdn Bhd and an extensive range of skills including programming, and reporting. Strongly focused with ability to complete tasks accurately in a fastfaced environment with conflicting deadlines.";
                    alert(msq, "Info");

                };

                $scope.getContact = function () {

                    var msq = "PHONE:" + "\n" + "014-7370966" + "\n"
                            + "EMAIL:" + "\n" +
                            "sitiinsyirah161296@gmail.com";
                    alert(msq, "Info");
                };

                $scope.changePage = function (obj) {
                    if (obj === 'e') {
                        $location.path("/education");
                    }
                    if (obj === 'w') {
                        $location.path("/work_experience");
                    }
                    if (obj === 's') {
                        $location.path("/skill");
                    }
                    if (obj === 'c') {
                        $location.path("/contact");
                    }
                };

            }]);

app.service("ListService", function () {
//
    var listService = {};

    listService.groupLists = [
        {id: 0, desc: 'education', code: 'e'},
        {id: 1, desc: 'work experience', code: 'w'},
        {id: 2, desc: 'skills', code: 's'},
        {id: 3, desc: 'contact', code: 'c'}
    ];
    
     listService.groupSkillLists = [
        {id: 0, desc: 'java', scale: 1},
        {id: 1, desc: 'oracle database', scale: 2},
        {id: 2, desc: 'html', scale: 2},
        {id: 3, desc: 'AngularJs', scale: 2},
        {id: 4, desc: 'JavaScript', scale: 1},
        {id: 5, desc: 'CSS', scale: 1},
        {id: 6, desc: 'bootstrap', scale: 2},
        {id: 7, desc: 'JasperReports', scale: 2},
        {id: 8, desc: 'Glassfish Server', scale: 1},
        {id: 9, desc: 'RESTful API', scale: 1},
        {id: 10, desc: 'GIT', scale: 2},
        {id: 11, desc: 'Nginx', scale: 1},
        {id: 12, desc: 'JSON', scale: 1}
    ];

    return listService;

});



