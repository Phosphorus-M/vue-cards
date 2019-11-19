<template>
    <div>
        <div v-if="buttons">
            <router-link :to="{name: 'Home'}" >
                <sui-button floated="left" icon="angle left" color="blue" />
            </router-link>
            <sui-button floated="right" icon="star" color="yellow"/>
        <sui-button-group attached="top">
        
        <div is="sui-button" content="Contact"/>
        </sui-button-group>
        </div>
    	<sui-header size="huge" v-else >Contactos</sui-header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ["text", "buttons", {"cosa":"cosa" }]
};
</script>

