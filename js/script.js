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
			 ]
		}
	},

    methods: {

    },

}).mount ('#app')
