Validation={
	'isBlank':function(value){
		if(value==null)
			return true;
		else if(value.length==0)
			return true;
		else return false;
	},
	"isValidProjectName":function(value){
		var pattern=new RegExp("[a-zA-Z][a-zA-Z0-9]*");
		return pattern.test(value);
	}
}
