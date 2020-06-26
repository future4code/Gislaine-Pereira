import axios from 'axios'
import moment from 'moment'
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

/* 
A)  Função assíncrona. Como é uma requisição de API, precisamos esperar pela resposta para continuar com o código

B)
*/

type corpoNoticia = {
    title: string,
    content: string,
    date: number
};

const criaNoticia = async (title: string, content: string): Promise<void> => {
    const body: corpoNoticia = {
        title,
        content,
        date: moment().unix(),
    }
    const resp = await axios.put(`${baseUrl}/news`, body);
    console.log(resp.data)
    console.log(`Noticia criada com sucesso!`)
};

criaNoticia("Extra! Extra!", "Julian é a melhor tumar da Labenu")