import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { monthTranslator, dayTranslator } from './calculator.js'


$(document).ready(function() {
  $("#dateForm").submit(function(event) {
    event.preventDefault();
    let year = $("#year").val();
    let month = monthTranslator($("#month").val());
    let day = $("#day").val();
    let date = new Date(year, month, day);
    let answer = date.getDay();
    let dayOfWeek = dayTranslator(answer);
    $("#answer").text(dayOfWeek);
  });
});
