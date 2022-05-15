<%@ page import="com.PaymentManage.Payment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Payment Management</title>
		<link rel="stylesheet" href="Views/bootstrap.min.css">
		<script src="Components/jquery.min.js"></script>
		<script src="Components/payment.js"></script>
	</head>
	<style>
		body {
			background-image: url("Image/payment4.jpg");
			background-size: cover;
		}
	</style>
	<body> 
		<div class="container"><div class="row"><div class="col-6">
		<div class="text-center">
		<h1 style="color: white">Payment Management </h1>
		</div> 
		
			<form id="formPayment" name="formPayment">
			
 				<div style="color: white">Customer Name : </div> 
 				<input id="Pay_customer_ame" name="Pay_customer_ame" type="text" 
 				class="form-control form-control-sm"> <br>
			    
			    <div style="color: white">Payment Account No : </div>
 				<input id="Pay_acc" name="Pay_acc" type="text" 
 				class="form-control form-control-sm"><br> 
 				
 				<div style="color: white">Payment Date : </div> 
 				<input id="Pay_date" name="Pay_date" type="text" 
				class="form-control form-control-sm"><br>
 				
 				<div style="color: white">Total Price : </div>
 				<input id="Pay_total_price" name="Pay_total_price" type="text" 
 				class="form-control form-control-sm"><br>
 				
 				<input id="btnSave" name="btnSave" type="button" value="Save" 
 				class="btn btn-primary">
 				<input type="hidden" id="hidPaymentIDSave" 
				name="hidPaymentIDSave" value="">
				
			</form>
			
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
		<br>
		
		<div id="divPaymentGrid">
 		<%
 			Payment paymentObj = new Payment(); 
 		 		out.print(paymentObj.readPayment());
 		%>
	</div>
	
	</div> </div> </div> 
</body>
</html>
