let color = document.querySelector('#tituloPrincipal')
color.style.color = 'blue'
color.style.fontSize = '50px'
color.style.fontFamily = 'serif'


let cambiarImagen = document.querySelector('#img')
cambiarImagen.src = 'guillermina nadadora j.pana'


let boton = document.querySelector('#img')
boton.onclick = function()
{
    boton.style.fontFamily = '50px'
    boton.style.color = 'blue'
    alert('Hello, welcome to the english version, you´ve just acceded')
}


let edadUsuario = Number(prompt('Ingresa tu edad, por favor.'))
if(edadUsuario >= 18){
    console.log('You can start your own bussiness, of course studing in this swimming club.')
}else{
    console.log('Sorry, you´re just a child, you have to be 18 years old to become one of our students.')
}


let salario1 = Number(prompt('Ingresa tu salario mensual'))
function salario()
if((salario1 >= 100.000) || (salario1 <= 150.000))
{
    return alert('Felicidades, recibiras un aumento del 15% de tu salario normal.')
}else{
     return alert('Lo siento, todavía no recibiras un aumento de tu sueldo, a la brevedad recibiras un mensaje.')
}