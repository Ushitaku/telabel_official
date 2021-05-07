import firebase from '../lib/db';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  FormControl,FormLabel,
  Input,Textarea,
  Text,Heading,
  Box,
  Button,
} from "@chakra-ui/react"

const EventForm = () => {
  const [tela, setTela] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [money, setMoney] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  
  const submit = (e) => {
    e.preventDefault();
    alert('登録しました！');
    router.push('/');
    // console.log(email);

    firebase.firestore().collection("eventpost").add({
      tela: tela,
      title: title,
      place: place,
      date: date,
      money: money,
      email: email,
      content: content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  return (
    <>
<Box bg="#27214D" mt="10">
      <Box w="65%"  margin="auto" px="40" bg="#403299">
        <Heading as="h1" size="2xl" padding="10" color="white" textAlign="center">イベント情報登録</Heading>
        <form onSubmit={submit}>
        <FormControl id="tela" isRequired>
        <FormLabel color="white">法人名・団体名</FormLabel>
        <Input
        bg="white"
        type="tela"
        placeholder="法人名・団体名を入力してください"
        value={tela}
        onChange={(e) => setTela(e.target.value)} />
        </FormControl>

        <FormControl id="title" isRequired>
        <FormLabel color="white">イベント名</FormLabel>
        <Input
        bg="white"
        type="title" 
        placeholder="イベント名を入力してください"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
        </FormControl>

        <FormControl id="place" isRequired>
        <FormLabel color="white">開催場所</FormLabel>
        <Input
        bg="white"
        type="place" 
        placeholder="開催場所を入力してください"
        value={place}
        onChange={(e) => setPlace(e.target.value)} />
        </FormControl>

        <FormControl id="date" isRequired>
        <FormLabel color="white">開催日</FormLabel>
        <Input
        bg="white"
        type="date" 
        placeholder="日付を指定してください"
        value={date}
        onChange={(e) => setDate(e.target.value)} />
        </FormControl>

        <FormControl id="money" isRequired>
        <FormLabel color="white">料金</FormLabel>
        <Input
        bg="white"
        type="money" 
        placeholder="参加料金を設定してください"
        value={money}
        onChange={(e) => setMoney(e.target.value)} />
        </FormControl>

        <FormControl id="email" isRequired>
        <FormLabel color="white">メールアドレス</FormLabel>
        <Input
        bg="white"
        type="email" 
        placeholder="連絡の取れるアドレスを入力してください"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <Text mb="8px" color="white">イベント内容</Text>
        <Textarea
        bg="white"
        type="content" 
        placeholder="イベント内容を入力してください"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        size="sm"
        />
        <Box textAlign="center">
        <button style={{
        color:"white",
        background:"#27214D",
        padding:"10px",
        paddingLeft:"5em",
        paddingRight:"5em",
        margin:"10px",
        marginBottom:"3em",
        borderRadius:"6px",
        }}>
        送信
        </button>
    </Box>
        </form>
    </Box>
    <Box textAlign="center" p="30">
      <Link href='./'>
      <Button m="auto" size="lg" colorScheme="purple">TOPへ戻る</Button>
      </Link>
    </Box>
</Box>
    </>
  )
}

export default EventForm;