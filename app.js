console.log("Deu certo!")

// async --> assincrono
async function imagemApi(){
    // espera chegar a resposta --> await
    let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random')
    let dadosApi = await respostaApi.json();
    document.querySelector(".img-dog").src= dadosApi.message
    console.log(respostaApi);
}
imagemApi()



function Whatsapp(){

const texto ="Olá! Vim pelo site da NomeAPP e gostaria de agendar um horário para o meu pet."
const textoFormatado =encodeURIComponent(texto)
const url =  "https://wa.me/5544999204861?text=I" + textoFormatado;
open(url,'_blank');
console.log(url);
}
