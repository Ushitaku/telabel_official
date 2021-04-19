import firebase from '../lib/db';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react'
import { Container } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Box,
  Button, ButtonGroup,
} from "@chakra-ui/react"

const contactForm = () => {
  const [company, setCompany] = useState("");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  
  const submit = (e) => {
    e.preventDefault();
    console.log(email);

    firebase.firestore().collection("contact").add({
      company: company,
      name: names,
      email: email,
      content: content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  return (
    <>
    <Box bg="#27214D">
      <Container width="85%" bg="#403299">
        <form onSubmit={submit}>
        <FormControl id="company" isRequired>
        <FormLabel color="white">会社名・団体名</FormLabel>
        <Input
        bg="white"
        type="company"
        placeholder="会社名・団体名を入力してください"
        value={company}
        onChange={(e) => setCompany(e.target.value)} />
        </FormControl>

        <FormControl id="name" isRequired>
        <FormLabel color="white">お名前</FormLabel>
        <Input
        bg="white"
        type="name" 
        placeholder="名前を入力してください"
        value={names}
        onChange={(e) => setNames(e.target.value)} />
        </FormControl>

        <FormControl id="email" isRequired>
        <FormLabel color="white">メールアドレス</FormLabel>
        <Input
        bg="white"
        type="email" 
        placeholder="アドレスを入力してください"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <Text mb="8px" color="white">内容</Text>
      <Textarea
        bg="white"
        type="content" 
        placeholder="内容を入力してください"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        size="sm"
      />
      <button>
        送信
      </button>
        </form>

        <Link href='./'>
          <Button>TOPへ戻る</Button>
        </Link>
      </Container>
    </Box>
    </>
  )
}

export default contactForm;