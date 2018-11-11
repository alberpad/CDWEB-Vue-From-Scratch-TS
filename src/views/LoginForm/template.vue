<template>
  <div>
    <h2>Formulario de login</h2>
    <p v-show="logged" style="background: green; color: #fff;">
      Has iniciado sesión con los datos: {{user}}
    </p>
    <!-- submit.prevent ejecuta el formulario pero sin hacer redirección -->
    <form @submit.prevent="login">
      <input type="email" v-model="user.email" placeholder="test@m.com" name="email" />
      <input type="password" v-model="user.password" placeholder="1234" name="password" />
      <input type="submit" value="Iniciar sesisión" />
    </form>
  </div>
</template>
