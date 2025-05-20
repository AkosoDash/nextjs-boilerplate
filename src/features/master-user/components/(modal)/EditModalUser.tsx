'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { userSchema, UserSchema } from '../../schemas/userSchema'
import { Form } from '@/components/ui/form' // ShadCN/ui form

export const EditUserModal = ({ user }: { user: UserSchema }) => {
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: user
  })

  const onSubmit = (data: UserSchema) => {
    console.log('Updated user:', data)
    // Call userApi.updateUser() here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Form fields (ShadCN) */}
        <input {...form.register('name')} placeholder='Name' />
        <input {...form.register('email')} placeholder='Email' />
        <button type='submit'>Save</button>
      </form>
    </Form>
  )
}
