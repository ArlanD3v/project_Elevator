// Function alto invocada > Criação das faixas
(function () {

	// Crio uma constante'elementosComFaixa' e atrbuo ao seletor [faixas] no html
	const elementosComFaixas = document.querySelectorAll('[faixas]')
	// Aqui eu percorro a const com o forEach e adiciono o '+' para converter para int
	elementosComFaixas.forEach(elemento => {
		const qtde = +elemento.getAttribute('faixas') // utiliza o getAttibute para pegar o elemento com 'faixas'
		//Aqui é utilizado o For, e é criado uma div para cada qtde selecionada acima
		for (let i = 0; i < qtde; i++) {
			const faixa = document.createElement('div')
			faixa.classList.add('faixa')// Adiciona a class css 'faixa'
			elemento.appendChild(faixa) // Aqui pega o elemento e adiciona faixas
		}
	})
})()

