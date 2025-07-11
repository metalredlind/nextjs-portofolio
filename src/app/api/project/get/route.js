import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req ) {
    try {
        await connectToDB();
        const extractData = await Project.find({});

        if (saveData) {
            return NextResponse.json({
                success: true,
                message: "Data saved succesfully"
            });
        } else {
            return NextResponse.json({
                success: true,
                message: "Something goes wrong Please try again"
            })
        }

    } catch (e) {
        console.log(e);
    }
}