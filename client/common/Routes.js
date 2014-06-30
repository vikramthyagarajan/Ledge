Router.map(function(){
	this.route('homepage',{
		path:'/',
		data:function(){
			return {projects:Projects.find({})};
		}
	});
	this.route('projectview',{
		path:'/projects/:projectid',
		data:function(){
			var prjid=this.params.projectid; 
			return {project:Projects.findOne({_id:prjid}),classes:Classes.find({ProjectId:prjid})};
		}
	});
});
