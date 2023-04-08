import { styled } from '../../styles'

import * as LabelPrimitive from '@radix-ui/react-label'

export const ContainedTextField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const WrappedInput = styled('div', {
  alignItems: 'center',
  boxSizing: 'border-box',

  borderWidth: 'thin',
  borderStyle: 'solid',
  borderColor: '$border',

  display: 'flex',
  gap: '$2',

  '& svg': {
    fill: '$border',
    '& path': {
      fill: '$border',
    },
  },

  '&:hover': {
    borderColor: '$secondary-light-active',
    '& svg': {
      fill: '$secondary-light-active',
      '& path': {
        fill: '$secondary-light-active',
      },
    },
  },
  '&:has(input:focus)': {
    borderColor: '$secondary-light-active',
    '& svg': {
      fill: '$secondary-light-active',
      '& path': {
        fill: '$secondary-light-active',
      },
    },
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  variants: {
    size: {
      small: {
        height: '$8',

        padding: '$2 $4',

        lineHeight: '$base',

        fontSize: '$3',

        borderRadius: '$1',
      },
      medium: {
        height: '$10',

        padding: '$2 $4',
        borderRadius: '$1',

        fontSize: '$4',
      },
      large: {
        height: '$12',
        padding: '$3 $4',
        borderRadius: '$1',

        fontSize: '$5',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  color: '$secondary-light-active',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: '100%',
  fontWeight: '$medium',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$border',
  },

  '&:hover': {
    '&::placeholder': {
      color: '$secondary-light-active',
    },
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      medium: {
        fontSize: '$sm',
      },
      large: {
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const Hint = styled('span', {
  alignSelf: 'end',
})

export const Label = styled(LabelPrimitive.Root, {
  color: '$secondary-light-active',
  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      medium: {
        fontSize: '$md',
      },
      large: {
        fontSize: '$lg',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})
