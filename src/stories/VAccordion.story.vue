<template>
    <Story title="Accordion" :layout="{ type: 'grid', width: 200 }">
      <Variant title="Single Item Collapsible">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>
              Content for item 1
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>
              Content for item 2
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Variant>
      <Variant title="Multiple Items">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>
              Content for item 1
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>
              Content for item 2
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Item 3</AccordionTrigger>
            <AccordionContent>
              Content for item 3
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Variant>
    </Story>
  </template>
  
  <script setup lang="ts">
  import Accordion from '../components/VAccordion.vue';
  import AccordionItem from '../components/VAccordionItem.vue';
  import AccordionTrigger from '../components/VAccordionTrigger.vue';
  import AccordionContent from '../components/VAccordionContent.vue';
</script>
  