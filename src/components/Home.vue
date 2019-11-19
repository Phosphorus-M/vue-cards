<template>
<sui-container text-align="center" >

    <sui-segment style="margin-top: 20px;  margin-bottom: 50px">
	    <sui-container text-align="center" >
            <Header style="padding-top: 50px !important" />
            <ListOfContacts header="Favoritos" :contacts="favoritos" />
            <sui-divider hidden />
            <ListOfContacts header="Otros contactos" :contacts="noFavoritos" />
	    </sui-container>
    </sui-segment>
</sui-container>

</template>

<script>
import Header from './Header'
import ListOfContacts from './ListOfContacts'
import buttonSui from './Button'
import axios from 'axios';
import Contacto from './contact-logic';

let favoritos = [];
let noFavoritos = [];


export default {
  name: 'Home',
  components: {
    Header,
    ListOfContacts,
    buttonSui
  },
  data() {
        return {
            info: null,
            favoritos: null,
            noFavoritos: null
        }
 },
 mounted () {
     favoritos= [];
    noFavoritos = [];
    axios
      .get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
      .then(response => {
          this.info = response.data;
            let cosa = null;
        this.cosa = response.data instanceof Array;
        response.data.forEach(contact => {
            let obj = new Contacto(contact.name, contact.id, contact.companyName,
                    contact.isFavorite, contact.smallImageURL, contact.largeImageURL,
                    contact.emailAddress, contact.birthdate, contact.phone, contact.address)
            if(JSON.parse(obj.isFavorite)) favoritos.push(obj);
            else noFavoritos.push(obj);
        });
        this.favoritos = favoritos;
        this.noFavoritos = noFavoritos;
      })
  },
  beforeDestroy(){
      this.info = null
      this.favoritos = null;
      this.noFavoritos = null;
  }
}



</script>

