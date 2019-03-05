var g_arrTotalData;
function onInitData(){
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day);
    $('#activation-input').val(today);

    var days = new Date(now.getFullYear(), now.getMonth()+1, 0);
    $('#dim-input').val(days.getDate());

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
    var n_Index = $('.product-select').val() - 1;
    var n_UnitPrice = g_arrTotalData.lstItems[n_Index].UnitPrice * 1;
    var n_TwoDecimal = parseFloat(Math.round(n_UnitPrice * 100) / 100).toFixed(2);
    $('#mp-input').val(n_TwoDecimal);
    onCalculate();
}
$('#activation-input').on('input', function() { 
    var value = $(this).val();
    if ((value != null) && (value != "")){
        var activeDate = new Date(value);
        var days = new Date(activeDate.getFullYear(), activeDate.getMonth()+1, 0);
        $('#dim-input').val(days.getDate());
        onCalculate();
    }
});
function onCalculate(){
    var n_MonthDays = $('#dim-input').val() * 1;
    var n_MonthlyPrice = $('#mp-input').val() * 1;
    
    var dt_CurDate = new Date($('#activation-input').val());
    var n_CurDays = dt_CurDate.getDate();

    var n_ProRate = n_MonthlyPrice / n_MonthDays * (n_MonthDays - n_CurDays);
    var n_TwoDecimal = parseFloat(Math.floor(n_ProRate * 100) / 100).toFixed(2);

    $('#prate-input').val(n_TwoDecimal);
}

// var ReqBody = {
//     acceptStatus : {statusId: "1", acceptedDate: null, acceptedBy: "", expirationDate: null},
//     accountBalance : "",
//     accountDetails : null,
//     advancePaymentLinkedTransactionId : null,
//     associatedSourceTxn : null,
//     attachments : null,
//     billingAddress : "Grace Pariente↵Cool Cars↵65 Ocean Dr.↵Half Moon Bay, CA  94213",
//     closeBooksPassword : "",
//     currencyType : {isoCode: "USD", symbol: "$", displayName: "United States Dollar"},
//     customVal1 : "",
//     customVal2 : "",
//     customVal3 : "",
//     date : "2017-04-23",
//     defaultTxnSubTypeId : null,
//     deliveryInfo : {
//         deliveryAddress: "Cool_Cars@intuit.com",
//         deliveryAddressCc: "",
//         deliveryAddressBcc: "",
//         deliveryEmailBody : "",
//         deliveryEmailSubject : "",
//         deliverySaveAddress : false,
//         deliveryType : "Print",
//         toBePrinted : true,
//         toBeSent : false
//     },
//     deptId : null,
//     discountInfo : {discountAccountId: null, discountAmount: "", discountPercent: "0.00%", discountTaxable: false},
//     dueDate : "2017-05-23",
//     editSequence : null,
//     enableDiscountAtLines : false,
//     enableOnlineBankPayment : true,
//     enableOnlineCCPayment : true,
//     enableOnlinePayment : false,
//     enablePurchSaleLocation : false,
//     enableSelfService : null,
//     exchangeRateInfo : {exchangeRate: null, editSequence: 0},
//     hasTparEnabled : false,
//     ignoreDuplicateDocNum : null,
//     ignoreModifyTaxFiledTxnWarn : false,
//     isEinvoice : false,
//     isEnterpriseCustomer : false,
//     isVoided : false,
//     itemDetails : {
//         0 : {
//             accountId : "1",
//             amount : "30.00",
//             billable : false,
//             customerId : null,
//             depositsAccountId : null,
//             description : "",
//             discountAmount : "",
//             discountPercent : "",
//             employeeId : null,
//             isSale : false,
//             isSubtotalLine : false,
//             itemId : "2",
//             itemType : null,
//             journalCodeId : null,
//             klassId : null,
//             locationId : null,
//             markup : "",
//             nameId : null,
//             netAmount : null,
//             order : 1,
//             paymentMethodId : null,
//             quantity : "1",
//             rate : "30",
//             receivedFromId : null,
//             ref : "",
//             reimbTxnId : null,
//             salesDetailType : null,
//             sequence : null,
//             sourceTxnId : null,
//             sourceTxnSequence : null,
//             sourceTxnTypeId : null,
//             subtotalAmount : null,
//             taskStatusId : null,
//             taxAmount : null,
//             taxCodeId : null,
//             taxable : false,
//             txnDiscountAmount : "",
//             vendorId : null
//         }
//     },
//     jobStatusId : null,
//     klassId : "",
//     linkedAdvancePayments : null,
//     memo : "",
//     nameId : "3",
//     partnerDraft : false,
//     payables : null,
//     payeeMessage : "Thank you for your business and have a great day!",
//     permitNumber : "",
//     printPrefId : null,
//     referenceNumber : null,
//     roundoffInfo : {hasUserSetRoundoff: false},
//     saveBackToTemplate : false,
//     showCustomize : false,
//     stageTxnId : "",
//     taxInfo : {
//         isTaxReclaimable : false,
//         reverseChargeAmount : "0.00",
//         taxCodeId : null,
//         taxDetails : null,
//         taxExemptionOverridden : false,
//         taxReviewReason : null,
//         txnTaxType : "OOS"
//     },
//     tdsInfo : {tdsAmount: null, tdsCompositeMappingId: null, hasTDSEnabled: false},
//     termId : "3",
//     txnId : -1,
//     txnTaxFormNum : "",
//     txnTaxFormType : "",
//     txnTypeId : 25
// };



