import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server"


// fetch all categories
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify({ success: true, message: "categories fetched successfully", categories }), { status: 200 })
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }
}