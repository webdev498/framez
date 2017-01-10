var app = angular.module("framezapp",[]);

app.controller('mainController', ['$http', '$scope' , function($http , $scope){
	var self = this;

	self.test_value = 100;

	self.remain_person_counts = [];

	$scope.activeTitle = function(index){
		jQuery(".boxportfolio4").eq(index + 1).find(".boxcontainer").find("#title_bar").addClass("activate");
		jQuery(".boxportfolio4").eq(index + 1).find(".boxcontainer").find(".information").show();
	}

	$scope.deactiveTitle = function(index){
		jQuery(".boxportfolio4").find(".boxcontainer").find("#title_bar").removeClass("activate");
		jQuery(".boxportfolio4").find(".boxcontainer").find(".information").hide();
	}
	var data = [
		{
			"project_image" : "img/project_images/1.png",
			"project_title" : "WIX Commercial Superbowl 2015",
			"collaborators" : [],
			"messages" : [
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 5,
					"comment" : "Nam felis lectus, ultricies sit am tellus et, bibdum."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/2.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}			
			],
			"messages" : [
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 3,
					"comment" : "We would do that!"
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/3.png",
			"project_title" : "Lorem ipsum dolor sit consectetur am adipiscing elit.",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/e.png",
					"name" : "William"
				}		
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/4.png",
			"project_title" : "WIX Commercial Superbowl 2015",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/e.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 5,
					"comment" : "Nam felis lectus, ultricies sit am tellus et, bibdum.fasdf sadf sadf sdfsadfwef wef wef wefwef"
				}
			]
		},
		{
			"project_image" : "img/project_images/5.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/6.png",
			"project_title" : "Lorem ipsum dolor sit consectetur am adipiscing elit.",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}			
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/7.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}						
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/e.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}						
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/8.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}						
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/a.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}						
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/b-original.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}						
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/c-original.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}						
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		},
		{
			"project_image" : "img/project_images/d.png",
			"project_title" : "Project Name",
			"collaborators" : [
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				},
				{
					"avatar" : "img/project_images/a.png",
					"name" : "Lina"
				}, 
				{
					"avatar" : "img/project_images/b.png",
					"name" : "Jackson"
				}, 
				{
					"avatar" : "img/project_images/c.png",
					"name" : "William"
				}, 
				{
					"avatar" : "img/project_images/d.png",
					"name" : "John"
				}						
			],
			"messages" : [
				{
					"avatar" : "img/project_images/b.png",
					"createdAt" : 2,
					"comment" : "We would do that!"
				},
				{
					"avatar" : "img/project_images/a.png",
					"createdAt" : 7,
					"comment" : "It works well with the..."
				}
			],
			"cameras" : 7
		}
	];

	self.projects = data;

	for(var index = 0 ; index < data.length ; index ++){

		if(data[index].collaborators.length > 4){
			self.remain_person_counts.push(data[index].collaborators.length - 3);
		} else {
			self.remain_person_counts.push(0)
		}
	}

	setTimeout(function(){
		for(var index = 0 ; index < data.length ; index++){
			if(self.remain_person_counts[index] > 0) {
				jQuery(".boxportfolio4").eq(index + 1).find(".boxcontainer").find(".collaborators").find(".content").find(".avatar").last().remove();
			}
		}
	},500);
}]);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
        	// Function which is taken place when Scrolling //
        	

            scope.$apply();
        });
    };
});