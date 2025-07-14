import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req ) {
    try {
        await connectToDB();
        const extractData = await Experience.find({});

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

        return NextResponse.json({
                    success: false,
                    message: "Something goes wrong Please try again"
                });
    }
}