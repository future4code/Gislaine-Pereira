function adicionaTarefa() {
	const diaSemana = document.getElementById('selecionar-dia').value
	const minhaTarefa = document.getElementById('descreve-tarefa')
	const textoTarefa = document.getElementsByClassName('conteudo')
	const horarioTarefa = document.getElementById('horario').value


	if (minhaTarefa.value == '' || minhaTarefa.value == ' ') {
		alert('Insira pelo menos uma tarefa')
	}
	else{
		switch (diaSemana) {
			case 'domingo':
				textoTarefa[0].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
				break;
			
			case 'segunda':
				textoTarefa[1].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
				break;

			case 'terça':
				textoTarefa[2].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
				break;

			case 'quarta':
				textoTarefa[3].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
				break;

			case 'quinta':
				textoTarefa[4].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
				break;

			case 'sexta':
				textoTarefa[5].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
				break;
		
			default:
				textoTarefa[6].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
				break;
		}		
	}
	minhaTarefa.value = ""
}


function limpezatotal() {
	tudoEmBranco = document.getElementsByClassName('conteudo')

	for (let i = 0; i < tudoEmBranco.length; i++) {
		tudoEmBranco[i].innerHTML = " "
	}
} 

function riscarTarefa(tarefaExecutada) {
	tarefaExecutada.style.textDecoration = "line-through";
}