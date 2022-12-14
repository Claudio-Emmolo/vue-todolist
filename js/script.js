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

		removeToDo(itemToRemove){
			const toRemoveCheck = this.todoList.indexOf(itemToRemove);
			if (toRemoveCheck > -1 ){
				this.todoList.splice(toRemoveCheck, 1)
			}
		},

		sendListItem(){
			const obj = {};
			
			obj['text'] = this.userToDo
			obj['done'] = false

			this.todoList.push(obj)
		}

    },

}).mount ('#app')
