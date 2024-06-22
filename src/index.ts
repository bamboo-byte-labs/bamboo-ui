import { App, Plugin } from 'vue';
import VButton from './components/VButton.vue';
import Accordion from './components/VAccordion.vue';
import AccordionContent from './components/VAccordionContent.vue';
import AccordionItem from './components/VAccordionItem.vue';
import AccordionTrigger from './components/VAccordionTrigger.vue';
import "../index.css";

const Bamboo_ui: Plugin = {
    install: (app: App, _options?: Record<string, any>) => {
        app.component('VButton', VButton);
        app.component('Accordion', Accordion);
        app.component('AccordionContent', AccordionContent);
        app.component('AccordionItem', AccordionItem);
        app.component('AccordionTrigger', AccordionTrigger);
    }
}

export default Bamboo_ui;
export { VButton, Accordion, AccordionContent, AccordionItem, AccordionTrigger };
