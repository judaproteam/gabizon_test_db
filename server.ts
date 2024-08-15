import { setUser } from './db/user/set'

async function run() {
  await setUser({ firstName: 'jhon', lastName: 'smith' })
}
run()
