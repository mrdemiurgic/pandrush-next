import { NextRequest, NextResponse } from 'next/server';
import mailjet from '@/lib/mailjet';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (
      body === undefined ||
      body.subject === undefined ||
      body.body === undefined
    ) {
      return NextResponse.json(
        { error: 'Bad request. One of the fields is missing: subject, body' },
        { status: 401 }
      );
    }

    const { subject, body: emailBody } = body;

    const result = await mailjet(subject, emailBody);

    return NextResponse.json(
      { success: true, status: result },
      { status: result }
    );
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
