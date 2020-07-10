$('#dt-picker').datetimepicker({     
    // minDate:new Date(),
    minDate:moment().add('d', 1).toDate(),
    ignoreReadonly: true

});