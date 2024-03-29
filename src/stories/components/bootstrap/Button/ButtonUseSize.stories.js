import React from 'react';

import Button from '../../../../components/bootstrap/Button';
import ButtonStories, { Default as DefaultStories } from './Button.stories';

export default {
	...ButtonStories,
	title: 'Components/<Button>/PROPS/size',
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	...DefaultStories.args,
};

export const Small = Template.bind({});
Small.args = {
	...DefaultStories.args,
	size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
	...DefaultStories.args,
	size: 'lg',
};
