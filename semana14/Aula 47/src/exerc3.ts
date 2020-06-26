import axios from 'axios'
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

/*
a) Não, pois estamos colocando o tipo de dados que a função vao retornoa, iclusive é igual o retornado pela API
b) Para indicar à funçãoquais os retornos da API se encaixam em qual tipagem específica e assim fica do jeito que a gente quer. 
c)
*/

type Inscrito = {
    id: string;
    name: string;
    email: string;
}

const pegaInscritos = async (): Promise<Inscrito[]> => {
    const inscritos = await axios.get(`${baseUrl}/subscribers/all`);

    return inscritos.data.map((incrito: Inscrito) => { 
        return {
            id: incrito.id,
            name: incrito.name,
            email: incrito.email,
        }
    })
};

const main = async (): Promise<void> => {
    const inscritos: any[] = await pegaInscritos()
    console.log(inscritos);
}

main();