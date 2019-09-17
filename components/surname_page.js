


var SurnamePage = Vue.component('surname-page',{
	template:`
	<div class="surname-page">
	<div div="container">
		<div class="row">
		</div>
		<div class="row">
			<div class="col-md-2">
			</div>
			<div class="col-md-8">
				<div class="surname card">
					<div class="card-body">
						<span class="card-title">Surname</span>
						<br />
						<div v-if="surnameType.surname.modify_mode">
							<input type="text" class="form-control" v-model="surnameType.surname.value" :placeholder="currentSurname.surname" />
						</div>
						<div v-else>
							{{currentSurname.surname}}
						</div>
						<br/>
						<div class="row">
							<div class="col-md-10">
							</div>
							<div class="colmd-2">
								<button id="surname" class="btn btn-primary" @click="modify">modify</button>
							</div>
						</div>
					</div>
				</div>
				<div class="praise-nameis card">
					<div class="card-body">
						<span class="card-title">Praise name</span>
						<br />
						
						<br/>
						<div v-if="surnameType.praise_name.modify_mode">
							<input type="text" class="form-control" v-model="surnameType.praise_name.value" :placeholder="currentSurname.praise_name" />
							 <small id="emailHelp" class="form-text text-muted">Your modificcation is:</small>
							 <span>{{surnameType.praise_name.value}}</span>
						</div>
						<div v-else>
							{{currentSurname.praise_name}}
						</div>
						<div class="row">
							<div class="col-md-10">
							</div>
							<div class="colmd-2">
								<button id="praise_name" class="btn btn-primary" @click="modify">modify</button>
							</div>
						</div>
					</div>
				</div>
				<!--
				<div class="related_surnames card">
					<div class="card-body">
						<span class="card-title">Related surnames</span>
						<br />
		
						<ul>
							<li v-for="related_surname in currentSurname.relations">
								{{related_surname}}
							</li>	
						</ul>
						<br/>
						<div >
							<input class="form-control" placeholder="add surname" />
						</div>
						<br />
						<div class="row">
							<div class="col-md-10">
							</div>
							<div class="colmd-2">
								<button id="related_surname" class="btn btn-primary" @click="modify">add</button>
							</div>
						</div>
					</div>
				</div>
				-->
				<div class="are_you card">
					<div class="card-body">
						<span>Are you a {{currentSurname.surname}}</span>
						<br />
						<input id="are_you" type="radio" class="form-control"value="yes" @click="modify" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	`,
	props:['user_id'],
	template:'#surname-page',
	data(){
		return{
			surnameType:{
				surname:{
					value:'',
					modify_mode:false
				},
				praise_name:{
					value:'',
					modify_mode:false
				},
				relatedSurnames:[]
			},
			
		}
	},
	methods:{
		modify(e){
			console.log(e.target.id);
			if(e.target.id === 'surname'){
				if(this.surnameType.surname.modify_mode){
					alert("Submited modification to admin");
				}
				return this.surnameType.surname.modify_mode = true;
			}else if(e.target.id === 'praise_name'){
				if(this.surnameType.praise_name.modify_mode){
					alert("Submited modification to admin");
				}
				return this.surnameType.praise_name.modify_mode = true;
			}else if(e.target.id === 'related_surname'){
				alert("submited related Surnames")
			}else if(e.target.id === 'are_you'){
				alert("Are you");
			}
			
		},
		addSurname(){
			
		}
	},
	computed:{
		currentSurname(){
			//this.user_id = this.$route.params.user_id;
			
			return store.state.search_results.filter(surname => surname.id === this.$route.params.user_id)[0];
		}
	},
	
})