<script lang="ts">
  import { client } from "./gql";
  import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
  import type { AppRouter } from '../../backend/src/index';

  const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
  });

  const loadHello = async () => {
    const response = await trpc.getHello.query()
    console.log(response.msg)
  }

  const sendSomething = async () => {
    const response = await trpc.postHello.mutate({ content: "adat" })
  }

  let username = ""
  let search = ""
  let content = ""

  const createUser = async () => {
    const response = await client.AddUser({ username })
    const id = response.insert_app_user_one?.id
    if (id)
      alert("Created with " + id)
    else
      alert("Error")
  }

  const loadUsers = async () => {
    const response = await client.GetUsers({ username: search })
    console.log(response)
  }

  const startChannel = async () => {
    const response = await client.StartChannel({ id: 3 })
    const isSuccessful = !!response.insert_channel?.affected_rows
    if (isSuccessful)
      alert("Channel created")
    else
      alert("Error")
  }

  const sendMessage = async () => {
    const response = await client.SendMessage({ content })
    loadMessages()
  }

  const loadMessages =async () => {
    const response = await client.GetMessages()
    console.log(response)
  }

</script>

<input type="text" placeholder="Search" bind:value={search}>
<button on:click={loadUsers}>Search</button>
<input type="text" placeholder="Username" bind:value={username}>
<button on:click={createUser}>Create</button>
<button on:click={startChannel}>Start talking</button>
<input type="text" placeholder="Content" bind:value={content}>
<button on:click={sendMessage}>Send</button>
<button on:click={loadHello}>Load hello</button>
