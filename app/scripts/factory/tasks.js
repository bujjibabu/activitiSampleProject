angular.module('activitiApp').factory('TasksService', function ($resource) {debugger;
    var data = $resource('http://192.168.208.40:8081/vita/service/runtime/tasks/:taskId', {taskId: "@taskId"},{
        update: {method: 'PUT', params: {taskId: "@taskId"}}
    });
    return data;
});