import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://tiles-gallery-bd.vercel.app"
})


export const { signIn, signUp, useSession } = createAuthClient()