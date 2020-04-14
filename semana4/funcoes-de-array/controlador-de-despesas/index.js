const dadosDespesa = []
const despesasExtrato = []
let despesaTotal = 0

function criarDespesa(ev) {
	let tipoExtrato = ""
	let valorExtrato = ""

	let dadosFormulario = {
		valor: Number(document.getElementById('valor-despesa').value),
		tipo: document.getElementById('tipo-despesa').value,
		descricao: document.getElementById('descricao-despesa').value,
	}

	tipoExtrato = document.getElementById('tipo-extrato')
	valorExtrato = document.getElementById('tipo-extrato')

	if (dadosFormulario.valor == "") {
		alert('Por favor, insira um número.')
	} 
	else if (dadosFormulario.tipo == ""){
		alert('Por favor, escolha um tipo')
	}
	else if (dadosFormulario.descrição == ""){
		alert('Por favor, insira uma descrição')
	}
	else{
		dadosDespesa.push(dadosFormulario);
		despesasExtrato.push(dadosFormulario.valor,dadosFormulario.tipo)

		document.getElementById('valor-despesa').value = ""
		document.getElementById('tipo-despesa').value = ""
		document.getElementById('descricao-despesa').value =""

		for (let i = 0; i < despesasExtrato.length; i++) {
			tipoExtrato.innerHTML = `<td>${despesasExtrato[i].tipo}</td>`
			valorExtrato.innerHTML = `<td>${despesasExtrato[i].valor}</td>`
		}
		
		for (let i = 0; i < despesasExtrato; i++) {
			despesaTotal += despesasExtrato.valor[i];
		}
	}
	
}

function filtrarDespesas(ev) {
	
	let pesquisaDespesa = {
		tipo: document.getElementById('despesa-filtro').value,
		min: Number(document.getElementById('despesa-minima').value),
		max: Number(document.getElementById('despesa-maxima').value)
	}

	const tiposFiltrados = document.getElementById('tab-tipo')
	const valoresFiltrados = document.getElementById('tab-tipo')
	const descricoesFiltradas = document.getElementById('tab-descricao')

	const soFiltrado = dadosDespesa.filter( 
		(filtro, index, array) => {
			return filtro.tipo === pesquisaDespesa.tipo 
			&& filtro.valor >= pesquisaDespesa.min 
			&& filtro.valor <= pesquisaDespesa.max
		}
	)

	for (let i = 0; i < soFiltrado.length; i++) {
		tiposFiltrados.innerHTML = `<td>${soFiltrado[i].tipo}</td>`
		valoresFiltrados.innerHTML = `<td>${soFiltrado[i].valor}</td>`
		descricoesFiltradas.innerHTML = `<td>${soFiltrado[i].descricao}</td>`
	}

	document.getElementById('despesa-filtro').value =""
	document.getElementById('despesa-minima').value =""
	document.getElementById('despesa-maxima').value = ""
}

function limparFiltros() {
	document.getElementById("valor-despesa").value = "";
	document.getElementById("select-contolador-despesas").value = "";
	document.getElementById("descricao-despesa").value = "";