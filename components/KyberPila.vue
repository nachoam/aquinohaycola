<template>
	<div>
		<div class="kyber_text">{{value_kw}} kW</div>
		<div class="kyber_pila_top"/>
		<div class="kyber_pila" >
			<ul >
				<li :class="value_kw >= 400 ? 'full': 'empty'"></li>
				<li :class="value_kw >= 300 ? 'full': 'empty'"></li>
				<li :class="value_kw >= 200 ? 'full': 'empty'"></li>
				<li :class="value_kw >= 100 ? 'full': 'empty'"></li>
				<li :class="value_kw >= 0 ? 'full': 'empty'"></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "KyberPila",
	props:['value_kw'],
	data:()=>({
		value:200
	})
}
</script>

<style scoped>
.kyber_text{
	width: 100px;
	font-weight: bold;
	font-size: 15pt;
	margin-bottom: 2pt;
	color: #1e9fb0;
	text-align: center;
}
.kyber_pila_top{
	width: 40px;
	height: 10px;
	background: #384554 ;
	margin-left: 30px;
}
	.kyber_pila{
		width: 100px;
		background: #384554 ;
		padding:2px;
		border-radius: 5px !important;
	}
	.kyber_pila ul{
		padding:0px
	}
	.kyber_pila li{
		height: 20px;
		margin: 5px 2px;
		background: #41f8f9;
		border-radius: 5px !important;
		list-style-type: none;
	}
	.kyber_pila li.empty{
		background: #848888;
	}

</style>