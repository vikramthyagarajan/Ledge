Template.classesview.events({
	'click .classrow':function(event){
		Session.set("selectedClass",event.currentTarget.id);
		// console.log(event.currentTarget.dataset.source);
	},
	'click .editClass':function(event){
		var clsid=event.currentTarget.parentElement.id;
		Router.go('editor',{classid:clsid});
	},
	'click .deleteClass':function(event){
		var clsid=event.currentTarget.parentElement.id;
		var prjid=event.currentTarget.parentElement.dataset.source;
		Projects.update({_id:prjid},{$pull:{Classes:clsid}});
		Classes.remove({_id:clsid});
	}
});
Template.projectviewmodals.events({
	'click #createClass':function(){
		var className=document.getElementById("newClassName").value.toString();
		var description=document.getElementById("newClassDescription").value.toString();
		if(Validation.isBlank(className))
			console.log("You gotta fill the box dude");
		else if(!Validation.isValidProjectName(className))
			console.log("You gotta type a valid name dude");
		else{
			var clsid=Classes.insert({ClassName:className,ClassDescription:description,ProjectId:this._id});
			Projects.update({_id:this._id},{$push:{Classes:clsid}});
		}
	}
});
Template.classesview.helpers({
	'isActive':function(id){
		var selectedClass=Session.get("selectedClass");
		if(selectedClass==null)
		{
			return "";
		}
		else if(selectedClass===id)
			return "active";
		else return "";
	}
});
