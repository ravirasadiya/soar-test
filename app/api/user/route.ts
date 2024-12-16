import fs from 'fs';
import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

// Remove the deprecated `config` and move body parser handling logic into the POST method

export async function GET() {
  const userData = {
    id: '1',
    name: 'Eddy Cusuma',
    email: 'eddy@example.com',
    cardNumber: '3778 **** **** 1234',
    validThru: '12/22',
    balance: 5756,
  };

  return NextResponse.json(userData);
}

export async function POST(request: NextRequest) {
  try {
    // Parse formData from the request
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    // Ensure the upload directory exists
    await fs.promises.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, 'profile.jpg');

    // Remove existing file if it exists
    try {
      await fs.promises.access(filePath);
      await fs.promises.unlink(filePath);
    } catch {
      // If file does not exist, ignore error
    }

    // Write the new file
    await writeFile(filePath, buffer);

    return NextResponse.json(
      { message: 'File uploaded successfully', filename: 'profile.jpg' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
