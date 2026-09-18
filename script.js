const CHAVE_PIX = "64213198000174";
const TAXA_ENTREGA = 4;
const WHATSAPP = "5544997323438";

let carrinho = [];
let formaRecebimento = "retirada";
let formaPagamento = "";
let tipoCartao = "";
let precisaTroco = "";

let produtoLancheAtual = null;
let produtoBaldeAtual = null;


// ========================================
// PRODUTOS
// ========================================

const produtos = {

    lanches: [
        ["X-Burguer", 19, "Acompanha 1 molho de alho."],
        ["Pop Chicken", 22, "Acompanha 1 molho de alho."],
        ["Chicken", 26, "Acompanha 1 molho de alho."],
        ["X-Calabresa", 27, "Acompanha 1 molho de alho."],
        ["X-Bacon", 27, "Acompanha 1 molho de alho."],
        ["X-Salada", 25, "Acompanha 1 molho de alho."],
        ["X-Rings", 27, "Acompanha 1 molho de alho."],
        ["Especial Duplo Cheddar", 37, "Acompanha 1 molho de alho."],
        ["Duplo Cheddar", 33, "Acompanha 1 molho de alho."],
        ["Americano", 28, "Acompanha 1 molho de alho."]
    ],

    baldes: [
        ["Balde 8 unidades", 21, "8 unidades — escolha Sassami, coxinha ou tulipa. Acompanha 1 ketchup e 1 barbecue."],
        ["Balde P", 40, "12 unidades — escolha Sassami, coxinha ou tulipa. Acompanha 1 ketchup e 1 barbecue."],
        ["Balde M", 50, "15 unidades — escolha Sassami, coxinha ou tulipa. Acompanha 1 ketchup e 1 barbecue."],
        ["Balde G", 60, "20 unidades — escolha Sassami, coxinha ou tulipa. Acompanha 1 ketchup e 1 barbecue."],
        ["Balde Fritas P", 55.90, "12 unidades de Sassami, coxinha ou tulipa + 400 g de batata ou polenta. Metade frango e metade fritas."],
        ["Balde Fritas M", 65.90, "15 unidades de Sassami, coxinha ou tulipa + 600 g de batata ou polenta. Metade frango e metade fritas."]
    ],

    combos: [
        ["Combo Individual de Frango", 36, "8 unidades + 300 g de batata/polenta + refrigerante 220 ml + barbecue + ketchup."],
        ["Combo Duo de Frango", 66, "12 unidades + 300 g de batata + refrigerante 600 ml + barbecue + ketchup + creme de alho."],
        ["Combo Família de Frango", 106, "20 unidades + 500 g de batata + refrigerante 2 L + barbecue + ketchup + creme de alho + mostarda e mel."],
        ["Combo 1", 96, "1 kg de frango — coxinha, Sassami ou tulipa + 1 kg de batata com bacon e cheddar."],
        ["Combo 2 — Misto", 120, "1 kg de coxinha e Sassami + 1 kg de polenta frita + 500 g de calabresa acebolada."],
        ["Combo 3", 116, "1 kg de coxinha + 500 g de batata frita + 500 g de anel de cebola + 500 g de polenta frita + refrigerante 2 L."],
        ["Combo 4", 120, "1 kg de mandioca frita + 1 kg de Sassami + 500 g de calabresa acebolada + refrigerante 2 L."],
        ["Combo 5", 50, "1 kg de batata com bacon e cheddar."],
        ["Combo 6", 40, "1 kg de mandioca frita + 500 g de calabresa acebolada."],
        ["Combo Individual de Lanche", 45, "1 Chicken + 300 g de batata frita + refrigerante 220 ml."],
        ["Combo Duo de Lanche", 66, "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml."],
        ["Combo Trio", 80, "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml."],
        ["Combo Família de Lanche", 150, "5 Chickens + 1 kg de batata + refrigerante 2 L."],
        ["Combo Especial Duplo Cheddar — Duo", 84, "2 Especial Duplo Cheddar + 600 g de batata frita + 2 refrigerantes 220 ml."],
        ["Combo Especial Duplo Cheddar — Individual", 47, "1 Especial Duplo Cheddar + 300 g de batata frita + 1 refrigerante 220 ml."],
        ["Combo Especial Lanche", 80, "2 Chickens + 500 g de batata com bacon e cheddar + refrigerante 600 ml."],
        ["Combo Individual Chicken", 40, "1 Chicken + 300 g de batata com cheddar e bacon + refrigerante 220 ml."]
    ],

    porcoes: [
        ["Salada Americana", 28, "Alface americano + tomate-cereja + frango crocante + molho especial."],
        ["Batata Apimentada", 38, "Acompanha molho de pimenta."],
        ["Batata frita — 500 g", 30, ""],
        ["Batata com bacon e cheddar — 500 g", 36, ""],
        ["Batata frita — 300 g", 19, ""],
        ["Polenta frita — 500 g", 17, ""],
        ["Polenta frita — 300 g", 12, ""],
        ["Anel de cebola — 500 g", 35, ""],
        ["Anel de cebola — 300 g", 20, ""]
    ],

    molhos: [
        ["Molho cheddar", 6, ""],
        ["Molho de pimenta", 6, ""],
        ["Mostarda e mel", 6, ""],
        ["Abacaxi com pimenta", 6, ""],
        ["Creme de alho", 6, ""],
        ["Barbecue", 5, ""],
        ["Ketchup", 5, ""]
    ],

    bebidas: [
        ["Coca-Cola — 350 ml", 6, ""],
        ["Coca-Cola Zero — 350 ml", 6, ""],
        ["Fanta Guaraná — 350 ml", 6, ""],
        ["Sprite — 350 ml", 6, ""],
        ["Fanta Laranja — 350 ml", 6, ""],

        ["Coca-Cola — 600 ml", 9, ""],
        ["Coca-Cola Zero — 600 ml", 9, ""],
        ["Fanta Guaraná — 600 ml", 9, ""],
        ["Sprite — 600 ml", 9, ""],
        ["Fanta Laranja — 600 ml", 9, ""],

        ["Coca-Cola — 2 litros", 15, ""],
        ["Coca-Cola Zero — 2 litros", 15, ""],
        ["Guaraná — 2 litros", 14, ""],
        ["Fanta — 2 litros", 14, ""],
        ["Sprite — 2 litros", 14, ""],

        ["Água com gás", 3.50, ""]
    ],

    adicionais: [
        ["Anel de cebola", 3, ""],
        ["Hambúrguer", 10, ""],
        ["Bacon", 5, ""],
        ["Muçarela", 4, ""],
        ["Alface", 1, ""],
        ["Catupiry", 5, ""],
        ["Tomate", 1, ""],
        ["Cebola", 1, ""],
        ["Cheddar", 5, ""],
        ["Cebola roxa", 4, ""]
    ]
};


// ========================================
// FORMATAÇÃO
// ========================================

function dinheiro(valor) {

    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


// ========================================
// INÍCIO / CARDÁPIO
// ========================================

function mostrarInicio() {

    document.getElementById("inicio").style.display = "flex";
    document.getElementById("cardapio").style.display = "none";
    document.getElementById("produtosPagina").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function abrirCardapio() {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("cardapio").style.display = "block";
    document.getElementById("produtosPagina").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function mostrarCategoria(categoria) {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("cardapio").style.display = "block";
    document.getElementById("produtosPagina").style.display = "block";

    document.querySelectorAll(".categoria-produtos").forEach(secao => {
        secao.style.display = "none";
    });

    const categoriaEscolhida = document.getElementById(categoria);

    if (categoriaEscolhida) {

        categoriaEscolhida.style.display = "block";

        categoriaEscolhida.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// ========================================
// CARREGAR PRODUTOS
// ========================================

function carregarProdutos() {

    Object.keys(produtos).forEach(categoria => {

        if (categoria === "adicionais") return;

        const container = document.getElementById(categoria);

        if (!container) return;

        const titulo = container.querySelector("h2");

        container.innerHTML = "";

        if (titulo) {
            container.appendChild(titulo);
        }

        produtos[categoria].forEach((produto, index) => {

            const card = document.createElement("div");

            card.className = "produto-card";

            const info = document.createElement("div");

            info.className = "produto-info";

            const h3 = document.createElement("h3");

            h3.textContent = produto[0];

            const descricao = document.createElement("p");

            descricao.textContent = produto[2];

            const preco = document.createElement("strong");

            preco.textContent = dinheiro(produto[1]);

            info.appendChild(h3);

            if (produto[2]) {
                info.appendChild(descricao);
            }

            info.appendChild(preco);

            const botao = document.createElement("button");

            botao.textContent = "➕ ADICIONAR";

            botao.onclick = function() {
                adicionarProduto(categoria, index);
            };

            card.appendChild(info);
            card.appendChild(botao);

            container.appendChild(card);
        });
    });
}


// ========================================
// ADICIONAR PRODUTO
// ========================================

function adicionarProduto(categoria, index) {

    const produto = produtos[categoria][index];

    if (!produto) return;

    if (categoria === "lanches") {

        abrirOpcoesLanche(index);

        return;
    }

    if (categoria === "baldes") {

        abrirOpcoesBalde(index);

        return;
    }

    adicionarCarrinho(
        produto[0],
        produto[1],
        produto[2]
    );
}


// ========================================
// LANCHES
// ========================================

function abrirOpcoesLanche(index) {

    produtoLancheAtual = produtos.lanches[index];

    const modal = document.getElementById("lancheModal");

    if (!modal) return;

    document.getElementById("lancheNome").textContent =
        produtoLancheAtual[0];

    document.getElementById("lanchePreco").textContent =
        dinheiro(produtoLancheAtual[1]);

    const lista =
        document.getElementById("listaAdicionais");

    lista.innerHTML = "";

    produtos.adicionais.forEach((adicional, index) => {

        const label = document.createElement("label");

        label.className = "adicional-item";

        label.innerHTML = `
            <input
                type="checkbox"
                class="adicional-checkbox"
                data-index="${index}"
            >

            <span>
                ${adicional[0]}
                (+${dinheiro(adicional[1])})
            </span>
        `;

        lista.appendChild(label);
    });

    modal.style.display = "flex";
}


function fecharLancheModal() {

    const modal =
        document.getElementById("lancheModal");

    if (modal) {
        modal.style.display = "none";
    }

    produtoLancheAtual = null;
}


function confirmarLanche() {

    if (!produtoLancheAtual) return;

    let precoFinal =
        Number(produtoLancheAtual[1]);

    let descricao =
        "Acompanha molho de alho.";

    const adicionaisSelecionados = [];

    document
        .querySelectorAll(".adicional-checkbox:checked")
        .forEach(checkbox => {

            const index =
                Number(checkbox.dataset.index);

            const adicional =
                produtos.adicionais[index];

            if (!adicional) return;

            precoFinal +=
                Number(adicional[1]);

            adicionaisSelecionados.push(
                `${adicional[0]} (+${dinheiro(adicional[1])})`
            );
        });

    if (adicionaisSelecionados.length > 0) {

        descricao +=
            " Adicionais: " +
            adicionaisSelecionados.join(", ") +
            ".";
    }

    adicionarCarrinho(
        produtoLancheAtual[0],
        precoFinal,
        descricao
    );

    fecharLancheModal();
}


// ========================================
// BALDES
// ========================================

function abrirOpcoesBalde(index) {

    produtoBaldeAtual = produtos.baldes[index];

    const modal =
        document.getElementById("modalBalde");

    if (!modal) return;

    document.getElementById("nomeBalde").textContent =
        produtoBaldeAtual[0];

    document.getElementById("precoBalde").textContent =
        dinheiro(produtoBaldeAtual[1]);

    document
        .querySelectorAll('input[name="tipoFrango"]')
        .forEach(input => {
            input.checked = false;
        });

    document
        .querySelectorAll(".misto-checkbox")
        .forEach(input => {
            input.checked = false;
        });

    const misto =
        document.getElementById("tipoMisto");

    if (misto) {
        misto.checked = false;
    }

    const opcoesMisto =
        document.getElementById("opcoesMisto");

    if (opcoesMisto) {
        opcoesMisto.style.display = "none";
    }

    modal.style.display = "flex";
}


function fecharModalBalde() {

    const modal =
        document.getElementById("modalBalde");

    if (modal) {
        modal.style.display = "none";
    }

    produtoBaldeAtual = null;
}


function verificarMisto() {

    const misto =
        document.getElementById("tipoMisto");

    const opcoes =
        document.getElementById("opcoesMisto");

    if (!misto || !opcoes) return;

    if (misto.checked) {

        opcoes.style.display = "block";

        document
            .querySelectorAll('input[name="tipoFrango"]')
            .forEach(input => {
                input.checked = false;
            });

    } else {

        opcoes.style.display = "none";

        document
            .querySelectorAll(".misto-checkbox")
            .forEach(input => {
                input.checked = false;
            });
    }
}


function confirmarBalde() {

    if (!produtoBaldeAtual) return;

    let precoFinal =
        Number(produtoBaldeAtual[1]);

    let tipoSelecionado = "";

    const misto =
        document.getElementById("tipoMisto");

    if (misto && misto.checked) {

        const escolhidos =
            Array.from(
                document.querySelectorAll(
                    ".misto-checkbox:checked"
                )
            );

        if (escolhidos.length !== 2) {

            alert(
                "No Misto, escolha exatamente 2 tipos de frango."
            );

            return;
        }

        tipoSelecionado =
            "Misto: " +
            escolhidos
                .map(item => item.value)
                .join(" + ");

        precoFinal += 5;

    } else {

        const tipo =
            document.querySelector(
                'input[name="tipoFrango"]:checked'
            );

        if (!tipo) {

            alert(
                "Escolha o tipo de frango."
            );

            return;
        }

        tipoSelecionado = tipo.value;
    }

    const descricao =
        produtoBaldeAtual[2] +
        ` Tipo escolhido: ${tipoSelecionado}.`;

    adicionarCarrinho(
        produtoBaldeAtual[0],
        precoFinal,
        descricao
    );

    fecharModalBalde();
}


// ========================================
// CARRINHO
// ========================================

function adicionarCarrinho(
    nome,
    preco,
    descricao = ""
) {

    const itemExistente =
        carrinho.find(item =>
            item.nome === nome &&
            item.preco === Number(preco) &&
            item.descricao === descricao
        );

    if (itemExistente) {

        itemExistente.quantidade++;

    } else {

        carrinho.push({
            nome: nome,
            preco: Number(preco),
            descricao: descricao,
            quantidade: 1
        });
    }

    atualizarCarrinho();
}


function atualizarCarrinho() {

    const lista =
        document.getElementById("listaCarrinho");

    if (!lista) return;

    lista.innerHTML = "";

    if (carrinho.length === 0) {

        lista.innerHTML =
            `<p class="carrinho-vazio">
                Seu carrinho está vazio.
            </p>`;

    } else {

        carrinho.forEach((item, index) => {

            const div =
                document.createElement("div");

            div.className = "item-carrinho";

            div.innerHTML = `
                <div>
                    <strong>${item.nome}</strong>

                    ${
                        item.descricao
                        ? `<small>${item.descricao}</small>`
                        : ""
                    }

                    <p>
                        ${dinheiro(
                            item.preco * item.quantidade
                        )}
                    </p>
                </div>

                <div class="quantidade">

                    <button
                        onclick="alterarQuantidade(${index}, -1)">
                        −
                    </button>

                    <span>
                        ${item.quantidade}
                    </span>

                    <button
                        onclick="alterarQuantidade(${index}, 1)">
                        +
                    </button>

                </div>

                <strong>
                    ${dinheiro(
                        item.preco * item.quantidade
                    )}
                </strong>
            `;

            lista.appendChild(div);
        });
    }

    const contador =
        document.getElementById("contadorCarrinho");

    if (contador) {

        contador.textContent =
            carrinho.reduce(
                (total, item) =>
                    total + item.quantidade,
                0
            );
    }

    atualizarValores();
}


function alterarQuantidade(index, quantidade) {

    if (!carrinho[index]) return;

    carrinho[index].quantidade += quantidade;

    if (carrinho[index].quantidade <= 0) {

        carrinho.splice(index, 1);
    }

    atualizarCarrinho();
}


function calcularSubtotal() {

    return carrinho.reduce(
        (total, item) =>
            total +
            item.preco * item.quantidade,
        0
    );
}


// ========================================
// ENTREGA / RETIRADA
// ========================================

function selecionarRecebimento(tipo) {

    formaRecebimento = tipo;

    const entrega =
        document.getElementById("entrega");

    const retirada =
        document.getElementById("retirada");

    const campoEndereco =
        document.getElementById("campoEndereco");

    if (entrega) {

        entrega.classList.toggle(
            "ativo",
            tipo === "entrega"
        );
    }

    if (retirada) {

        retirada.classList.toggle(
            "ativo",
            tipo === "retirada"
        );
    }

    if (campoEndereco) {

        campoEndereco.style.display =
            tipo === "entrega"
            ? "block"
            : "none";
    }

    atualizarValores();
}


function escolherEntrega(tipo) {

    selecionarRecebimento(tipo);
}


function atualizarValores() {

    const subtotal =
        calcularSubtotal();

    const taxa =
        formaRecebimento === "entrega"
        ? TAXA_ENTREGA
        : 0;

    const total =
        subtotal + taxa;

    const campoSubtotal =
        document.getElementById("subtotal");

    const campoTaxa =
        document.getElementById("taxaEntrega");

    const campoTotal =
        document.getElementById("total");

    if (campoSubtotal) {
        campoSubtotal.textContent =
            dinheiro(subtotal);
    }

    if (campoTaxa) {
        campoTaxa.textContent =
            dinheiro(taxa);
    }

    if (campoTotal) {
        campoTotal.textContent =
            dinheiro(total);
    }
}


// ========================================
// MODAL CARRINHO
// ========================================

function abrirCarrinho() {

    const modal =
        document.getElementById("modalCarrinho");

    if (modal) {
        modal.style.display = "flex";
    }

    atualizarCarrinho();
}


function fecharCarrinho() {

    const modal =
        document.getElementById("modalCarrinho");

    if (modal) {
        modal.style.display = "none";
    }
}


// ========================================
// PAGAMENTO
// ========================================

function selecionarPagamento(tipo) {

    formaPagamento = tipo;

    tipoCartao = "";
    precisaTroco = "";

    const pix =
        document.getElementById("pixInfo");

    const cartao =
        document.getElementById("cartaoInfo");

    const dinheiroInfo =
        document.getElementById("dinheiroInfo");

    if (pix) {
        pix.style.display =
            tipo === "pix"
            ? "block"
            : "none";
    }

    if (cartao) {
        cartao.style.display =
            tipo === "cartao"
            ? "block"
            : "none";
    }

    if (dinheiroInfo) {
        dinheiroInfo.style.display =
            tipo === "dinheiro"
            ? "block"
            : "none";
    }

    document
        .querySelectorAll(".opcoes-pagamento button")
        .forEach(botao => {
            botao.classList.remove("ativo");
        });

    const id =
        tipo === "pix"
        ? "pagPix"
        : tipo === "cartao"
        ? "pagCartao"
        : "pagDinheiro";

    const botao =
        document.getElementById(id);

    if (botao) {
        botao.classList.add("ativo");
    }
}


// ========================================
// CARTÃO
// ========================================

function selecionarCartao(tipo) {

    tipoCartao = tipo;

    const debito =
        document.getElementById("cartaoDebito");

    const credito =
        document.getElementById("cartaoCredito");

    if (debito) {

        debito.classList.toggle(
            "ativo",
            tipo === "debito"
        );
    }

    if (credito) {

        credito.classList.toggle(
            "ativo",
            tipo === "credito"
        );
    }
}


// ========================================
// TROCO
// ========================================

function selecionarTroco(opcao) {

    precisaTroco = opcao;

    const campo =
        document.getElementById("campoTroco");

    const nao =
        document.getElementById("trocoNao");

    const sim =
        document.getElementById("trocoSim");

    if (nao) {

        nao.classList.toggle(
            "ativo",
            opcao === "nao"
        );
    }

    if (sim) {

        sim.classList.toggle(
            "ativo",
            opcao === "sim"
        );
    }

    if (campo) {

        campo.style.display =
            opcao === "sim"
            ? "block"
            : "none";
    }
}


// ========================================
// COPIAR PIX
// ========================================

function copiarPix() {

    if (
        navigator.clipboard &&
        navigator.clipboard.writeText
    ) {

        navigator.clipboard
            .writeText(CHAVE_PIX)
            .then(() => {
                alert("Chave PIX copiada!");
            })
            .catch(() => {
                copiarPixAlternativo();
            });

    } else {

        copiarPixAlternativo();
    }
}


function copiarPixAlternativo() {

    const textarea =
        document.createElement("textarea");

    textarea.value = CHAVE_PIX;

    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    try {
        document.execCommand("copy");

        alert("Chave PIX copiada!");

    } catch (erro) {

        alert(
            "Não foi possível copiar automaticamente. Chave PIX: " +
            CHAVE_PIX
        );
    }

    textarea.remove();
}


// ========================================
// WHATSAPP
// ========================================

function enviarWhatsApp() {

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio."
        );

        return;
    }

    const nome =
        document
            .getElementById("nomeCliente")
            ?.value
            .trim();

    const endereco =
        document
            .getElementById("endereco")
            ?.value
            .trim();

    const observacoes =
        document
            .getElementById("observacoes")
            ?.value
            .trim();

    if (!nome) {

        alert(
            "Digite seu nome."
        );

        return;
    }

    if (
        formaRecebimento === "entrega" &&
        !endereco
    ) {

        alert(
            "Digite seu endereço."
        );

        return;
    }

    if (!formaPagamento) {

        alert(
            "Escolha a forma de pagamento."
        );

        return;
    }

    if (
        formaPagamento === "cartao" &&
        !tipoCartao
    ) {

        alert(
            "Escolha se o cartão é débito ou crédito."
        );

        return;
    }

    if (
        formaPagamento === "dinheiro" &&
        !precisaTroco
    ) {

        alert(
            "Informe se precisa de troco."
        );

        return;
    }

    const valorTroco =
        document
            .getElementById("valorTroco")
            ?.value
            .trim();

    if (
        formaPagamento === "dinheiro" &&
        precisaTroco === "sim" &&
        !valorTroco
    ) {

        alert(
            "Informe para quanto precisa de troco."
        );

        return;
    }


    const subtotal =
        calcularSubtotal();

    const taxa =
        formaRecebimento === "entrega"
        ? TAXA_ENTREGA
        : 0;

    const total =
        subtotal + taxa;


    // ====================================
    // MENSAGEM
    // ====================================

    let mensagem =
        "🍗 *BENVENUTO CHICKEN* 🍗\n\n";

    mensagem +=
        "👤 *DADOS DO CLIENTE*\n";

    mensagem +=
        `Nome: ${nome}\n`;

    mensagem +=
        `Recebimento: ${
            formaRecebimento === "entrega"
            ? "🛵 Entrega"
            : "🏪 Retirada"
        }\n`;

    if (
        formaRecebimento === "entrega"
    ) {

        mensagem +=
            `Endereço: ${endereco}\n`;
    }


    mensagem +=
        "\n🛒 *PEDIDO*\n\n";


    carrinho.forEach(item => {

        mensagem +=
            `• ${item.quantidade}x ${item.nome}\n`;

        mensagem +=
            `  Valor: ${dinheiro(
                item.preco *
                item.quantidade
            )}\n`;

        if (item.descricao) {

            mensagem +=
                `  ${item.descricao}\n`;
        }

        mensagem += "\n";
    });


    mensagem +=
        "💳 *PAGAMENTO*\n";


    if (formaPagamento === "pix") {

        mensagem +=
            "Forma: PIX\n";

        mensagem +=
            `Chave PIX: ${CHAVE_PIX}\n`;

    } else if (
        formaPagamento === "cartao"
    ) {

        mensagem +=
            "Forma: Cartão\n";

        mensagem +=
            `Tipo: ${
                tipoCartao === "debito"
                ? "Débito"
                : "Crédito"
            }\n`;

    } else {

        mensagem +=
            "Forma: Dinheiro\n";

        mensagem +=
            `Precisa de troco: ${
                precisaTroco === "sim"
                ? "Sim"
                : "Não"
            }\n`;

        if (
            precisaTroco === "sim"
        ) {

            mensagem +=
                `Troco para: R$ ${valorTroco}\n`;
        }
    }


    mensagem +=
        "\n💰 *RESUMO*\n";

    mensagem +=
        `Subtotal: ${dinheiro(subtotal)}\n`;

    mensagem +=
        `Taxa de entrega: ${dinheiro(taxa)}\n`;

    mensagem +=
        `*TOTAL: ${dinheiro(total)}*\n`;


    if (observacoes) {

        mensagem +=
            "\n📝 *OBSERVAÇÕES*\n";

        mensagem +=
            `${observacoes}\n`;
    }


    mensagem +=
        "\n❤️ Obrigado pela preferência!";


    // ====================================
    // WHATSAPP
    // ====================================

    const url =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(mensagem);

    window.location.href = url;
}


// ========================================
// FECHAR MODAIS CLICANDO FORA
// ========================================

window.addEventListener(
    "click",
    function(event) {

        const modalBalde =
            document.getElementById("modalBalde");

        const modalLanche =
            document.getElementById("lancheModal");

        const modalCarrinho =
            document.getElementById("modalCarrinho");


        if (
            modalBalde &&
            event.target === modalBalde
        ) {

            fecharModalBalde();
        }


        if (
            modalLanche &&
            event.target === modalLanche
        ) {

            fecharLancheModal();
        }


        if (
            modalCarrinho &&
            event.target === modalCarrinho
        ) {

            fecharCarrinho();
        }

    }
);


// ========================================
// INICIAR SITE
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        carregarProdutos();

        atualizarCarrinho();

        selecionarRecebimento(
            "retirada"
        );

        // Começa mostrando somente a tela inicial
        document.getElementById("inicio").style.display = "flex";

        document.getElementById("cardapio").style.display = "none";

        document.getElementById("produtosPagina").style.display = "none";
    }
);
