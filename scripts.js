var About_tec = {
    "Massagem": "É a manipulação de tecidos moles do corpo que tem como objetivo proporcionar bem estar e alívio de dores muscular de forma Terapêutica tratando não só o físico mas também o emocional.",
    "Drenagem": "DLM é uma técnica de massagem que estimula o sistema linfático a trabalhar em um ritimo mais acelerado, reduzindo a retenção de líquidos e favorecendo a eliminação de toxinas na região massageada.",
    "Ventosaterapia": "É uma técnica de sucção da pele que promove um aumento da circulação sanguínea com o objetivo de melhorar dores e disfunções.",
    "Auriculoterapia": "É um ramo da Acupuntura destinado ao tratamento das enfermidades físicas e mentais através de estímulos de pontos situados no pavilhão auricular, aproveitando o reflexo que exerce no SNC."
}


var tiraCor = "#9ed3b7"
var colocaCor = "#70ad8d"

var about_tags = document.getElementsByClassName("single-tab")

for (var a = 0; a < about_tags.length; a++){
    about_tags[a].onclick = function(){
  
    for( var b = 0; b < about_tags.length; b++){
        about_tags[b].style['background-color'] = tiraCor
        about_tags[b].style['font-weight'] = "normal"
    }
    
    this.style['background-color'] = colocaCor
    this.style['font-weight'] = "bold"
    
    var selecionado = this.innerHTML
    document.getElementById("box-text").innerHTML = About_tec[selecionado]
    }
}

//data

var ano_atual = new Date
ano_atual = ano_atual.getFullYear()
document.getElementById("date").innerHTML = ano_atual