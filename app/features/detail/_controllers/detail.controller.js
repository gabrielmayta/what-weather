/**
 *
 * Created by Gabriel Mayta
 *
 */

angular
    .module("detail.module.detail-controller", [])
    .controller("DetailController", DetailController);


DetailController.$inject = [];

function DetailController() {

    var vm = this;

    vm.message = "Hello world!";

}