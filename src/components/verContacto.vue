<template>
<sui-container text-align="center" >
    <sui-segment style="margin-top: 20px; margin-bottom: 50px;">
	    <sui-container text-align="center" >
            <Header :buttons="buttons" :text="JSON.parse(contact.isFavorite)" />
            <sui-divider hidden clearing />
            <sui-image :src="contact.largeImageURL" size="medium" rounded  centered />
            <sui-header size="large">{{contact.companyName}}</sui-header>
            <sui-header size="huge">{{contact.name}}</sui-header>
            <sui-divider />
            <Number :numbers="contact.phone" />
            <sui-header size="medium" class="category">Address:</sui-header>
            <div class="items">
            <sui-header size="small">{{contact.address.street}}</sui-header>
            <sui-header size="small">{{contact.address.city}}, {{contact.address.state}} {{contact.address.zipCode}}, {{contact.address.country}}</sui-header>
            </div>
            <sui-divider />
            <sui-header size="medium" class="category">Birthdate:</sui-header>
            <div class="items">
            <sui-header size="small">{{contact.birthdate}}</sui-header>
            </div>
            <sui-divider />
            <sui-header size="medium" class="category">Email:</sui-header>
            <div class="items">
                <sui-header size="small">{{contact.emailAddress}}</sui-header>
            </div>
	    </sui-container>
    </sui-segment>
</sui-container>

</template>

<script>
import Contacto from './contact-logic'
import Header from './Header'
import Number from './Number'

export default {
    name: 'Home',
    props: ["buttons", "contact"],
    components: {Header, Number }
}

</script>

<style >
.category{
    margin:0;
    margin-bottom: 20px;
    opacity: 0.5;
    width: 50%;
}
.items{
    margin-top: -20px;
}
</style>