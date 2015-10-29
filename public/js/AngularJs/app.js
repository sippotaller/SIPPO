(function () {

  var app = angular.module('sippo', [
    'ngRoute'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/cliente', {
        templateUrl: 'Views/Cliente.html',
        controller: ''
      })
      .when('/catalogoproductos', {
        templateUrl: 'Views/Producto.html',
        controller: ''
      })
      .when('/catalogoclientes', {
        templateUrl: 'Views/CatalogoClientes.html',
        controller: ''
      })
      .when('/catalogoproveedores', {
        templateUrl: 'Views/CatalogoProveedores.html',
        controller: ''
      })
      .when('/usuario', {
        templateUrl: 'Views/Usuario.html',
        controller: ''
      })
      .when('/asignarpermisos', {
        templateUrl: 'Views/AsignarPermisos.html',
        controller: ''
      });

  }]);

})();
