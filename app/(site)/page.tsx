import Image from 'next/image'
import AuthForm from './component/AuthForm';

export default function Home() {
  return (
    <div className='flex flex-col min-h-full justify-center bg-gray-100 sm:px-6 lg:px-8'>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image className="mx-auto" alt="logo" height="48" width="48" src="/image/logo.png"/>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">
          로그인 해주세요!
        </h2>
      </div>
      {/* AuthForm */}
      <AuthForm/>
    </div>
  )
}
