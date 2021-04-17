// import React from 'react'
// import Link from 'next/link'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { Container } from "@chakra-ui/react"
// import {
//   FormControl,
//   FormLabel,
//   Input,
// } from "@chakra-ui/react"

// export default function FormLogin({onSubmit}) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//       useEffect(() => {
//     let unsubscribe;
//     if (postId) {
//       unsubscribe = db
//         .collection("posts")
//         .doc(postId)
//         .collection("comments")
//         .orderBy('timestamp', 'desc')
//         .onSnapshot((snapshot) => {
//           setComments(snapshot.docs.map((doc) => doc.data()));
//         });
//     }
//     return () => {
//       unsubscribe();
//     };
//   }, [postId]);
  
//     const submit = (e) => {
//         alert('hi');
//       e.preventDefault();
//       console.log(email,password);
//       onSubmit({ email,password });
//   }
  
//   return (
//     <>
//       <Container>
//         <form onSubmit={submit}>
//         <FormControl id="email" isRequired>
//         <FormLabel>メールアドレス</FormLabel>
//         <Input
//         type="email"
//         placeholder="メールアドレス"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)} />
//         </FormControl>

//         <FormControl id="password" isRequired>
//         <FormLabel>パスワード</FormLabel>
//         <Input
//         type="password" 
//         placeholder="パスワード"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)} />
//         </FormControl>
//         <button>Button</button>
//         </form>

//         <Link href='./'>
//           <a>TOPへ戻る</a>
//         </Link>
//       </Container>
//     </>
//   )
// }