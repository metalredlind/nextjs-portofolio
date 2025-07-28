import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic"

export async function DELETE(req) {
    try {
        console.log('Delete request received');
        await connectToDB();

        const { id } = await req.json();
        if (!ObjectId.isValid(id)) {
            return NextResponse.json({
                success: false,
                message: "Invalid ID provided"
            })    
        }

        const result = await Education.deleteOne({_id: new ObjectId(id)});

        if (result.deletedCount > 0) {
            return NextResponse.json({
                success: true,
                message: "Education data deleted successfully"
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Education data not found or it has been deleted"
            })
        }
    } catch (e) {
        console.log(e);
    }
}