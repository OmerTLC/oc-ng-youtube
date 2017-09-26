import vendors from 'vendor';
import services from 'services/services.module'
import components from 'components/components.module'

function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {
  // $urlRouterProvider.otherwise('/state1/substate1');

}

angular.module('app.starter', [
    'ui.router',
    'ui.bootstrap',
    services.name,
    components.name

]).config(appConfig)

angular.bootstrap(document, ['app.starter']);
