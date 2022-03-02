import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '.'

describe('<Input />', () => {
  it('render', () => {
    const { getByTestId } = render(<Input />)
    const element = getByTestId('input-component')

    expect(element).toBeInTheDocument()
  })

  it('render with placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Email" />)
    const element = getByPlaceholderText('Email')

    expect(element).toBeInTheDocument()
  })

  it('render with icon', () => {
    const { getByTestId } = render(<Input icon="email" />)
    const element = getByTestId('input-icon')

    expect(element).toBeInTheDocument()
  })

  it('render with focus', () => {
    const { getByTestId } = render(<Input />)
    const element = getByTestId('input-component')

    userEvent.tab()

    expect(element).toHaveFocus()
    expect(element).toHaveStyle({
      border: '2px solid hsla(52, 89%, 63%, 1)',
    })
  })

  it('render input with error', () => {
    const { getByTestId } = render(<Input error />)
    const element = getByTestId('input-component')

    expect(element).toHaveStyle({
      border: 'border: 2px solid hsla(0, 94%, 53%, 1)',
    })
  })

  it('update value on typing', () => {
    const { getByTestId } = render(<Input />)
    const element = getByTestId('input-component')
    const text = 'lorem ipsum'

    userEvent.type(element, text)

    expect(element).toHaveValue(text)
  })

  it('dont update value on typing when disabled', () => {
    const { getByTestId } = render(<Input disabled />)
    const element = getByTestId('input-component')
    const text = 'lorem ipsum'

    userEvent.type(element, text)

    expect(element).not.toHaveValue(text)
  })
})
