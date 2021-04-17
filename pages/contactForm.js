import firebase from '../lib/db';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react'
import { Container } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
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
      <Container>
        <form onSubmit={submit}>
        <FormControl id="company" isRequired>
        <FormLabel>会社名・団体名</FormLabel>
        <Input
        type="company"
        placeholder="会社名・団体名を入力してください"
        value={company}
        onChange={(e) => setCompany(e.target.value)} />
        </FormControl>

        <FormControl id="name" isRequired>
        <FormLabel>お名前</FormLabel>
        <Input
        type="name" 
        placeholder="名前を入力してください"
        value={names}
        onChange={(e) => setNames(e.target.value)} />
        </FormControl>

        <FormControl id="email" isRequired>
        <FormLabel>メールアドレス</FormLabel>
        <Input
        type="email" 
        placeholder="アドレスを入力してください"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <Text mb="8px">内容</Text>
      <Textarea
        type="content" 
        placeholder="内容を入力してください"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        size="sm"
      />
        <button>Button</button>
        </form>

        <Link href='./'>
          <a>TOPへ戻る</a>
        </Link>
      </Container>
    </>
  )
}

export default contactForm;