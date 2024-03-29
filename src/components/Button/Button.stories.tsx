import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FaPlusCircle } from 'react-icons/fa'

import Button from './Button'

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['none', 'primary', 'success', 'danger'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>

export const _Button: ComponentStory<typeof Button> = (args) => (
  <>
    <div className="flex gap-4">
      <Button
        {...args}
        text="Button"
        bgColor="primary"
        size="md"
        textSize="md"
      />
      <Button
        {...args}
        text="Button"
        bgColor="primary"
        size="md"
        textSize="md"
        shape="rounded-full"
      />
      <Button
        {...args}
        text="Button"
        bgColor="none"
        size="md"
        textSize="md"
        shape="default"
        outline="outline-primary"
        textColor="primary"
      />
    </div>
    <br />
    <Button
      {...args}
      text="Button"
      bgColor="danger"
      size="sm"
      shape="default"
      textSize="sm"
    />
    <br />
    <Button
      {...args}
      text="Button"
      bgColor="danger"
      size="md"
      shape="default"
      textSize="md"
    />
    <br />
    <Button
      {...args}
      text="Button"
      bgColor="danger"
      size="full"
      shape="rounded-lg"
      textSize="lg"
    />
    <br />
    <Button
      {...args}
      text="Button"
      bgColor="success"
      size="sm"
      shape="default"
      textSize="sm"
      suffix={<FaPlusCircle />}
    />
    <br />
    <Button
      {...args}
      text="Button"
      bgColor="success"
      size="sm"
      shape="rounded-full"
      textSize="sm"
      suffix={<FaPlusCircle />}
    />
  </>
)
