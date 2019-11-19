<template>
    <sui-container text-align="left" >
    <div class="friend">
        <img :src="info.smallImageURL" />
        <p>
            <strong>{{info.name}}</strong>
            <span>{{ info.companyName }}</span>
        </p>
        <div class="status" v-if="info.isFavorite"><sui-icon name="star" color="yellow"/></div>
    </div>
    </sui-container>
</template>

<script>
export default {
  name: 'Contact',
  props: ["info"],
  data(){
      return {
          counter: 0
      }
  }
}

</script>

<style>
.friend{
	height:70px;
	border-bottom:1px solid #e7ebee;		
	position:relative;
}
.friend:hover{
	background:#f1f4f6;
	cursor:pointer;
}
.friend img{
	width:40px;
	border-radius:50%;
	margin:15px;
	float:left;
}

.friend p{
	padding:15px 0 0 0;			
	float:left;
	width:220px;
}
.friend p strong{
  font-weight:600;
  font-size:15px;
	color:#597a96;  

}
.friend p span{
	font-size:13px;
	font-weight:400;
	color:#aab8c2;
}
.friend .status{
	width:9px;
	height:9px;
	position:absolute;
	top:31px;
	right:17px;
}
</style>