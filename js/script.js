const {createApp} = Vue;

createApp({
	data() {
		return{
             todoList : [
				{
					text : 'Latte',
					done : false
				},
				{
					text : 'Zucchero',
					done : false
				},
				{
					text : 'Uova',
					done : true
				},
				{
					text : 'Pasta',
					done : true
				},
				{
					text : 'Biscotti',
					done : false
				},
				{
					text : 'Olio',
					done : false
				},
			 ],
			 userToDo : "",
			 errorText : false,
		}
	},

    methods: {

		removeToDo(itemToRemove, item){
			const toRemoveCheck = this.todoList.indexOf(itemToRemove);
			if (toRemoveCheck > - 1 ){
				this.todoList.splice(toRemoveCheck, 1);
			}
		},

		sendListItem(){

			const todoList = this.todoList

			if(todoList.some(todoList => todoList.text.toLowerCase() === this.userToDo.toLowerCase())  || (this.userToDo.length <= 1) ){
				console.log('Item già scritto');
				this.errorText = true;
				setTimeout (() => {
					this.userToDo = "";
					this.errorText = false;
				} , 1000);
			} else {
				this.errorText = false;

				const obj = {};
				
				obj['text'] = this.userToDo.charAt(0).toUpperCase() + this.userToDo.substring(1).toLowerCase();
				obj['done'] = false;
				
				this.todoList.push(obj);
				this.userToDo = "";
			}
		},

		swichDone(item){
			if(!this.todoList[item].done){
				this.todoList[item].done = true;
			} else {
				this.todoList[item].done = false;
			}
		}

    },

}).mount ('#app')
