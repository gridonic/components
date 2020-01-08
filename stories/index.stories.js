/* eslint-disable import/no-extraneous-dependencies */
import './storybook.scss';

import { storiesOf } from '@storybook/vue';

storiesOf('Buttons|Plain', module)
  .add(
    'default',
    () => ({
      template: '<button class="button-plain">Lorem ipsum… 😎</button> ',
    }),
    {
      notes: 'The `button-plain` styles are mostly used as a reset/normalize mixin for actual button styles.',
    },
  );
