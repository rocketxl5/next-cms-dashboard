import prisma from "@/lib/prisma";

export async function getUsers() {
    return prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isActive: true,
            isVerified: true,
            createdAt: true,
            updatedAt: true, 
        },
        orderBy: {createdAt: 'desc'}
    });
}