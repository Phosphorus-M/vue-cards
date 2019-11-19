<template>
    <sui-container text-align="left">
        <sui-header size="medium">{{ header }}</sui-header>
        <div v-for="value in contacts">
            <router-link :to="{name: 'verContacto',  params: { contact: value }}" >
                <Contact :info="value" />
            </router-link>
        </div>
    </sui-container>
</template>

<script>
import Contact from './Contact'

export default {
  name: 'ListOfContacts',
  props: {
      contacts: {
          type: Array,
          default: JSON.stringify(this)
      },
      header: {
          type: String,
          default: ""
      }
    },
  components: {
    Contact
  },
}
</script>