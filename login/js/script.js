/*search & close btn*/
$(document).ready(function(){
    $("#search").click(function(){
        $("#close").removeClass("d-none");
        $("#search").addClass("d-none");
        $("#search-ele").removeClass("d-none");
    });
    $("#close").click(function(){
        $("#search").removeClass("d-none");
        $("#close").addClass("d-none");
        $("#search-ele").addClass("d-none");
    });
});

/*search & close btn*/
/*start coding for sign up*/


/*end coding for sign up*/
/*window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
window.IDBTrasaction = window.IDBTrasaction || window.webkitIDBTrasaction || window.mozIDBTrasaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.mozIDBKeyRange;
if(!window.indexedDB)
{
	document.write("<h1 align='center'>Please Check Your Browser!!</h1>")
}
else{
$(document).ready(function(){
	$("#resistation-form").submit(function(){
		var name = $("#username").val();
		var tag_name = $("#dob").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var con_pass = $("#con-password").val();
		var phone = $("#phone").val();
		var add = $("#add").val();
		var data = window.indexedDB.open(school_name);
		data.onsuccess = function(){
			$("#message").removeClass("d-none");
			$("#message").addClass("alert-success");
			$("#message").append("<b>Resistation Success...</b>Please Login");
			$("#resistation-form").trigger('reset');
			setTimeout(function(){
				//alert("success");
				$("#message").addClass('d-none');
				$("[href='#login']").click();
			},1000);
		}
		data.onerror = function(){
			$("#message").removeClass("d-none");
			$("#message").addClass("alert-danger");
			$("#message").append("<b>Resistation Failed!!</b>Somthing Went Wrong");
		}
		data.onupgradeneeded = function(){
			var school_data = {
				school:school_name,
				school_tag:tag_name,
				email:email,
				password:password,
				website:web,
				phone:phone,
				alternate_number:al_phone,
				adderss:add,
				};
			var idb = this.result;
			var obj = idb.createObjectStore("About_School",{keyPath:"school"});
			obj.add(school_data);
		}
		return false;
	});
});
}

//login form 

$(document).ready(function(){
	$("#login-form").submit(function(){
		var user = $("#emailId").val();
		var pass = $("#pass").val();
		var login_data = {
			username : user,
			password : pass
		};
		var object = JSON.stringify(login_data);
		sessionStorage.setItem("Login",object);
		if(sessionStorage.getItem("Login") != null)
		{
			//find user from database
			var user_database = window.indexedDB.databases();
			user_database.then(function(obj_panding){
				var i=0;
				for(i=0;i<obj_panding.length;i++)
				{
					console.log(obj_panding[i].name);
				}
			});
		}
		else{
			$("#login-message").removeClass("d-none");
			$("#login-message").addClass("alert-warning");
			$("#login-message").append("<b>Opss!</b>Login Failed");
			setTimeout(function(){
				$("#login-message").addClass("d-none");
			},2000);
		}
		return false;
	});
});
*/