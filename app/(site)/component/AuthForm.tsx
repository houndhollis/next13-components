'use client';
import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/input';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-Icons/bs';

import React from 'react';
import { 
  FieldValues,
  useForm,
  SubmitHandler 
} from 'react-hook-form';


type Variant = 'LOGIN' | 'REFISTER';

const AuthForm = () => {
  const [variant, setVariant] = React.useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleVariant = React.useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REFISTER');
    } else {
      setVariant('LOGIN');
    }
  },[variant])

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name : '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REFISTER') {
      // axios Register
    }

    if (variant === 'LOGIN') {
      // axios signin
    }
  }

  const socialAction = (aciton: string) => {
    setIsLoading(true);
    // social
  }

  return (
    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REFISTER' && (
            <Input 
            id='name' 
            label='Name'
            errors={errors} 
            register={register}
            />
          )}
          <Input 
            id='email' 
            label='Email adress'
            type='email'
            errors={errors} 
            register={register}
          />
           <Input 
            id='password' 
            label='Password'
            type='password'
            errors={errors} 
            register={register}
          />
          <div>
            <Button 
              fullWidth
              disabled={isLoading} 
              type="submit"
              >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"/>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === 'LOGIN' ? 'New To Messenger?' : 'Alredy have an account?'}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer" >
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm 