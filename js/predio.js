(function () {
	// ------------------Pavimentos
	const criarTerreo = () => {
		const janela = document.createElement('div')
		janela.classList.add('janela')

		const terreo = document.createElement('div')
		terreo.classList.add('terreo')
		terreo.setAttribute("andar", 't')
		terreo.appendChild(janela)

		return terreo
	}

	function criarAndar(numeroAndar) {
		const porta = document.createElement('div')
		porta.classList.add('porta')

		const andar = document.createElement('div')
		andar.classList.add('andar')
		andar.setAttribute('andar', numeroAndar)
		andar.appendChild(porta)

		return andar
	}

	function criarPavimentos() {

		const elementosComAndares = document.querySelectorAll('[andares')
		elementosComAndares.forEach((elmentAndares) => {
			const qtde = +elmentAndares.getAttribute('andares')

			for (let i = qtde; i > 0; i--) {
				elmentAndares.appendChild(criarAndar(i))
			}
			elmentAndares.appendChild(criarTerreo())

		})
	}
	criarPavimentos()
	//-------------------Elevador

	// Movimentação
	function iniciarMovimentacao() {
		const elevador = document.querySelector('.elevador')
		elevador.setAttribute('em-movimentacao', '')
	}
	function finalizarMovimentacao() {
		const elevador = document.querySelector('.elevador')
		elevador.removeAttribute('em-movimentacao')
	}
	function emMovimentacao() {
		const elevador = document.querySelector('.elevador')
		return elevador.hasAttribute('em-movimentacao')
	}

	// Tamanho do elevador = ao andar 't'
	function obterTamanhoElevador() {
		const terreo = document.querySelector('[andar="t"]')
		return terreo.offsetHeight
	}

	// Criando o elevador
	function criarElevador() {
		const poco = document.querySelector('.poco')

		const elevador = document.createElement('div')
		elevador.classList.add('elevador')
		elevador.style.height = obterTamanhoElevador() //Defino tamanho aqui
		poco.appendChild(elevador)
	}

	//Obtendo a posição do elevador
	function obterPosicaoAtual() {
		const elevador = document.querySelector('.elevador')
		return +elevador.style.bottom.replace('px', '')
	}

	//Criando função que altera o display do controle do elevador
	function atualizarMostrador(texto) {
		const mostrador = document.querySelector('.mostrador')
		mostrador.innerHTML = texto
	}

	// Parte do destaque, onde é inserido o destaque no botão clicado
	function iniciarComando(comando) {
		const botao = document.querySelector(`[destino="${comando}"]`)
		botao.classList.add('destaque')
	}

	function finalizarComando(comando) {
		const botao = document.querySelector(`[destino="${comando}"]`)
		botao.classList.remove('destaque')
	}

	// Gerenciamento do movimento do elevador
	function moverElevadorPara(andar) {
		if (emMovimentacao()) return

		iniciarMovimentacao()
		iniciarComando(andar)

		const numero = andar === 't' ? 0 : +andar
		const elevador = document.querySelector('.elevador')

		const posicaoInicial = obterPosicaoAtual()
		const posicaoFinal = numero * obterTamanhoElevador()
		const subindo = posicaoFinal > posicaoInicial


		atualizarMostrador(subindo ? 'Subindo' : `Descendo`)

		let temporizador = setInterval(() => {
			const novaPosicao = obterPosicaoAtual() + (subindo ? 10 : -10)
			const terminou = subindo ? novaPosicao >= posicaoFinal : novaPosicao <= posicaoFinal
			elevador.style.bottom = terminou ? posicaoFinal : novaPosicao
			if (terminou) {
				clearInterval(temporizador)
				atualizarMostrador(andar === 't' ? 'Térreo' : `${andar}° Andar`)
				finalizarMovimentacao()
				finalizarComando(andar)
			}
		}, 30)

	}

	function controlMovimentarElevador() {
		const botoes = document.querySelectorAll('[destino]')
		botoes.forEach((botao) => {
			const destino = botao.getAttribute('destino')
			botao.onclick = function () {
				moverElevadorPara(destino)
			}
		})
	}

	criarElevador()
	controlMovimentarElevador()

})()