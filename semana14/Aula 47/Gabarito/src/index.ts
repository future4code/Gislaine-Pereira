import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";


async function createNews(title: string, content: string, date: number): Promise<void>{
  await axios.put(`${baseUrl}/news`, {
    title,
    content,
    date
  });
}

const getSubscribersQuantity = async (): Promise<number> => {
  const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
  return subscribers.data.length
}

type Subscriber = {
  id: string,
  name: string,
  email: string
}

const getAllSubscribers = async (): Promise<Subscriber[]> => {
  const subscribersResult = await axios.get(`${baseUrl}/subscribers/all`)
  return subscribersResult.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email
    }
  })
}

const sendNotification = async (subscriber: Subscriber, message:string): Promise<void> => {
  console.log("Enviando notificação para: ", subscriber.name);
  await axios.post(`${baseUrl}/notifications/send`, {
    subscriberId: subscriber.id,
    message,
  });
  console.log("A notificação para: ", subscriber.name, "foi enviada");
}

const getAllNotifications = async (): Promise<any> => {
  const subscribers = await getAllSubscribers()
  const notifications = [];

  for(const subscriber of subscribers) {
    notifications.push(await axios.get(`${baseUrl}/subscribers/${subscriber.id}/notifications/all`)) 
  }
  const result = await Promise.all(notifications)
  const resultFromData = result.map((res: any) => res.data)
  console.log("RESULT: ", result)
  console.log("DATA: ", resultFromData)
}



const test = async () => {
  try {
    // Criando uma notícia
   await createNews("Tipagem de promise", "Como tipar promises", 1592833834000)

  //  Pegando a quantidade de assinantes
   const subscribersQuantity =  await getSubscribersQuantity()

  //  Pegando todos os assinantes
   const subscribers = await getAllSubscribers()

  //  Instanciando o array para colocar as Promises
   const arrayDePromises = [];

  //  Iterando o array de assinantes e dando o push de cada Promise retonada da função sendNotification
    for(const subscriber of subscribers) {
      arrayDePromises.push(sendNotification(subscriber, "veja esse noticia 'Tipagem promise'"))
    }
    await Promise.all(arrayDePromises)
    console.log("Terminei de enviar tudo")

// Pegando todas as notificações recebidas pelos assinantes
    await getAllNotifications();

  } catch(err) {
    console.log(err)
  }
}

test();




