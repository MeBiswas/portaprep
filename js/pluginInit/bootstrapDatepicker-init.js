$(document).ready(function(){
    $(function () {
        var dateToday = new Date();
        $('#dateOfBirth').datepicker({
            changeMonth: true,
            changeYear: true,
            format: "dd/mm/yyyy",
            language: "en",
            autoclose: true,
            todayHighlight: true,
            startDate: 'today'
        });        
    });
});
// Dashboard Earning Mangagement Page Funds Info Modal 
$(document).ready(function(){
    $(function () {
        // var dateToday = new Date();
        $('#sortDate').datepicker({
            changeMonth: true,
            changeYear: true,
            format: "dd/mm/yyyy",
            language: "en",
            autoclose: true,
            todayHighlight: true,
            // startDate: 'today'
        });        
    });
});
// Checkout Page Add Card Expiration Date
$(document).ready(function(){
    $(function () {
        var dateToday = new Date();
        $('#expirationDate').datepicker({
            changeMonth: true,
            changeYear: true,
            format: "mm/yyyy",
            language: "en",
            autoclose: true,
            todayHighlight: true,
            startDate: 'today'
        });        
    });
});