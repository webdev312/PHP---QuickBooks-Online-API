var g_arrTotalData;
function onInitData(){
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day);
    $('#service-input').val(today);

    $('#load-customer').css({display : 'none', position : 'absolute'});
    $('#load-product').css({display : 'none', position : 'absolute'});
}
function onLoadSpinner(state){
    if (state == true){
        var custSelect = $('.customer-select');
        var custSelect_pos = custSelect.offset();
        var custSelect_width = custSelect.width();
        $('#load-customer').css({display : 'block', position : 'absolute', left : custSelect_pos.left + custSelect_width + 10, top : custSelect_pos.top});

        var prodSelect = $('.product-select');
        var prodSelect_pos = prodSelect.offset();
        $('#load-product').css({display : 'block', position : 'absolute', left : custSelect_pos.left + custSelect_width + 10, top : prodSelect_pos.top});
    }
    else if (state == false){
        $('#load-customer').css({display : 'none', position : 'absolute'});
        $('#load-product').css({display : 'none', position : 'absolute'});
    }
}
function sendReq2QB() {
    onInitData();
    onLoadSpinner(true);
    $.ajax({
    type: 'POST',
    url: '/controller/index_qb.php',
    success: function(data){
            var resp = JSON.parse(data);
            g_arrTotalData = resp;
            console.log(resp);
            for (var i = 0; i < resp.lstCustomer.length; i ++){
                $('.customer-select').append($('<option>', {
                    value: (i + 1),
                    text: resp.lstCustomer[i].FullyQualifiedName
                }));
            }
            for (var i = 0; i < resp.lstItems.length; i ++){
                $('.product-select').append($('<option>', {
                    value: (i + 1),
                    text: resp.lstItems[i].FullyQualifiedName
                }));
            }
            $('.product-select').val(1).change();
            onLoadSpinner(false);
        }
    });
};
function onProductChanged(){
    console.log("changed");
}