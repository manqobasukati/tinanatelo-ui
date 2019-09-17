


Vue.component('surname-display',{
	template:`
	<div class="surname-display">
		<ul>
		<li v-for="(item, index) in allSurnames" >

				<span v-if='item[0]'>{{item[0]['surname'][0]}}</span>
				<ul>
					<li v-for="surname in item">
						<router-link :to="{name:'SurnamePage',params:{user_id:surname.id}}" >
							{{surname.surname}}
						</router-link>	
					</li>
				</ul>
			</li>
		</ul>
	</div>
	`,
	data(){
		return{
			input_surname:'',
			letters: ['A','B','C','D','E','F','G','H','I','J','K','L',
				'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
		}
	},
	computed:{
		  allSurnames(){
			let self = this;
			
			let names = store.getters.getAllSurnames.
					sort((a, b) => a.surname.localeCompare(b.surname));
			
			let surnames = {'A':[],'B':[],'C':[],
							'D':[],'E':[],'F':[],
							'G':[],'H':[],'I':[],
							'J':[],'K':[],'L':[],
							'M':[],'N':[],'0':[],
							'P':[],'Q':[],'R':[],
							'S':[],
						};
			
			for(var i=0;i<=self.letters.length;i++)
			{
				
				for(var j=0;j<=names.length - 1;j++){
					if(self.letters[i] === names[j].surname[0]){
						surnames[self.letters[i]].push(names[j]);
					}
				}
				
			}
			
			console.log(surnames);
			
			return surnames;
		}
	},
	methods:{
		search_surname(e){
			e.preventDefault();
			var self = this;
			store.dispatch('SEARCH_SURNAME_ACTION',self.input_surname);
			console.log(self.input_surname);
		}
	},
	async mounted(){
		await store.dispatch('LOAD_SURNAMES_FROM_SERVER_ACTION');
		//console.log(store.search_results);
	}
})