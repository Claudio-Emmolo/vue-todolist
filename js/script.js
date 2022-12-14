const {createApp} = Vue;

createApp({
	data() {
		return{
             todoList : [
				{
					text : 'Latte',
					done : true
				},
				{
					text : 'Zucchero',
					done : true
				},
				{
					text : 'Uova',
					done : false
				},
				{
					text : 'Pasta',
					done : false
				},
				{
					text : 'Biscotti',
					done : true
				},
				{
					text : 'Olio',
					done : true
				},
			 ]
		}
	},

    methods: {

    },

}).mount ('#app')
