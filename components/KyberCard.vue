<template>
	<v-card class="process-card mb-3 mt-2 " >
		<v-card-text class="pt-1 pl-6 pr-6 pb-0">
			<v-row no-gutters>
				<v-col cols="9" class="ma-0 pa-0">
					<v-row align="center" class="mb-3 mt-3">
						<v-col cols="12" class="pa-0 mr-4 ">
							<div class="float-left   mr-2">
								<v-icon :color="getStatusIcon.color">
									{{ this.getStatusIcon.icon }}
								</v-icon>
							</div>
							<div class="pointer float-left mr-4 pt-1 process_title">
								{{item.name}}
							</div>
							<!-- tipo proceso -->


							<!--div class="float-left process_card_titles pt-1 ml-8">{{ $t("processes.dateCreated") }}</div>
							<div class="float-left process_title pt-1 ml-2">{{process.dateCreated}} </div>

							<div class="float-left process_card_titles pt-1 ml-8">{{ $t("processes.dateCompleted") }}</div>
							<div class="float-left process_title pt-1 ml-2">{{process.dateCompleted ? process.dateCompleted : '-'}} </div-->

						</v-col>
					</v-row>
					<v-row no-gutters class="process_card_column_titles align-content-center">
						<v-col cols="3"> Localización </v-col>
						<v-col cols="3"> Kw  </v-col>
					</v-row>
					<v-row no-gutters class="process_title_columns align-content-center pb-2 pt-1">
						<v-col cols="3"> {{ item.location}}</v-col>
						<v-col cols="3"> {{ item.kw}}</v-col>
					</v-row>
				</v-col>
				<v-col cols="3" class="pt-2 pb-2" >
					<v-img  contain src="qr_ex.png" max-height="100"  />
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "KyberCard",
	props: {
		item: {type: Object}
	},
	computed:{
		getStatusIcon() {
			switch (this.item.status) {
				case "PENDING":
					return {icon: 'mdi-timer-sand', color: 'yellow'}
					break;
				case "COMPLETED":
					return {icon: 'mdi-playlist-check', color: 'green'}
					break;
				case "EXECUTING":
					return {icon: 'mdi-cog', color: 'orange'}
					break;
				default:
					return {icon: 'mdi-playlist-remove', color: 'red'}
					break;
			}
		}
	},
	methods: {

	}
}
</script>

<style scoped lang="scss">
.process-card {
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
	background-color: white;
}

.process-card:hover {
	elevation: 8;
	cursor: pointer;
	box-shadow: 0 2px 4px 0 #20afbe !important;
}

.process_title {
	color: #384554;
	font-size: 16px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
}

.process_title:hover {
	color: #1badbd;
}

.process_card_titles {
	font-size: 16px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: 0.9px;
	color: #8da2ae;
}

.process_card_column_titles {
	font-size: 14px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: 0.9px;
	color: #8da2ae;
}

.process_title_columns {
	color: #384554;
	font-size: 16px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
}

.action_dialog_active {
	box-shadow: 0 2px 4px 0 #20afbe !important;
}
</style>
