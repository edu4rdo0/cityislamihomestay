// pages/api/auth/[...nextauth].js (Pages Router)
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/login', // custom login page
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, account, user }) {
      return token
    }
  }
})

// Untuk App Router: app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }