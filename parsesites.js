/**
 * Created by tolucadegbite on 2016-04-12.
 */



$(document).ready(function () {

    element = document.getElementById('provinceList');
    var cun = element.options[ element.selectedIndex ].text;


    //if selected country code is equal to the country code, show for that country
    $('#provinceList').change(function(){

        element = document.getElementById('provinceList');
        var cun = element.options[ element.selectedIndex ].text;

        //var cun = $('#provinceList').val();

        $.getJSON('cdnherritagesites.json', function (data) {
            var result ="<ul>";

            $.each(data.provinces.province, function(index, province){

                if (cun == province.PROV) {
                    result += "<br><br><li>" + "<table><tr>" + "<b>Name: </b>" + province.NAME + "<br><br>" + "<b>Location: </b>"
                        + province.STREET + "<br/><br/>"  + province.TOWN + ", " + province.PROV + "<br/>"
                        + "<br/><b>Reason for designation: </b>" + province.REASON + "</li>" + "</tr></table>";
                }



            });

            $('#emptyP').html(result);
            console.log(result);

        });
    });

}); //


