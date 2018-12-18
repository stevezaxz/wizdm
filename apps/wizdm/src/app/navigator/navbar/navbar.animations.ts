import { trigger, state, animate, style, transition, query, stagger, group } from '@angular/animations';

const $timing = '450ms cubic-bezier(.8, -0.6, 0.2, 1.5)';

export let $animations = [

  trigger('menu', [
    transition('* => *', [
/*      
      query(':enter', style({ display: 'none'}), { optional: true }),

      query(':leave', stagger(-100, 
        animate($timing, 
          style({ transform: 'scale(0.5)', opacity: 0 }) 
        )
      ), { optional: true }),
  */
      query(':enter', [
        style({ display: '*', transform: 'scale(0.5)', opacity: 0 }),
        stagger(100, animate($timing))
      ], { optional: true })
    ])
  ])
]