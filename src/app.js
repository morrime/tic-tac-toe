import Backbone from 'backbone';
import $ from 'jquery';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';


$(document).ready(function(){
  console.log("YOLOOooooooo");

  var boardTest = new Application();
  console.log("YOLOOooooooo2");

  var appView = new ApplicationView({
    el: 'html',
    model: boardTest
  });
  console.log("YOLOOooooooo3");

  appView.render();
  console.log("YOLOOooooooo4");

});
