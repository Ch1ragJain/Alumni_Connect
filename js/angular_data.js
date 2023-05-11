var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http) 
{
		$scope.cook_feedback_id = $cookieStore.get("cook_feedback_id");
/****************************************************************************/
/************************** Get Admin Details ***********************************/
/****************************************************************************/	
	$scope.cook_user_email = $cookieStore.get("cook_user_email");

			
	/****************************************************************************/
/************************** User Logout ************************************/
/****************************************************************************/		
	$scope.user_logout = function() 
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
/**************************Admin Reply *********************************/
/****************************************************************************/
$scope.cook_user_email = $cookieStore.get("cook_user_email");
	

		
	$scope.create_reply = function(email) 
	{		
		

		$http.post('create_reply.php', {
		'field_9':$scope.field_9,'email':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("replied Successfully");
				window.location = "admin_reply.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Un Successfully");
			}
        });
    }
/****************************************************************************/
/************************** User View Query *********************************/
/****************************************************************************/
	$http.post('complaint_get.php', {'email': $scope.cook_user_email})
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
	
	
	$http.post('get_chat_new.php', {'email': $scope.cook_user_email})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.new_details = data.details;
		}
		else
		{
			$scope.new_details = "No Data Found !!!";
		}
    });


/*****************************************************************************/
/************************** Overall Status *********************************/
/****************************************************************************/
		$http.post('metrics_get.php')
		.success(function(data, status, headers, config) 
		{
			
			if(data.success == 1)
			{
				$scope.all_status_details = data.products;
			}
			else
			{
				$scope.all_status_details = "No Address Found !!!";
			}
		});
		
		$scope.add_feedback = function() 
		{		
		$http.post('create_feedback.php', {
		'field_1':$scope.field_1,'email':$scope.cook_user_email,'field_2':$scope.field_2
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				window.location = "view_feedback.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Un Successfully");
			}
        });
    }
	
	$http.post('get_user_feed.php', {'email': $scope.cook_user_email})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.user_feedback_details = data.details;
		}
		else
		{
			$scope.user_feedback_details = "No Data Found !!!";
		}
		
    });
	
	$http.post('get_tweet.php')
	.success(function(data, status, headers, config) 
	{
			$scope.tweet_details = data.details;
		
    });
	
		$scope.delete_feedback = function(cus_id) 
	{		
		$http.post('delete_feedback.php',{
		 'id': cus_id})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "view_feedback.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }
	 

$scope.image_upload = function(cus_id) 
	{
		window.location = "file1.html";
		$cookieStore.put("cook_app_id",cus_id);
		return;
	}	
	
	$scope.cook_app_id = $cookieStore.get("cook_app_id");
/****************************************************************************/
/************************** User Update *********************************/
/****************************************************************************/
	
		$http.post('get_user_info.php',
		{
			'email':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
				$scope.userdetails = data.details;
          });
		  
$scope.user_update_info = function(name,password,mobile,age,dob,address1,address2,city,pincode) 
	{
		window.location = "user_info_edit.html";
		$cookieStore.put("cook_name",name);
		$cookieStore.put("cook_password",password);
		$cookieStore.put("cook_mobile",mobile);
		$cookieStore.put("cook_age",age);
		$cookieStore.put("cook_dob",dob);
		$cookieStore.put("cook_address1",address1);
		$cookieStore.put("cook_address2",address2);
		$cookieStore.put("cook_city",city);
		$cookieStore.put("cook_pincode",pincode);
		return;
	}	
	
	$scope.cook_name = $cookieStore.get("cook_name");
	$scope.cook_password = $cookieStore.get("cook_password");
	$scope.cook_mobile = $cookieStore.get("cook_mobile");
	$scope.cook_age = $cookieStore.get("cook_age");
	$scope.cook_address1 = $cookieStore.get("cook_address1");
	$scope.cook_address2 = $cookieStore.get("cook_address2");
	$scope.cook_city = $cookieStore.get("cook_city");
	$scope.cook_pincode = $cookieStore.get("cook_pincode");
	$scope.cook_dob = $cookieStore.get("cook_dob");

	$scope.save_update_info = function() 
	{		
		$http.post('user_update_info.php',{
		 'name':$scope.cook_name, 'password':$scope.cook_password,
		 'mobile': $scope.cook_mobile,'field_1': $scope.cook_age,
		 'field_2': $scope.cook_dob,'field_3': $scope.cook_address1,
		 'field_4': $scope.cook_address2,'field_5': $scope.cook_city,
		 'field_6': $scope.cook_pincode, 'email': $scope.cook_user_email})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "user_update_info.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }
	 
	 
	/****************************************************************************/
/************************** All User Details*********************************/
/****************************************************************************/

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

$scope.start_chart = function(email) 
	{
		window.location = "post_chat.html";
		$cookieStore.put("cook_post_email",email);
		return;
	}	
	
	$scope.cook_post_email = $cookieStore.get("cook_post_email");
	 
/****************************************************************************/
/**************************User Create Query *********************************/
/****************************************************************************/
	$scope.create_complaint = function() 
	{		
		$http.post('create_complaint.php', {
		'field_8':$scope.field_8,'email':$scope.cook_user_email,'sendto':$scope.cook_post_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Sent Successfully");
					
				window.location = "post_chat.html";
			
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Un Successfully");
			}
        });
    }

	
});