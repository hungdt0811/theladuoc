import React from 'react';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import FormGroupStories from './FormGroup.stories';

export default {
	...FormGroupStories,
	title: 'Forms/<FormGroup>/Basic',
	argTypes: {
		...FormGroupStories.argTypes,
		id: { table: { type: 'text' } },
		label: { control: { type: 'text' } },
		isHiddenLabel: { control: { type: 'boolean' } },
		size: { control: { type: 'inline-radio' } },
		isColForLabel: { control: { type: 'boolean' } },
		labelClassName: { control: { type: 'text' } },
		childWrapperClassName: { control: { type: 'text' } },
		formText: { control: { type: 'text' } },
		children: { control: { type: 'object' } },
	},
};

const Template = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<FormGroup {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {
	id: 'storybook--name',
	label: 'Name',
	formText: 'This is a basic form group',
	children: <Input placeholder='John Doe' />,
};

export const Float = Template.bind({});
Float.args = {
	...Default.args,
	isFloating: true,
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
	...Default.args,
	isHiddenLabel: true,
};

export const SizeSm = Template.bind({});
SizeSm.args = {
	...Default.args,
	size: 'sm',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
	...Default.args,
	size: 'lg',
};

export const ColUse = Template.bind({});
ColUse.args = {
	...Default.args,
	isColForLabel: true,
	labelClassName: 'col-sm-2',
	childWrapperClassName: 'col-sm-10',
};

export const ColUseSm = Template.bind({});
ColUseSm.args = {
	...ColUse.args,
	size: 'sm',
};

export const ColUseLg = Template.bind({});
ColUseLg.args = {
	...ColUse.args,
	size: 'lg',
};
