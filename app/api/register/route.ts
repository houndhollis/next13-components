import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request
) {
  try {

    const body = await request.json();
    const { name, email, password } = body;
  
    if (!name || !email || !password) {
      return new NextResponse('Missing info', {status: 400});
    }
  // password 는 암호화 
    const hashedPassword = await bcrypt.hash(password, 12);
  
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword
      }
    });
  
    return NextResponse.json(user)
  }
  catch ( error: any ){
    console.log(error, 'new Error')
    return new NextResponse('Internal Error', { status: 500 })
  }
}


