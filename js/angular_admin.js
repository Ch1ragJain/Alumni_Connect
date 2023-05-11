var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http) 
{
	
/****************************************************************************/
/************************** Get Admin Details ***********************************/
/****************************************************************************/	
	$scope.cook_cook_email = $cookieStore.get("cook_cook_email");
	
/**************************User Cookies **********************************/	
	$scope.cook_user_email = $cookieStore.get("cook_user_email");
	
/****************************************************************************/
/************************** User Logout ************************************/
/****************************************************************************/		
	$scope.admin_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_user_email = "";
			$cookies.cook_admin_email = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
/****************************************************************************/
/************************** Post Query User *********************************/
/****************************************************************************/
	$scope.complaint_status = function(email) 
	{		
		window.location = "admin_post_solution.html";
		$cookieStore.put("cook_user_email",email);
		return;				
    }
	$scope.cook_user_email = $cookieStore.get("cook_user_email");

	/****************************************************************************/
/************************** Post User solution *********************************/
/****************************************************************************/
	$scope.add_solution = function() 
	{
	$http.post('add_solution.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2,'field_3':$scope.field_3,
		'field_4':$scope.field_4,'field_5':$scope.field_5,'email':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted Successfully");
				window.location = "admin_home.html";
				return;				
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
	
	$scope.add_solution_1 = function() 
	{
	$http.post('add_solution.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2,'field_3':$scope.field_3,
		'field_4':$scope.field_4,'field_5':$scope.field_5,'email':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted Successfully");
				window.location = "home.html";
				return;				
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
	
	
	$http.post('get_user_events.php', {'email': $scope.cook_user_email})
	.success(function(data, status, headers, config) 
	{
			$scope.user_event_details = data.details;
    });
	
	
$scope.update_status_con = function(user_id,status) 
	{
		window.location = "con_status_edit.html";
		$cookieStore.put("cook_con_id",user_id);
		$cookieStore.put("cook_con_status",status);
		
		return;
	}	
	
	$scope.cook_con_id = $cookieStore.get("cook_con_id");
	$scope.cook_con_status = $cookieStore.get("cook_con_status");

	$scope.save_con_status = function() 
	{		
		$http.post('con_update_status.php',{
		 'cus_id':$scope.cook_con_id, 'field_9':$scope.cook_con_status})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "user_details.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }
	 
	 
	$http.post('user_get_all.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.user_details = data.details;
		}
		else
		{
			$scope.user_details = "No Data Found !!!";
		}
    });


/*****************************************************************************/
/************************** Update Disaster*********************************/
/****************************************************************************/
	$scope.dis_edit_cookie = function(id,field_1,field_2,field_3,field_4,field_5) 
	{
		
		$cookieStore.put("id",id);
		$cookieStore.put("cook_field_1",field_1);
		$cookieStore.put("cook_field_2",field_2);
		$cookieStore.put("cook_field_3",field_3);
		$cookieStore.put("cook_field_4",field_4);
		$cookieStore.put("cook_field_5",field_5);
		
		window.location = "edit_disaster.html";
		return;
	}
	

	$scope.id = $cookieStore.get("id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	$scope.cook_field_2 = $cookieStore.get("cook_field_2");
	$scope.cook_field_3 = $cookieStore.get("cook_field_3");
	$scope.cook_field_4 = $cookieStore.get("cook_field_4");
	$scope.cook_field_5 = $cookieStore.get("cook_field_5");
	
		
$scope.disaster_update_data = function() 
	{
	$http.post('disaster_update.php', {
			'id': $scope.id,'field_1': $scope.cook_field_1,'field_2': $scope.cook_field_2, 
			'field_3': $scope.cook_field_3,  'field_4': $scope.cook_field_4,
			'field_5': $scope.cook_field_5})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "view_all_events.html";
			$cookies.id = "";
				$cookies.cook_field_1 = "";	
				$cookies.cook_field_2 = "";
				$cookies.cook_field_3 = "";	
				$cookies.cook_field_4 = "";
				$cookies.cook_field_5 = "";	
				
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
/*****************************************************************************/
/************************** Update Disaster*********************************/
/****************************************************************************/
	$scope.dis_edit_cookie_1 = function(id,field_1,field_2,field_3,field_4,field_5) 
	{
		
		$cookieStore.put("id",id);
		$cookieStore.put("cook_field_1",field_1);
		$cookieStore.put("cook_field_2",field_2);
		$cookieStore.put("cook_field_3",field_3);
		$cookieStore.put("cook_field_4",field_4);
		$cookieStore.put("cook_field_5",field_5);
		
		window.location = "edit_user_events.html";
		return;
	}
	

	$scope.id = $cookieStore.get("id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	$scope.cook_field_2 = $cookieStore.get("cook_field_2");
	$scope.cook_field_3 = $cookieStore.get("cook_field_3");
	$scope.cook_field_4 = $cookieStore.get("cook_field_4");
	$scope.cook_field_5 = $cookieStore.get("cook_field_5");
	
		
$scope.disaster_update_data_1 = function() 
	{
	$http.post('disaster_update.php', {
			'id': $scope.id,'field_1': $scope.cook_field_1,'field_2': $scope.cook_field_2, 
			'field_3': $scope.cook_field_3,  'field_4': $scope.cook_field_4,
			'field_5': $scope.cook_field_5})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "view_user_events.html";
			$cookies.id = "";
				$cookies.cook_field_1 = "";	
				$cookies.cook_field_2 = "";
				$cookies.cook_field_3 = "";	
				$cookies.cook_field_4 = "";
				$cookies.cook_field_5 = "";	
				
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
/****************************************************************************/
/************************** Delete Disaster *********************************/
/****************************************************************************/
	// products_delete
	$scope.disaster_delete = function(id) 
	{		
        $http.post('disaster_delete.php', 
		{
		'id': id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Product Deleted Successful");
				window.location = "disaster_view_all.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }
	/****************************************************************************/
/************************** All Disaster Details*********************************/
/****************************************************************************/

	$http.post('disaster_get_all.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.disaster_details = data.details;
		}
		else
		{
			$scope.disaster_details = "No Data Found !!!";
		}
    });
/****************************************************************************/
/************************** All User Query *********************************/
/****************************************************************************/

	$http.post('complaint_get_all.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.details = data.details;
		}
		else
		{
			$scope.details = "No Data Found !!!";
		}
    });
	

/****************************************************************************/
/************************** Validation **********************************/
/****************************************************************************/
	$scope.er_email = true;
	// mobile number verification
	$scope.register_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.pimage))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	// mobile number verification
	$scope.login_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.log_email))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	
	$scope.er_mob = true;
	// mobile number verification
	$scope.mobile_no = function()
	{
		var filter = /^\d{10}$/;
		if(filter.test($scope.description))
		{
			$scope.er_mob = true;
			$scope.btn_sgnup = false;
		}
		else
		{
			$scope.er_mob = false;
			$scope.btn_sgnup = true;
		}
	}
	
	
	$scope.image_update = function(id) 
	{
		
		$cookieStore.put("cook_app_id",id);
		window.location = "file.html";
		return;
	}
	
	$scope.image_update_1 = function(id) 
	{
		
		$cookieStore.put("cook_app_id",id);
		window.location = "file_1.html";
		return;
	}
	

	$scope.cook_app_id = $cookieStore.get("cook_app_id");


	
	
});