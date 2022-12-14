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
			 userToDo : ""
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
			const obj = {};

			obj['text'] = this.userToDo.charAt(0).toUpperCase() + this.userToDo.substring(1).toLowerCase();
			obj['done'] = false;

			this.todoList.push(obj);
			this.userToDo = "";
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
