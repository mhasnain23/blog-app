import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Connect to the database
        await connectToDB();

        // Retrieve all blogs from the database
        const extractAllBlogsFromDatabase = await Blog.find({});

        if (extractAllBlogsFromDatabase) {
            return NextResponse.json({
                success: true,
                data: extractAllBlogsFromDatabase,
            });
        } else {
            console.log("No blogs found");
            return NextResponse.json({
                success: false,
                message: "No blogs found",
            });
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again",
        });
    }
}
