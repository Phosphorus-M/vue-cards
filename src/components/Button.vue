<template>
  <sui-container>
    <sui-divider hidden />
    <sui-header as="h1" floated="left">
      <sui-icon name="arrow left" />
      Click Fork to get started
    </sui-header>

<sui-button content="Pause" icon="pause" label-position="left" />
    <sui-button content="Next" icon="right arrow" label-position="right" />
    <sui-divider hidden clearing />
    <sui-message info>
      After forking, update this template to demonstrate the bug.
    </sui-message>
  </sui-container>
</template>

<script>
export default {};
</script>
