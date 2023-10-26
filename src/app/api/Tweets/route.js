import Tweet from "../../(models)/tweet";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log("POST IT")
    try{
        const body = await req.json()
        const tweetData = body.formData
        await Tweet.create(tweetData)
        return NextResponse.json({message: "tweet created"}, {status: 201})
    } catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}

export async function GET(req){
    try{
        const tweets = await Tweet.find();
        console.log(tweets)
        return NextResponse.json({tweets}, {status: 200})
    } catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}