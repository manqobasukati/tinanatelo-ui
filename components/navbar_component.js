

Vue.component('nav-bar',{
	template:`
	<div class="nav-bar-component">
		<div class="row">
			<div class="col-md-9">
			</div>
			<div class="col-md-3">
				<ul class="nav nav-pills ">
					<li class="nav-item">
						<router-link to="/home">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/about">About</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/stats">Stats</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
	`
})