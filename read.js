function getdata(){
	
	firebase.database().ref('driversAvailable/9ZqGFm4scQQIk2se9W9skhBK86F2').once('value').then(function (snapshort){
		var name = snapshort.val().Customers;
		document.getElementById("Customer").innerHTML=name;
	})
}