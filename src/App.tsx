import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Feed, type PostType } from "./components/Feed"

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/rafaelafae.png',
      name: 'Rafaela Faé',
      role: 'ServiceNow Developer'
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz de React, curso da Rocketseat. O nome do projeto é Iginite 🚀" },
      { type: 'link', content: '👉 rafaelafae/01-fundamentals-reactjs', link: 'https://github.com/rafaelafae/01-fundamentos-reactjs-ts' },
    ],
    publishedAt: new Date('2025-08-01 18:30:00')
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/rafaelafae.png',
      name: 'Rafaela Faé',
      role: 'ServiceNow Developer'
    },
    content: [
      { type: 'paragraph', content: "Fala pessoal 👋" },
      { type: 'paragraph', content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻" },
      { type: 'link', content: '👉 rafaelafae/Portfolio_RFT', link: 'https://github.com/rafaelafae/Portfolio_RFT' },
    ],
    publishedAt: new Date('2024-04-11 17:10:00')
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Feed
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
