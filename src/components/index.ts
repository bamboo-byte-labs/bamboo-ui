export { default as AlertDialog } from './VAlertDialog.vue';
export { default as AlertDialogTrigger } from './VAlertDialogTrigger.vue';
export { default as AlertDialogContent } from './VAlertDialogContent.vue';
export { default as AlertDialogHeader } from './VAlertDialogHeader.vue';
export { default as AlertDialogTitle } from './VAlertDialogTitle.vue';
export { default as AlertDialogDescription } from './VAlertDialogDescription.vue';
export { default as AlertDialogFooter } from './VAlertDialogFooter.vue';
export { default as AlertDialogAction } from './VAlertDialogAction.vue';
export { default as AlertDialogCancel } from './VAlertDialogCancel.vue';
export { default as VButton } from './VButton.vue';
export { default as Accordion } from './VAccordion.vue';
export { default as AccordionContent } from './VAccordionContent.vue';
export { default as AccordionItem } from './VAccordionItem.vue';
export { default as AccordionTrigger } from './VAccordionTrigger.vue';
export { default as Alert } from './VAlert.vue';
export { default as AlertTitle } from './VAlertTitle.vue';
export { default as AlertDescription } from './VAlertDescription.vue';
import { type VariantProps, cva } from 'class-variance-authority'


export const alertVariants = cva(
    'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
    {
      variants: {
        variant: {
          default: 'bg-background text-foreground',
          destructive:
            'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        },
      },
      defaultVariants: {
        variant: 'default',
      },
    },
  )
  
  export type AlertVariants = VariantProps<typeof alertVariants>