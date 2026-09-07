/* =========================================================
   PetShop Amigo Animal - Fase 2
   Script único, reutilizado por todas as páginas.
   Cada bloco só executa se os elementos existirem na página
   (evita erros de "elemento não encontrado" no console).
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------------------------------------------------
       1) FUNÇÃO TEMPORAL: relógio atualizado automaticamente
       Exibido no header. Finalidade: mostrar a hora atual,
       útil para o cliente saber se a loja está em horário
       de atendimento (08h-18h).
       --------------------------------------------------- */
    const relogio = document.getElementById('relogio');
    if (relogio) {
        function atualizarRelogio() {
            const agora = new Date();
            const horaFormatada = agora.toLocaleTimeString('pt-BR');
            const dataFormatada = agora.toLocaleDateString('pt-BR');
            const hora = agora.getHours();
            const aberto = hora >= 8 && hora < 18;

            relogio.textContent = dataFormatada + ' - ' + horaFormatada +
                (aberto ? ' (Loja aberta)' : ' (Loja fechada)');
        }
        atualizarRelogio();
        setInterval(atualizarRelogio, 1000); // atualiza a cada segundo
    }

    /* ---------------------------------------------------
       2) FORMULÁRIO DE CADASTRO (cliente + pet)
       Validação de campos obrigatórios e feedback visual.
       --------------------------------------------------- */
    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        const mensagemCadastro = document.getElementById('mensagem-cadastro');

        formCadastro.addEventListener('submit', function (evento) {
            evento.preventDefault(); // impede o envio real (não há back-end na Fase 2)

            // Validação nativa do HTML5 (required, type=email, etc.)
            if (!formCadastro.checkValidity()) {
                mensagemCadastro.textContent = 'Por favor, preencha corretamente todos os campos obrigatórios destacados.';
                mensagemCadastro.className = 'mensagem-erro';
                formCadastro.reportValidity();
                return;
            }

            // Validação simples e adicional de CPF (apenas quantidade de dígitos)
            const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
            if (cpf.length !== 11) {
                mensagemCadastro.textContent = 'CPF inválido. Informe os 11 dígitos do CPF.';
                mensagemCadastro.className = 'mensagem-erro';
                return;
            }

            const nomeCliente = document.getElementById('nome-cliente').value;
            const nomePet = document.getElementById('nome-pet').value;

            mensagemCadastro.textContent = 'Cadastro de ' + nomeCliente +
                ' e do pet ' + nomePet + ' realizado com sucesso!';
            mensagemCadastro.className = 'mensagem-sucesso';
            formCadastro.reset();
        });
    }

    /* ---------------------------------------------------
       3) PÁGINA DE AGENDAMENTO
       - Mostra/oculta mensagem de orientação conforme o método
       - Valida data (não permite data passada) e horário
       - Gera resumo dinâmico do agendamento
       --------------------------------------------------- */
    const formAgendamento = document.getElementById('form-agendamento');
    if (formAgendamento) {
        const metodoRadios = document.querySelectorAll('input[name="metodo"]');
        const orientacaoMetodo = document.getElementById('orientacao-metodo');
        const mensagemAgendamento = document.getElementById('mensagem-agendamento');
        const resumo = document.getElementById('resumo-agendamento');

        // Atualiza a mensagem de orientação conforme o método escolhido
        metodoRadios.forEach(function (radio) {
            radio.addEventListener('change', function () {
                if (this.value === 'tele-busca') {
                    orientacaoMetodo.textContent = 'O pet será buscado no endereço cadastrado no momento do cadastro.';
                } else {
                    orientacaoMetodo.textContent = 'O tutor deverá levar o pet até o estabelecimento no horário agendado.';
                }
            });
        });

        formAgendamento.addEventListener('submit', function (evento) {
            evento.preventDefault();

            const servico = document.getElementById('servico').value;
            const metodoSelecionado = document.querySelector('input[name="metodo"]:checked');
            const data = document.getElementById('data-agendamento').value;
            const horario = document.getElementById('horario-agendamento').value;
            const nomePetAgendamento = document.getElementById('nome-pet-agendamento').value;

            // Validação: campos obrigatórios
            if (!servico || !metodoSelecionado || !data || !horario || !nomePetAgendamento) {
                mensagemAgendamento.textContent = 'Preencha o nome do pet, serviço, método, data e horário antes de confirmar.';
                mensagemAgendamento.className = 'mensagem-erro';
                resumo.hidden = true;
                return;
            }

            // Validação: data não pode ser anterior a hoje
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);
            const dataEscolhida = new Date(data + 'T00:00:00');

            if (dataEscolhida < hoje) {
                mensagemAgendamento.textContent = 'A data escolhida já passou. Selecione uma data a partir de hoje.';
                mensagemAgendamento.className = 'mensagem-erro';
                resumo.hidden = true;
                return;
            }

            // Formata a data para exibição no padrão brasileiro
            const dataFormatada = dataEscolhida.toLocaleDateString('pt-BR');
            const metodoTexto = metodoSelecionado.value === 'tele-busca' ? 'Tele-busca' : 'Entrega no local';

            // Monta o resumo dinâmico do agendamento
            document.getElementById('resumo-pet').textContent = nomePetAgendamento;
            document.getElementById('resumo-servico').textContent = servico;
            document.getElementById('resumo-metodo').textContent = metodoTexto;
            document.getElementById('resumo-data').textContent = dataFormatada;
            document.getElementById('resumo-horario').textContent = horario;
            resumo.hidden = false;

            mensagemAgendamento.textContent = 'Agendamento confirmado! Confira o resumo abaixo.';
            mensagemAgendamento.className = 'mensagem-sucesso';
        });
    }

});
