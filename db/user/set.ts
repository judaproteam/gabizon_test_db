import { db } from '../db'

type User = {
  id?: number
  firstName: string
  lastName: string
}

type Post = {
  id?: number
  title: string
  date: Date
  time: number
}

export async function setUser(user: User) {
  const res = await db.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  })

  console.log('res', res)
}

export async function setUserNpost(user: User, post: Post) {
  const res = await db.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      favoritPosts: {
        create: {
          title: post.title,
          creator: {
            connect: {
              id: user.id,
            },
          },
          date: post.date,
          time: post.time,
        },
      },
    },
  })

  console.log('res', res)
}
