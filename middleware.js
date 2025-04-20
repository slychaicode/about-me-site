import { NextResponse } from 'next/server';

export function middleware(request){

    const basicAuth = request.headers.get('authorization');

    if(basicAuth){
        const authValue = basicAuth.split(' ')[1];
        const [user, pass] = atob(authValue).split(':');

        if(
            user === process.env.BASIC_AUTH_USER &&
            pass === process.env.BASIC_AUTH_PASS
        ){
            return NextResponse.next();
        }
    }

    const res = new NextResponse('Unauthorized', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    });

    return res;
}