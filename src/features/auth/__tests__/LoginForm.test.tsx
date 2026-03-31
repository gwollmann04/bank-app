import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, it, beforeEach, expect } from 'vitest'

import LoginForm from '../components/LoginForm'
import { useLogin } from '../state/useLogin'

vi.mock('../state/useLogin', () => ({
  useLogin: vi.fn()
}))

describe('LoginForm', () => {
  const mockHandleLogin = vi.fn()

  beforeEach(() => {
    const mockedUseLogin = useLogin as unknown as ReturnType<typeof vi.fn>

    mockedUseLogin.mockReturnValue({ handleLogin: mockHandleLogin })
    mockHandleLogin.mockReset()
  })

  it('Should render input and button', () => {
    render(<LoginForm />)
    expect(screen.getByPlaceholderText('Digite seu username')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Should call handleLogin with correct username', async () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Digite seu username')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'teste123')
    await userEvent.click(button)

    expect(mockHandleLogin).toHaveBeenCalledWith('teste123')
  })

  it('Should call handleLogin with invalid username', async () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Digite seu username')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'errado')
    await userEvent.click(button)

    expect(mockHandleLogin).toHaveBeenCalledWith('errado')
  })

  it('Should show validation error if username is less than 3 characters', async () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Digite seu username')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'ab')
    await userEvent.click(button)

    expect(await screen.findByText('Mínimo 3 caracteres')).toBeInTheDocument()
    expect(mockHandleLogin).not.toHaveBeenCalled()
  })

  it('Should show loader while isSubmitting', async () => {
    mockHandleLogin.mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 2000)))

    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Digite seu username')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'teste123')
    await userEvent.click(button)

    expect(button).toHaveTextContent('')
    expect(button.querySelector('svg')).toBeTruthy()
  })
})
