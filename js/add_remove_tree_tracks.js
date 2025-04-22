// Adicionando Faixa manualmente
const addTrack = () => {
	const novaFaixa = document.createElement('div') // Criação de uma nova DIV
	novaFaixa.classList.add('faixa') //Adiciono estilo CSS 'faixa' 
	novaFaixa.setAttribute("nova", "true") // Seto um novo atribudo para manipula no delete
	const faixaBtn = document.querySelector('[faixas]') //Seleciono o [faixas](elemento pai) que esta no HTML
	faixaBtn.appendChild(novaFaixa) // Aqui é inserida a novaFaixa na pagina
}

// Removendo novas faixas
const RemoverFaixas = () => {
	const novasFaixas = document.querySelector('[faixas]')
	const listaFaixas = document.querySelectorAll('[nova]') //Aqui seleciono todos elementos que receberam atributo [nova]

	listaFaixas.forEach((item) => { //forEach que percorre cada item selecionado acima
		novasFaixas.removeChild(item) //Aqui removo o filho 'child'
	})
	console.log(novasFaixas);
}

//Adicionando Arvore (Original)
/* const addTree = () => {
	const newArvore = document.createElement('div') //Div filho que é usado abaixo
	newArvore.classList.add('arvore')
	newArvore.setAttribute('newArvore', 'true')

	const arvore = document.querySelector(".calcada")// Div Pai
	arvore.appendChild(newArvore) //usado aqui
}
*/

//Add Arvore Alternada
let contador = 0;
const limiteArvores = 6;

const addTree = () => {
	if (contador >= limiteArvores) {
		alert("Limite de árvores atingido!")
		return;
	}
	const predio = document.querySelector('.predio');

	const newArvore = document.createElement('div');
	newArvore.setAttribute('newArvore', 'true') //Atribudo para que eu possa apagar novas arvores criadas atraves do [newArvore]
	newArvore.classList.add('arvore', 'nova'); //Aplico a classe CSS .arvore

	if (contador % 2 === 0) {
		// Se o contador for par, insere a árvore após o prédio (lado direito)
		predio.insertAdjacentElement('afterend', newArvore)
	} else {
		// Se o contador for ímpar, insere a árvore antes do prédio (lado esquerdo)
		predio.insertAdjacentElement('beforebegin', newArvore)
	}
	contador++;
};

// Removendo novas Arvores
const RemoveTree = () => {
	const novasArvores = document.querySelector('.calcada')
	const listaArvores = document.querySelectorAll('[newArvore]')
	listaArvores.forEach((tree) => {
		novasArvores.removeChild(tree)
	})
	contador = 0 //Zero o contador aqui, para não dar erro quando tentar adicionar após apagar

}