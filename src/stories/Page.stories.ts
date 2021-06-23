import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata } from '@storybook/angular';
import Button from './button.component';
import Header from './header.component';
import Page from './page.component';

const parameters = {}
const args = {
  user: {},  
  inputFromBasePage: {newValue: 'myNewValue'}
};
const argTypes = {};

export default {
  title: 'Example/Page',
  decorators: [
    moduleMetadata({
      declarations: [Button, Header],
      imports: [CommonModule],
    }),
  ],
  parameters,
  args,
  argTypes,
} as Meta;

// const Template: Story<Page> = (args: Page) => ({
//   props: args,
// });

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   ...HeaderStories.LoggedIn.args,
//   inputFromBasePage: 'newValue'
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };

export const LoggedIn = (props: any) => ({
  component: Page,
  props,
});