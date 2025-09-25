"use server"

import Papa from 'papaparse'
import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';


export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'studDataPerformance.csv')
        const file = await fs.readFile(filePath, 'utf8');

        const {data, errors} = Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            fastMode: true,
        })
        
        if (errors?.length) {
            console.error("CSV failed to parse")
        }
        console.log(data)
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "faied to load csv"}, {status: 500})
    }
}