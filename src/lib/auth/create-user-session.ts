import bcrypt from "bcryptjs";

import prisma from "../prisma";

import { NextResponse } from "next/server";

import { setAuthCookies } from "./auth-cookies";
import { mapDatabaseThemeToCss } from "../theme";
import { createAccessToken, createRefreshToken } from "./tokens";


import { User } from "@prisma/client";

export async function createUserSession(
    user: User,
    response: NextResponse,
) {
    const accessToken = createAccessToken({
        id: user.id, 
        email: user.email, 
        role: user.role,
        theme: mapDatabaseThemeToCss(user.theme),
    });

    const refreshToken = createRefreshToken({
        id: user.id,
    });

    const refreshTokenHash = await bcrypt.hash(
        refreshToken, 
        10, 
    );

    await prisma.user.update({
        where: {id: user.id},
        data: {
            refreshTokenHash,
        }
    });

    setAuthCookies(response, {
        accessToken,
        refreshToken,
    });

    return response;
}