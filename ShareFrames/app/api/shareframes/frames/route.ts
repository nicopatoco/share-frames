import { NextResponse } from 'next/server';

type UserData = {
    guid: string;
    name: string;
};

export async function GET(req: Request, context: any) {

    const searchParams = req.nextUrl.searchParams;
    const guid = searchParams.get('guid');

    const userData: UserData = { guid: guid as string, name: 'John Doe' };

    return NextResponse.json(userData);
}
