<template>
  <div>
    <h2>Acceso a datos del cmp padre desde el cmp hijo</h2>
    <p>Parent App: {{$parent.appName}}</p>
    <p>Parent Root: {{$parent.$parent.rootName}}</p>
  </div>
</template>
