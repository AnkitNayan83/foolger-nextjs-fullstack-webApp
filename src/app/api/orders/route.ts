import { getAuthSession } from "@/utils/auth"
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


export const GET = async () => {
    const session = await getAuthSession();

    if (session) {
        try {
            if (session.user.isAdmin) {
                const orders = await prisma.order.findMany();
                return new NextResponse(JSON.stringify(orders), { status: 200 })
            }
            else {
                const orders = await prisma.order.findMany({
                    where: {
                        userEmail: session.user.email!
                    }
                });
                return new NextResponse(JSON.stringify(orders), { status: 200 })
            }
        } catch (error) {
            console.log(error);
            return new NextResponse(JSON.stringify({ message: "Server Down" }), { status: 500 })
        }
    } else {
        return new NextResponse(JSON.stringify({ message: "you are not authenticated" }), { status: 500 })
    }
}

// CREATE ORDER

export const POST = async (req: NextRequest) => {
    const session = await getAuthSession();

    if (session) {
        try {
            const body = await req.json();
            const newOrder = await prisma.order.create({
                data: body
            })

            return new NextResponse(JSON.stringify(newOrder), { status: 201 })

        } catch (error) {
            console.log(error);
            return new NextResponse(JSON.stringify({ message: "Failed to created order" }), { status: 500 })
        }
    }
    else {
        return new NextResponse(JSON.stringify({ message: "You are not authorized" }), { status: 401 })
    }
}