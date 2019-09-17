
<template id="view-results">
	<div class="view-results-component">
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Surname</th>
					<th scope="col">Praise Name</th>
					<th scope="col">Related</th>
					<th scope="col">Are you?</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="result in results">
					<td>
						<router-link :to="{name:'SurnamePage',params:{user_id:result.id}}" >
							${result.id}
						</router-link>
					</td>
					<td>${result.surname}</td>
					<td>${result.praise_name}</td>
					<td>
						<span v-for="related_surname in result.relations">
							${related_surname},
						</span>
					</td>
					<td><input class="form-check-input" type="checkbox" :value="result.are_you" id="defaultCheck2"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	var ViewResults = {
	template:'#view-results',
	delimiters: ["${", "}"],
	computed:{
		results(){
			return store.getters.getSearchResults;
		}
	}
}
</script>
<