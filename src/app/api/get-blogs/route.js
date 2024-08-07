import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";



export async function GET() {
    try {

        await connectToDB();
        const extractAllBlogsFromDatabase = Blog.find({})

        if (extractAllBlogsFromDatabase) {
            return NextResponse.json({
                success: true,
                data: extractAllBlogsFromDatabase,
            });
        } else {
            console.log(error);
            NextResponse.json({
                success: false,
                message: "Something went wrong! please try again",
            });
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong! please try again",
        });
    }
}