import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      let isAllowedToSignIn = true;
      const allowedUser = ["YOURGITHUBACCID"];
      console.log(user);
      if (allowedUser.includes(String(user.id))) {
        isAllowedToSignIn = true;
      } else {
        isAllowedToSignIn = false;
      }
      return isAllowedToSignIn;
    },
  },
};

// import NextAuth, { AuthOptions } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   secret: process.env.NEXT_PUBLIC_API_URL,
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         FirstName: {
//           label: "FirstName",
//           type: "text",
//           placeholder: "Enter FirstName",
//         },
//         LastName: {
//           label: "LastName",
//           type: "text",
//           placeholder: "Enter LastName",
//         },
//         Phone: {
//           label: "Phone",
//           type: "tel",
//           placeholder: "Enter Phone",
//         },
//         Password: {
//           label: "Password",
//           type: "password",
//           placeholder: "Enter Password",
//         },
//         ConfirmPassword: {
//           label: "ConfirmPassword",
//           type: "password",
//           placeholder: "Enter ConfirmPassword",
//         },
//       },

//       async authorize(credentials, req) {
//         const { FirstName, LastName, Phone, Password, ConfirmPassword } =
//           credentials;
//         const res = await fetch(
//           "http://193.141.127.116/denaapi1/api/Users/signup",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//             body: JSON.stringify({
//               Phone,
//               Password,
//               ConfirmPassword,
//               FirstName,
//               LastName,
//             }),
//           }
//         );
//         const user = await res.json();
//         if (res.ok && user) {
//           return user;
//         } else return null;
//       },
//     }),
//     // ...add more providers here
//   ],
//   callbacks: {
//     async jwt({ token, user }: { token: any; user: any }) {
//       return { ...token, ...user };
//     },
//     async session({
//       session,
//       token,
//       user,
//     }: {
//       session: any;
//       token: any;
//       user: any;
//     }) {
//       // Send properties to the client, like an access_token from a provider.
//       session.user = token;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/signin",
//   },
// };
// export default NextAuth(authOptions as AuthOptions);
