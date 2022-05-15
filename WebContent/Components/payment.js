$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	 {
	 	$("#alertSuccess").hide();
	 }
	 	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide();

// Form validation-------------------
var status = validatePaymentForm();
	if (status != true)
	 {
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
     }
 
// If valid------------------------
var type = ($("#hidPaymentIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "PaymentAPI",
 type : type,
 data : $("#formPayment").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onPaymentSaveComplete(response.responseText, status);
 }
 });
});

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
$("#hidPaymentIDSave").val($(this).data("paymentid"));
 $("#Pay_customer_ame").val($(this).closest("tr").find('td:eq(0)').text());
 $("#Pay_acc").val($(this).closest("tr").find('td:eq(1)').text());
 $("#Pay_date").val($(this).closest("tr").find('td:eq(2)').text());
 $("#Pay_total_price").val($(this).closest("tr").find('td:eq(3)').text());
});

//DELETE==========================================================
$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "PaymentAPI",
 type : "DELETE",
 data : "pay_id=" + $(this).data("paymentid"),
 dataType : "text",
 complete : function(response, status)
 {
 onPaymentDeleteComplete(response.responseText, status);
 }
 });
});

// CLIENT-MODEL================================================================
function validatePaymentForm()
{
	

// customer name
if ($("#Pay_customer_ame").val().trim() == "")
 {
 return "Insert Pay_customer_ame.";
 } 

// account number-------------------------------
if ($("#Pay_acc").val().trim() == "")
 {
 return "Insert Pay_acc.";
 }

// Payment Date-------------------------------
if ($("#Pay_date").val().trim() == "")
 {
 return "Insert Pay_date.";
 }
  
 // Total Price-------------------------------
if ($("#Pay_total_price").val().trim() == "")
 {
 return "Insert Pay_total_price.";
 }
 
return true;
}

function onPaymentSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divPaymentGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 } 
$("#hidPaymentIDSave").val("");
 $("#formPayment")[0].reset();
}

function onPaymentDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divPaymentGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}
