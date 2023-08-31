import { promises as fs } from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	const jsonDirectory = path.join(process.cwd(), 'src/data')
	const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8')

	const sellers = JSON.parse(fileContents)['bestSellers']

	if (!sellers) {
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{
				status: 500,
				headers: { 'content-type': 'application/json' },
				statusText: 'KO',
			},
		)
	}

	return NextResponse.json(sellers, {
		status: 200,
		headers: { 'content-type': 'application/json' },
		statusText: 'OK',
	})
}
