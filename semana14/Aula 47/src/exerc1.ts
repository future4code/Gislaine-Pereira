import axios from 'axios'

/*
A) Get
B) const Bananinha = async(): any[] =>{}
C)
*/

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

async function pegaInscritos(): Promise<any[]> {
    const inscritos = await axios.get(`${baseUrl}/subscribers/all`);
    return inscritos.data;
};

const main = async (): Promise<void> => {
    const inscritos: any[] = await pegaInscritos()
    console.log(inscritos);
}

main();