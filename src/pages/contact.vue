<template>
  <Layout>
    <template #header>
      <h1 class="main__title h0">Get in touch</h1>
      <p class="main__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro, corporis facere doloremque nemo voluptas rem a ad nesciunt ducimus obcaecati delectus doloribus nihil aliquid reprehenderit, minima ipsum aut iure.</p>
    </template>
    <form class="contant-form">
      <div class="contant-form__row">
        <div class="contant-form__field">
          <label class="input-label" for="name">Name</label>
          <input class="input" type="text" name="name" id="name" v-model="contact.name">
        </div>
        <div class="contant-form__field">
          <label class="input-label" for="email">Email</label>
          <input class="input" type="text" name="email" id="email" v-model="contact.email">
        </div>
      </div>
      <div class="contant-form__row">
        <div class="contant-form__field">
          <label class="input-label" for="message">Message</label>       
          <textarea class="input" rows="4" name="message" id="message" v-model="contact.message"></textarea>
        </div>
      </div>
      <div class="contant-form__row">
        <button class="button button--primary" type="button" @click="handelSubmit">Submit</button>
      </div>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  },
  data() {
    return {
      contact: {}
    }
  },
  methods: {
    handelSubmit() {
      const {name, email, message} = this.contact
      console.log(name, email, message)
    }
  }
}
</script>

<style lang="scss">
.contant-form {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    flex-direction: row;
  }

  &__row + &__row {
    margin-top: $spacing--sm;
  }

  &__field {
    flex: 1;
  }

  &__field + &__field {
    margin-left: $spacing--sm;
  }

  textarea.input {
    resize: none;
  }

  @media only screen and (max-width: $breakpoint--phone) {
    &__row {
      flex-direction: column;
    }

    &__field + &__field {
      margin-left: 0px;
      margin-top: $spacing--sm;
    }
  }
}
</style>