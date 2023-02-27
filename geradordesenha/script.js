let tamanho = document.getElementById('tamcaracteres')
let charset = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUWXYZÇ0123456789@!*&'
let res = document.getElementById('res')

function geraSenha(){
    if(tamanho.value > 0 && tamanho.value <=25){
        let randomString = " "
        for(let i = 0, n= charset.length; i < tamanho.value; i++){
            randomString += charset.charAt(Math.floor(Math.random() * n));
        }
        res.innerHTML = `<p class="textosenhagerada">A senha gerada foi: <br> <p class="senhagerada">${randomString}</p> </p>`;
    }else{
        alert('Digite um numero entre 1 e 25')
    }
}