<template>
    <Story title="VAlert">
        <Variant title="Default Alert">
            <Alert>
                <Terminal />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
        </Variant>
      <Variant title="Success Alert">
        <Alert variant="success">
          <AlertTitle>Success Alert</AlertTitle>
          <AlertDescription>This is a success alert.</AlertDescription>
        </Alert>
      </Variant>
      <Variant title="Error Alert">
        <Alert variant="error">
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>This is an error alert.</AlertDescription>
        </Alert>
      </Variant>
      <Variant title="Warning Alert">
        <Alert variant="warning">
          <AlertTitle>Warning Alert</AlertTitle>
          <AlertDescription>This is a warning alert.</AlertDescription>
        </Alert>
      </Variant>
    </Story>
  </template>

  <script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '../components';
import { Terminal } from 'lucide-vue-next'
</script>