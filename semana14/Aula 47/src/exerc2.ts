import axios from 'axios'

/* A) Na arrow function não utilizamos a palavra function, utilizamos o símbolo => e ao async não está mais no início, e sim após o nome da função

B)
*/

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

const pegaInscritos = async(): Promise<any[]> => {
    const inscritos = await axios.get(`${baseUrl}/subscribers/all`);
    return inscritos.data;
};

const main = async (): Promise<void> => {
    const inscritos: any[] = await pegaInscritos()
    console.log(inscritos);
}

main();