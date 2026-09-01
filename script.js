const cardapio = {

    lanches: {
        titulo: "🍔 Lanches",
        descricao: "Todos os lanches acompanham molho de alho.",

        produtos: [
            ["X-Burguer", 19],
            ["Pop Chicken", 22],
            ["Chicken", 26],
            ["X-Calabresa", 27],
            ["X-Bacon", 27],
            ["X-Salada", 25],
            ["X-Rings", 27],
            ["Especial Duplo Cheddar", 37],
            ["Duplo Cheddar", 33],
            ["Americano", 28]
        ]
    },


    baldes: {
        titulo: "🍗 Baldes",

        descricao:
            "Escolha Coxinha, Sassami, Tulipa ou Misto + R$5. Todo balde acompanha ketchup e barbecue.",

        produtos: [
            ["Balde 8 unidades", 21, "8 unidades"],
            ["Balde P", 40, "12 unidades"],
            ["Balde M", 50, "15 unidades"],
            ["Balde G", 60, "20 unidades"],

            [
                "Balde Fritas P",
                55.90,
                "12 unidades + 400g de batata ou polenta. Metade frango e metade acompanhamento."
            ],

            [
                "Balde Fritas M",
                65.90,
                "15 unidades + 600g de batata ou polenta. Metade frango e metade acompanhamento."
            ]
        ]
    },


    combos: {
        titulo: "🔥 Combos",

        descricao:
            "Combos de frango, batatas e lanches.",

        produtos: [

            [
                "Combo Individual de Frango",
                36,
                "8 unidades + 300g de batata ou polenta + refrigerante 220ml. Acompanha barbecue e ketchup."
            ],

            [
                "Combo Duo de Frango",
                66,
                "12 unidades + 300g de batata ou polenta + refrigerante 600ml. Acompanha barbecue, ketchup e creme de alho."
            ],

            [
                "Combo Família de Frango",
                106,
                "20 unidades + 500g de batata ou polenta + refrigerante 2 litros. Acompanha quatro molhos."
            ],

            [
                "Combo 1",
                96,
                "1kg de frango + 1kg de batata com bacon e cheddar."
            ],

            [
                "Combo 2 — Misto",
                120,
                "1kg de coxinha e Sassami + 1kg de polenta frita + 500g de calabresa acebolada."
            ],

            [
                "Combo 3",
                116,
                "1kg de coxinha + 500g de batata + 500g de anel de cebola + 500g de polenta + refrigerante 2 litros."
            ],

            [
                "Combo 4",
                120,
                "1kg de mandioca + 1kg de Sassami + 500g de calabresa acebolada + refrigerante 2 litros."
            ],

            [
                "Combo 5",
                50,
                "1kg de batata com bacon e cheddar."
            ],

            [
                "Combo 6",
                40,
                "1kg de mandioca frita + 500g de calabresa acebolada."
            ],

            [
                "Combo Individual Chicken",
                45,
                "1 Chicken + 300g de batata frita + refrigerante 220ml."
            ],

            [
                "Combo Duo Chicken",
                66,
                "2 Chickens + 500g de batata + 2 refrigerantes 220ml."
            ],

            [
                "Combo Trio Chicken",
                80,
                "3 Chickens + 500g de batata + 3 refrigerantes 220ml."
            ],

            [
                "Combo Família Chicken",
                150,
                "5 Chickens + 1kg de batata + refrigerante 2 litros."
            ],

            [
                "Combo Especial Duplo Cheddar — Duo",
                84,
                "2 Especial Duplo Cheddar + 600g de batata + 2 refrigerantes 220ml."
            ],

            [
                "Combo Especial Duplo Cheddar — Individual",
                47,
                "1 Especial Duplo Cheddar + 300g de batata + refrigerante 220ml."
            ],

            [
                "Combo Especial Lanche",
                80,
                "2 Chickens + 500g de batata com bacon e cheddar + refrigerante 600ml."
            ],

            [
                "Combo Individual Chicken com Cheddar e Bacon",
                40,
                "1 Chicken + 300g de batata com cheddar e bacon + refrigerante 220ml."
            ]
        ]
    },


    porcoes: {
        titulo: "🍟 Porções",

        descricao:
            "Porções para acompanhar seu pedido.",

        produtos: [
            [
                "Salada Americana",
                28,
                "Alface americano, tomate cereja, frango crocante e nosso molho especial."
            ],

            [
                "Batata Apimentada",
                38,
                "Acompanha molho de pimenta."
            ],

            ["Polenta Frita — 500g", 17],
            ["Polenta Frita — 300g", 12],
            ["Anel de Cebola — 500g", 35],
            ["Anel de Cebola — 300g", 20]
        ]
    },


    batatas: {
        titulo: "🥔 Batatas",

        descricao:
            "Batatas fritas e especiais.",

        produtos: [
            ["Batata Frita — 300g", 19],
            ["Batata Frita — 500g", 30],
            ["Batata Bacon e Cheddar — 500g", 36]
        ]
    },


    bebidas: {
        titulo: "🥤 Bebidas",

        descricao:
            "Refrigerantes e água.",

        produtos: [
            ["Coca-Cola — Lata 350ml", 6],
            ["Coca-Cola Zero — Lata 350ml", 6],
            ["Fanta Guaraná — Lata 350ml", 6],
            ["Sprite — Lata 350ml", 6],
            ["Fanta Laranja — Lata 350ml", 6],

            ["Coca-Cola — 600ml", 9],
            ["Coca-Cola Zero — 600ml", 9],
            ["Fanta Guaraná — 600ml", 9],
            ["Sprite — 600ml", 9],
            ["Fanta Laranja — 600ml", 9],

            ["Coca-Cola — 2 litros", 15],
            ["Coca-Cola Zero — 2 litros", 15],
            ["Guaraná — 2 litros", 14],
            ["Fanta — 2 litros", 14],
            ["Sprite — 2 litros", 14],

            ["Água com gás", 3.50]
        ]
    },


    molhos: {
        titulo: "🥣 Molhos",

        descricao:
            "Molhos extras.",

        produtos: [
            ["Molho Cheddar", 6],
            ["Molho de Pimenta", 6],
            ["Mostarda e Mel", 6],
            ["Abacaxi com Pimenta", 6],
            ["Creme de Alho", 6],
            ["Barbecue", 5],
            ["Ketchup", 5]
        ]
    },


    adicionais: {
        titulo: "➕ Adicionais",

        descricao:
            "Adicionais para seus lanches.",

        produtos: [
            ["Anel de cebola", 3],
            ["Hambúrguer", 10],
            ["Bacon", 5],
            ["Muçarela", 4],
            ["Alface", 1],
            ["Catupiry", 5],
            ["Tomate", 1],
            ["Cebola", 1],
            ["Cheddar", 5],
            ["Cebola roxa", 4]
        ]
    }
};


let carrinho = [];

let categoriaAtual = "";

let baldeAtual = null;

let tipoFrango = "";

let misto = [];

let lancheAtual = null;

let formaRecebimento = "entrega";


function dinheiro(valor) {

    return Number(valor)
        .toFixed(2)
        .replace(".", ",");

}


function esconderTodas() {

    document
        .getElementById("inicio")
        .classList.add("hidden");

    document
        .getElementById("cardapio")
        .classList.add("hidden");

    document
        .getElementById("produtosPagina")
        .classList.add("hidden");
}


function mostrarInicio() {

    esconderTodas();

    document
        .getElementById("inicio")
        .classList.remove("hidden");

    window.scrollTo(0, 0);
}


function mostrarCardapio() {

    esconderTodas();

    document
        .getElementById("cardapio")
        .classList.remove("hidden");

    window.scrollTo(0, 0);
}


function voltarCategorias() {

    mostrarCardapio();
}


function abrirCategoria(nome) {

    categoriaAtual = nome;

    const categoria =
        cardapio[nome];

    esconderTodas();

    document
        .getElementById("produtosPagina")
        .classList.remove("hidden");

    document
        .getElementById("tituloCategoria")
        .textContent =
        categoria.titulo;

    document
        .getElementById("descricaoCategoria")
        .textContent =
        categoria.descricao;

    let html = "";

    categoria.produtos.forEach(
        (produto, index) => {

            html += `

                <article class="produto">

                    <h2>
                        ${produto[0]}
                    </h2>

                    <p class="produto-descricao">

                        ${
                            produto[2] ||
                            "Preparado com carinho pela Benvenuto Chicken."
                        }

                    </p>

                    <div class="produto-preco">

                        R$ ${dinheiro(produto[1])}

                    </div>

                    <button
                        class="botao-adicionar"
                        onclick="adicionarProduto(${index})">

                        🛒 ADICIONAR

                    </button>

                </article>
            `;
        }
    );

    document
        .getElementById("listaProdutos")
        .innerHTML = html;

    window.scrollTo(0, 0);
}


function adicionarProduto(index) {

    const produto =
        cardapio[categoriaAtual]
        .produtos[index];

    if (categoriaAtual === "baldes") {

        abrirBalde(produto);

        return;
    }

    if (categoriaAtual === "lanches") {

        abrirLanche(produto);

        return;
    }

    adicionarAoCarrinho(
        produto[0],
        produto[1],
        produto[2] || "",
        []
    );
}


function abrirBalde(produto) {

    baldeAtual = produto;

    tipoFrango = "";

    misto = [];

    document
        .getElementById("nomeBalde")
        .innerHTML =
        `<strong>${produto[0]}</strong>
        — R$ ${dinheiro(produto[1])}`;

    document
        .getElementById("mistoBox")
        .classList.add("hidden");

    document
        .getElementById("resumoBalde")
        .innerHTML =
        "Escolha o tipo de frango.";

    document
        .querySelectorAll(".escolha-frango")
        .forEach(botao => {

            botao.classList.remove(
                "selecionado"
            );
        });

    document
        .querySelectorAll(
            ".misto-opcao input"
        )
        .forEach(input => {

            input.checked = false;
        });

    document
        .getElementById("statusMisto")
        .textContent =
        "Escolha 2 tipos.";

    document
        .getElementById("modalBalde")
        .classList.remove("hidden");
}


function escolherTipoFrango(tipo, botao) {

    tipoFrango = tipo;

    document
        .querySelectorAll(".escolha-frango")
        .forEach(b => {

            b.classList.remove(
                "selecionado"
            );
        });

    botao.classList.add(
        "selecionado"
    );

    if (tipo === "Misto") {

        document
            .getElementById("mistoBox")
            .classList.remove("hidden");

    } else {

        document
            .getElementById("mistoBox")
            .classList.add("hidden");

        misto = [];
    }

    atualizarResumoBalde();
}


function selecionarMisto(input) {

    if (
        input.checked &&
        misto.length >= 2
    ) {

        input.checked = false;

        alert(
            "No misto você pode escolher apenas 2 tipos de frango."
        );

        return;
    }

    if (input.checked) {

        misto.push(input.value);

    } else {

        misto =
            misto.filter(
                tipo =>
                tipo !== input.value
            );
    }

    if (misto.length === 2) {

        document
            .getElementById("statusMisto")
            .textContent =
            "✓ " +
            misto.join(" + ");

    } else {

        document
            .getElementById("statusMisto")
            .textContent =
            `Escolha ${
                2 - misto.length
            } tipo(s).`;
    }

    atualizarResumoBalde();
}


function atualizarResumoBalde() {

    if (!tipoFrango) {
        return;
    }

    let preco =
        baldeAtual[1];

    let tipo =
        tipoFrango;

    if (tipoFrango === "Misto") {

        preco += 5;

        if (misto.length === 2) {

            tipo =
                "Misto: " +
                misto.join(" + ");
        }
    }

    document
        .getElementById("resumoBalde")
        .innerHTML = `

            🍗 <strong>${tipo}</strong>

            <br>

            🥫 Acompanha ketchup e barbecue

            <br>

            💰 R$ ${dinheiro(preco)}
        `;
}


function confirmarBalde() {

    if (!tipoFrango) {

        alert(
            "Escolha Coxinha, Sassami, Tulipa ou Misto."
        );

        return;
    }

    if (
        tipoFrango === "Misto" &&
        misto.length !== 2
    ) {

        alert(
            "Escolha exatamente 2 tipos de frango para o misto."
        );

        return;
    }

    let preco =
        baldeAtual[1];

    let descricao =
        tipoFrango;

    if (tipoFrango === "Misto") {

        preco += 5;

        descricao =
            "Misto: " +
            misto.join(" + ");
    }

    adicionarAoCarrinho(
        baldeAtual[0],
        preco,
        descricao +
        " • Acompanha ketchup e barbecue",
        []
    );

    fecharModal("modalBalde");
}


function abrirLanche(produto) {

    lancheAtual = produto;

    document
        .getElementById("nomeLanche")
        .innerHTML =
        `<strong>${produto[0]}</strong>
        — R$ ${dinheiro(produto[1])}`;

    let html = "";

    cardapio.adicionais.produtos
        .forEach((item, index) => {

            html += `

                <label class="adicional">

                    <span>

                        <input
                            type="checkbox"
                            value="${index}">

                        ${item[0]}

                    </span>

                    <span>
                        + R$ ${dinheiro(item[1])}
                    </span>

                </label>
            `;
        });

    document
        .getElementById("listaAdicionais")
        .innerHTML = html;

    document
        .getElementById("modalLanche")
        .classList.remove("hidden");
}


function confirmarLanche() {

    const selecionados =
        document.querySelectorAll(
            "#listaAdicionais input:checked"
        );

    const adicionais = [];

    selecionados.forEach(input => {

        const item =
            cardapio.adicionais.produtos[
                Number(input.value)
            ];

        adicionais.push({

            nome: item[0],

            preco: item[1]
        });
    });

    adicionarAoCarrinho(
        lancheAtual[0],
        lancheAtual[1],
        "Acompanha molho de alho",
        adicionais
    );

    fecharModal("modalLanche");
}


function adicionarAoCarrinho(
    nome,
    preco,
    descricao,
    adicionais
) {

    const chave =
        nome +
        "|" +
        descricao +
        "|" +
        adicionais
            .map(a => a.nome)
            .join(",");

    const existente =
        carrinho.find(
            item =>
            item.chave === chave
        );

    if (existente) {

        existente.quantidade++;

    } else {

        carrinho.push({

            chave: chave,

            nome: nome,

            preco: preco,

            descricao: descricao,

            adicionais: adicionais,

            quantidade: 1
        });
    }

    atualizarContador();

    alert(
        "✓ Produto adicionado ao pedido!"
    );
}


function atualizarContador() {

    let quantidade = 0;

    carrinho.forEach(item => {

        quantidade +=
            item.quantidade;
    });

    document
        .getElementById("contador")
        .textContent =
        quantidade;

    document
        .getElementById("contadorTopo")
        .textContent =
        quantidade;
}


function abrirCarrinho() {

    renderizarCarrinho();

    document
        .getElementById("modalCarrinho")
        .classList.remove("hidden");
}


function renderizarCarrinho() {

    const lista =
        document
            .getElementById("listaCarrinho");

    if (carrinho.length === 0) {

        lista.innerHTML = `

            <p style="
                padding:20px 0;
                color:#ccc;
                font-size:20px;
            ">

                Seu pedido está vazio.

            </p>
        `;

        atualizarValores();

        return;
    }

    let html = "";

    carrinho.forEach(
        (item, index) => {

            let preco =
                item.preco;

            item.adicionais.forEach(
                adicional => {

                    preco +=
                        adicional.preco;
                }
            );

            let adicionais = "";

            if (item.adicionais.length) {

                adicionais =
                    "<br>➕ " +
                    item.adicionais
                        .map(a => a.nome)
                        .join(", ");
            }

            html += `

                <div class="item">

                    <h3>

                        ${item.quantidade}x
                        ${item.nome}

                    </h3>

                    <p>

                        ${item.descricao}

                        ${adicionais}

                    </p>

                    <strong>

                        R$ ${
                            dinheiro(
                                preco *
                                item.quantidade
                            )
                        }

                    </strong>

                    <div class="controles">

                        <button
                            onclick="
                            alterarQuantidade(
                                ${index},
                                -1
                            )">

                            −

                        </button>

                        <strong>
                            ${item.quantidade}
                        </strong>

                        <button
                            onclick="
                            alterarQuantidade(
                                ${index},
                                1
                            )">

                            +

                        </button>

                    </div>

                </div>
            `;
        }
    );

    lista.innerHTML = html;

    atualizarValores();
}


function alterarQuantidade(index, quantidade) {

    carrinho[index].quantidade +=
        quantidade;

    if (
        carrinho[index].quantidade <= 0
    ) {

        carrinho.splice(index, 1);
    }

    atualizarContador();

    renderizarCarrinho();
}


function atualizarValores() {

    let subtotal = 0;

    carrinho.forEach(item => {

        let preco =
            item.preco;

        item.adicionais.forEach(
            adicional => {

                preco +=
                    adicional.preco;
            }
        );

        subtotal +=
            preco *
            item.quantidade;
    });

    const taxa =
        formaRecebimento === "entrega"
        ? 4
        : 0;

    const total =
        subtotal + taxa;

    document
        .getElementById("subtotal")
        .textContent =
        "R$ " +
        dinheiro(subtotal);

    document
        .getElementById("taxa")
        .textContent =
        "R$ " +
        dinheiro(taxa);

    document
        .getElementById("total")
        .textContent =
        "R$ " +
        dinheiro(total);
}


function selecionarRecebimento(tipo) {

    formaRecebimento = tipo;

    document
        .getElementById("botaoEntrega")
        .classList.remove("ativo");

    document
        .getElementById("botaoRetirada")
        .classList.remove("ativo");

    if (tipo === "entrega") {

        document
            .getElementById("botaoEntrega")
            .classList.add("ativo");

        document
            .getElementById("campoEndereco")
            .classList.remove("hidden");

    } else {

        document
            .getElementById("botaoRetirada")
            .classList.add("ativo");

        document
            .getElementById("campoEndereco")
            .classList.add("hidden");
    }

    atualizarValores();
}


function enviarWhatsApp() {

    if (carrinho.length === 0) {

        alert(
            "Seu pedido está vazio."
        );

        return;
    }

    const nome =
        document
            .getElementById("nomeCliente")
            .value
            .trim();

    const endereco =
        document
            .getElementById("enderecoCliente")
            .value
            .trim();

    const observacoes =
        document
            .getElementById("observacoes")
            .value
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

    let subtotal = 0;

    let mensagem =
        "🍗 *BENVENUTO CHICKEN* 🍗\n" +
        "━━━━━━━━━━━━━━━━━━\n" +
        "🛒 *NOVO PEDIDO*\n" +
        "━━━━━━━━━━━━━━━━━━\n\n";

    mensagem +=
        "👤 *Nome:* " +
        nome +
        "\n";

    if (
        formaRecebimento === "entrega"
    ) {

        mensagem +=
            "🚚 *Entrega*\n";

        mensagem +=
            "📍 *Endereço:* " +
            endereco +
            "\n";

    } else {

        mensagem +=
            "🏪 *Retirada no local*\n";
    }

    mensagem +=
        "\n🍔 *ITENS DO PEDIDO*\n" +
        "━━━━━━━━━━━━━━━━━━\n\n";

    carrinho.forEach(item => {

        let preco =
            item.preco;

        item.adicionais.forEach(
            adicional => {

                preco +=
                    adicional.preco;
            }
        );

        const valor =
            preco *
            item.quantidade;

        subtotal += valor;

        mensagem +=
            "🍗 " +
            item.quantidade +
            "x " +
            item.nome +
            "\n";

        mensagem +=
            "💰 R$ " +
            dinheiro(valor) +
            "\n";

        if (item.descricao) {

            mensagem +=
                "ℹ️ " +
                item.descricao +
                "\n";
        }

        if (item.adicionais.length) {

            mensagem +=
                "➕ Adicionais: " +
                item.adicionais
                    .map(a => a.nome)
                    .join(", ") +
                "\n";
        }

        mensagem += "\n";
    });

    const taxa =
        formaRecebimento === "entrega"
        ? 4
        : 0;

    const total =
        subtotal + taxa;

    mensagem +=
        "━━━━━━━━━━━━━━━━━━\n";

    mensagem +=
        "💰 *Subtotal:* R$ " +
        dinheiro(subtotal) +
        "\n";

    mensagem +=
        "🚚 *Taxa de entrega:* R$ " +
        dinheiro(taxa) +
        "\n";

    mensagem +=
        "💵 *TOTAL:* R$ " +
        dinheiro(total) +
        "\n";

    if (observacoes) {

        mensagem +=
            "\n📝 *Observações:*\n" +
            observacoes +
            "\n";
    }

    mensagem +=
        "\n❤️ Obrigado por pedir na Benvenuto Chicken!";


    /* NÚMERO DA BENVENUTO CHICKEN */

    const telefone =
        "5544997323438";


    const url =
        "https://wa.me/" +
        telefone +
        "?text=" +
        encodeURIComponent(mensagem);


    window.open(
        url,
        "_blank"
    );
}


function fecharModal(id) {

    document
        .getElementById(id)
        .classList.add("hidden");
}


atualizarContador();