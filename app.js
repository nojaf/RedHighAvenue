import * as toastr from "toastr";

export class App {
	
	constructor(){
		this.title = "";
		this.message = "";
	}
	
	submit(){
		if(!this.title && !this.message){
			toastr.error("Please fill in the form!", "error");
		}
		else
		{
			toastr.success(this.message, this.title);	
		}
	}
}