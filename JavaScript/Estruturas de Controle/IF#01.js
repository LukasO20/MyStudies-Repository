function boaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

boaNoticia(8.1)
boaNoticia(6.1)

function seForVerdadeFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeFalo()
seForVerdadeFalo(null)
seForVerdadeFalo(undefined)
seForVerdadeFalo(NaN)
seForVerdadeFalo('')
seForVerdadeFalo(0)
seForVerdadeFalo(-1)
seForVerdadeFalo(' ')
seForVerdadeFalo('?')
seForVerdadeFalo([])
seForVerdadeFalo([1, 2])
seForVerdadeFalo({})