Template.homepage.events({
	'click #createProject':function(event){
		var projectName=document.getElementById("newProjectName").value.toString();
		var description=document.getElementById("newProjectDescription").value.toString();
		if(Validation.isBlank(projectName))
			console.log("You gotta fill the box dude");
		else if(!Validation.isValidProjectName(projectName))
			console.log("You gotta type a valid name dude");
		else{
			var id=Projects.insert({'ProjectName':projectName,'ProjectDescription':description});
			$('#newProject').modal('toggle');
			Router.go('projectview',{projectid:id});
		}
	}
});
Template.projectsview.events({
	'click .projectrow':function(event){
		console.log("clicked now"+event.currentTarget.id);
		Session.set('selectedProject',event.currentTarget.id);
	},
	'click .openProject':function(event){
		var prjid=event.currentTarget.parentElement.id;
		Router.go('projectview',{projectid:prjid});
	},
	'click .deleteProject':function(event){
		var prjid=event.currentTarget.parentElement.id;
		Projects.remove({_id:prjid});
	}
});
Template.projectsview.helpers({
	'isActive':function(id){
		console.log("occurred now"+id);
		var selectedProject=Session.get("selectedProject");
		if(selectedProject==null)
		{
			return "";
		}
		else if(selectedProject===id)
			return "active";
		else return "";
	}
});
