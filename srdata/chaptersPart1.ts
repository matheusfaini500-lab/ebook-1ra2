import { EbookChapter } from '../types/ebook';

export const CHAPTERS_PART_1: EbookChapter[] = [
  {
    id: 'cap-1',
    number: 1,
    title: 'Introdução: qualquer pessoa pode começar',
    subtitle: 'Por que você não precisa de faculdade, notebook caro nem experiência prévia para faturar de casa.',
    pageStart: 4,
    pageEnd: 6,
    readingTime: '8 min',
    dailyPotential: 'Mentalidade + Meta R$ 50 a R$ 220/dia',
    intro: [
      'Se você está lendo esta página pelo celular, saiba de uma coisa: você já tem nas mãos a ferramenta principal para mudar a sua realidade financeira nos próximos 30 dias.',
      'Durante anos, disseram que ganhar dinheiro exigia sair de casa às 6h da manhã, pegar ônibus lotado e ter um currículo cheio de diplomas. Esse modelo acabou. Hoje, pequenas empresas, lojas virtuais, criadores de conteúdo e plataformas internacionais precisam de ajuda humana simples todos os dias.',
      'Elas pagam por hora, por tarefa ou por comissão para pessoas comuns que sabem responder mensagens com educação, digitar textos, organizar agendas ou indicar produtos úteis. Este guia foi desenhado como um manual direto ao ponto: nada de teoria enrolada. Cada capítulo termina com uma tarefa prática para você executar hoje mesmo.'
    ],
    sections: [
      {
        heading: 'A matemática simples de R$ 50 a R$ 220 por dia',
        paragraphs: [
          'Muita gente trava porque acha que precisa ganhar R$ 5.000 logo na primeira semana. Quando você divide o objetivo em metas diárias pequenas, o jogo fica leve e totalmente alcançável.',
          'Fazer R$ 50 por dia, trabalhando 20 dias úteis no mês, significa R$ 1.000 extras entrando no seu bolso sem gastar com passagem ou marmita. Quando você domina um serviço e sobe para R$ 150 ou R$ 220 por dia, já ultrapassa R$ 3.000 a R$ 4.400 mensais no conforto da sua casa.'
        ],
        table: {
          title: 'Tabela 1.1 — Quanto rende cada nível diário no mês (22 dias)',
          headers: ['Nível Diário', 'Meta por Dia', 'Renda Semanal (5 dias)', 'Renda Mensal (22 dias)', 'Exemplo Real de Atividade'],
          rows: [
            ['Iniciante', 'R$ 50,00', 'R$ 250,00', 'R$ 1.100,00', '1 microprojeto de digitação + 1 venda afiliado'],
            ['Consistente', 'R$ 100,00', 'R$ 500,00', 'R$ 2.200,00', 'Atendimento de chat 4h/dia ou 2 transcrições'],
            ['Profissional', 'R$ 160,00', 'R$ 800,00', 'R$ 3.520,00', 'Assistente Virtual para 2 pequenas lojas'],
            ['Avançado / Dólar', 'R$ 220,00', 'R$ 1.100,00', 'R$ 4.840,00', 'US$ 40/dia em tarefas ou suporte bilíngue']
          ],
          caption: 'Valores baseados em cotações médias e serviços reais executados por iniciantes sem investimento inicial.'
        }
      },
      {
        heading: 'O que você realmente precisa para começar hoje',
        paragraphs: [
          'Esqueça a desculpa do equipamento perfeito. Se você tem um celular Android ou iPhone com acesso ao Wi-Fi e pelo menos 90 minutos livres por dia, você está pronto.',
          'Mais importante do que um computador caro é a sua postura: responder rápido, entregar no prazo combinado e ser honesto sobre o que sabe fazer. No home office, quem responde com clareza em 10 minutos ganha o serviço antes de quem tem diploma mas demora dois dias para retornar.'
        ],
        steps: [
          'Separe um e-mail exclusivo para trabalho (ex.: seunome.profissional@gmail.com) para não misturar vagas com spam.',
          'Limpe 1 GB de espaço no celular para instalar aplicativos gratuitos essenciais (Google Docs, Canva, Wise, PayPal e plataformas de freela).',
          'Defina sua meta inicial realista: conquistar os primeiros R$ 50 em até 7 dias e R$ 1.000+ dentro de 30 dias.'
        ],
        exampleBox: {
          title: 'História Prática: Como a Carla fez R$ 75 no terceiro dia',
          content: [
            'Carla trabalhava como diarista e só tinha um celular intermediário com tela trincada na borda.',
            'Ela criou um perfil gratuito no 99Freelas oferecendo transcrição de áudios de WhatsApp e organização de planilhas simples.',
            'Na terça-feira à noite, um dentista precisava passar 40 fichas de pacientes de áudio para texto. Ela cobrou R$ 75, digitou tudo usando o ditado por voz do Google Docs e recebeu via Pix em 4 horas.'
          ]
        }
      }
    ],
    mistakes: [
      {
        mistake: 'Esperar comprar um notebook novo para fazer o primeiro cadastro.',
        fix: 'Use o celular hoje mesmo. O primeiro dinheiro ganho no celular vai pagar seu equipamento futuro.'
      },
      {
        mistake: 'Tentar aprender 10 profissões ao mesmo tempo e não aplicar nenhuma.',
        fix: 'Escolha apenas 1 rota principal entre os capítulos 4 e 9 durante os próximos 15 dias.'
      },
      {
        mistake: 'Achar que "trabalhar em casa" significa ganhar dinheiro sem fazer nada.',
        fix: 'Home office é trabalho de verdade, com horário e entrega. A diferença é que você não pega trânsito e escolhe onde sentar.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 1',
      objective: 'Preparar sua identidade profissional gratuita em 15 minutos.',
      estimatedTime: '15 minutos',
      steps: [
        'Crie uma conta Gmail nova com nome profissional (sem apelidos como "gatinha99" ou "gamerpro").',
        'Tire uma foto sua com boa iluminação natural de janela, fundo limpo e sorriso leve — ela será sua foto de perfil nas plataformas.',
        'Escreva em um bloco de notas sua meta para os próximos 30 dias (ex.: "Quero faturar R$ 1.500 este mês trabalhando das 19h às 21h").'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=como+ganhar+dinheiro+trabalhando+home+office+sem+experiencia'
      }
    ]
  },
  {
    id: 'cap-2',
    number: 2,
    title: 'O que é Home Office e como funciona de verdade',
    subtitle: 'Os 4 modelos reais de ganho remoto e como empresas pagam pessoas comuns todos os dias.',
    pageStart: 7,
    pageEnd: 9,
    readingTime: '9 min',
    dailyPotential: 'R$ 50 a R$ 220/dia',
    intro: [
      'A expressão "Home Office" significa literalmente escritório em casa. Na prática, envolve qualquer atividade profissional que você executa usando internet e entrega para alguém ou alguma empresa à distância.',
      'Muita gente confunde home office com vaga CLT tradicional com carteira assinada. Embora existam vagas CLT remotas, elas exigem currículo longo e processos demorados. Para quem quer começar do zero e fazer renda em até 30 dias, existem caminhos muito mais rápidos e acessíveis.',
      'Neste capítulo, você vai entender a engrenagem real por trás do mercado remoto para nunca mais cair em promessas falsas nem perder tempo no lugar errado.'
    ],
    sections: [
      {
        heading: 'Os 4 motores do dinheiro em casa',
        paragraphs: [
          'Todo pagamento que cai na sua conta trabalhando em casa vem de um destes quatro modelos. Entender cada um ajuda você a escolher o melhor para o seu perfil atual:'
        ],
        table: {
          title: 'Tabela 2.1 — Os 4 Modelos Reais de Home Office',
          headers: ['Modelo', 'Como Funciona', 'Tempo até 1º Pix', 'Faixa de Ganho Diário'],
          rows: [
            ['1. Prestação de Serviços (Freela)', 'Você resolve uma tarefa pontual (digitar, atender, editar) para um cliente.', '2 a 10 dias', 'R$ 60 a R$ 220/dia'],
            ['2. Microtarefas e Avaliação de IA', 'Empresas gringas pagam por cliques, gravação de áudio ou avaliação de buscas.', '7 a 15 dias', 'R$ 50 a R$ 140/dia'],
            ['3. Comissões como Afiliado', 'Você indica produtos prontos da Shopee, Amazon ou Hotmart e ganha % da venda.', '3 a 21 dias', 'R$ 50 a R$ 220/dia'],
            ['4. Contratos Mensais (Assistente)', 'Você fecha pacote fixo mensal com 1 a 3 empresas para cuidar do WhatsApp/agenda.', '14 a 30 dias', 'R$ 100 a R$ 220/dia']
          ]
        }
      },
      {
        heading: 'Por que empresas preferem pagar freelancers do que contratar CLT?',
        paragraphs: [
          'No Brasil, um funcionário registrado custa quase o dobro do salário em impostos para uma pequena loja. Um dono de loja de roupas, uma clínica odontológica ou um corretor de imóveis não quer pagar R$ 3.500 de encargos só para ter alguém respondendo Direct e organizando planilhas.',
          'Em vez disso, esse dono de negócio prefere pagar R$ 800 a R$ 1.500 por mês para um Assistente Virtual ou freelancer trabalhar 2 a 3 horas por dia pelo celular. Se você atender 2 clientes assim no mesmo dia, já faz R$ 100 a R$ 150 por dia trabalhando de casa.'
        ],
        steps: [
          'Identifique sua facilidade natural: você prefere escrever, conversar com pessoas, organizar dados ou gravar/indicar produtos?',
          'Entenda que velocidade vence perfeição: empresas pequenas precisam de alívio imediato para tarefas chatas.',
          'Combine os modelos: faça microtarefas de manhã para caixa rápido e construa clientes fixos à tarde.'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Mandar currículo genérico pedindo "qualquer vaga de emprego".',
        fix: 'Ofereça uma solução específica: "Posso responder seus clientes no WhatsApp das 14h às 18h e evitar que você perca vendas".'
      },
      {
        mistake: 'Trabalhar sem combinar prazo e valor por escrito antes de começar.',
        fix: 'Sempre confirme no chat ou plataforma: "O valor combinado é R$ 80 com entrega amanhã às 18h, correto?".'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 2',
      objective: 'Escolher seu perfil de entrada entre os 4 modelos.',
      estimatedTime: '10 minutos',
      steps: [
        'Anote qual dos 4 modelos acima combina mais com sua rotina hoje (Serviço Rápido, Microtarefas, Afiliado ou Assistente).',
        'Liste 3 habilidades simples que você já usa no dia a dia (ex.: responder rápido no WhatsApp, pesquisar preços no Google, fazer resumos, usar Instagram).'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=como+ganhar+dinheiro+trabalhando+home+office+sem+experiencia'
      }
    ]
  },
  {
    id: 'cap-3',
    number: 3,
    title: 'Como começar do zero sem investir nada',
    subtitle: 'Montando seu escritório digital gratuito no celular com custo zero real.',
    pageStart: 10,
    pageEnd: 13,
    readingTime: '10 min',
    dailyPotential: 'Custo R$ 0,00 · Economia inicial de R$ 1.500+',
    image: {
      src: '/src/assets/images/setup_home_office_1795594178320.jpg',
      alt: 'Mesa limpa de home office com celular, notebook e planta verde',
      caption: 'Fig. 3.1 — Você começa apenas com o celular e um canto organizado; o notebook vem depois com o próprio lucro.'
    },
    intro: [
      'A maior armadilha para iniciantes é achar que precisam gastar dinheiro para ganhar dinheiro. Muita gente cai em cursos caros, compra anel de luz, assina ferramentas pagas e fecha o mês no prejuízo antes de receber o primeiro real.',
      'A regra de ouro do método Casa Que Rendi é clara: nos primeiros 30 dias, seu investimento financeiro obrigatório é R$ 0,00. Todas as plataformas recomendadas neste guia possuem cadastro gratuito, e todos os aplicativos que você vai usar para produzir têm versão grátis mais do que suficiente.'
    ],
    sections: [
      {
        heading: 'Seu Kit Gratuito de Ferramentas no Celular',
        paragraphs: [
          'Instale apenas o que gera resultado. Abaixo está a caixa de ferramentas usada por freelancers que faturam de R$ 1.500 a R$ 4.000/mês sem gastar 1 centavo com software:'
        ],
        table: {
          title: 'Tabela 3.1 — Kit 100% Gratuito para Trabalhar pelo Celular',
          headers: ['Ferramenta (Grátis)', 'Para que Serve', 'Substitui o Quê?', 'Onde Baixar'],
          rows: [
            ['Google Docs & Planilhas', 'Digitar textos, revisar e organizar listas de clientes', 'Microsoft Word / Excel pagos', 'Play Store / App Store'],
            ['Canva (Plano Grátis)', 'Criar currículos, posts, capas de ebook e cardápios', 'Photoshop caro', 'canva.com / App'],
            ['WhatsApp Business', 'Atender clientes com respostas rápidas e catálogo', 'Sistema caro de CRM', 'Play Store / App Store'],
            ['CapCut', 'Cortar vídeos curtos e colocar legendas automáticas', 'Premiere pago', 'Play Store / App Store'],
            ['Google Tradutor / DeepL', 'Apoiar traduções e entender vagas internacionais', 'Cursos caros iniciais', 'deepl.com / App'],
            ['Trello ou Notion', 'Controlar prazos e entregas de cada cliente', 'Gerenciadores pagos', 'trello.com / notion.so']
          ]
        }
      },
      {
        heading: 'Passo a passo para montar seu Portfólio Zero-Custo em 30 minutos',
        paragraphs: [
          'Mesmo sem nunca ter sido contratado, você consegue mostrar que sabe fazer o trabalho. Como? Criando 2 amostras reais fictícias.',
          'Se você quer digitar textos ou revisar: pegue um vídeo de 3 minutos no YouTube, transcreva para o Google Docs, formate bonito e salve em PDF. Se quer fazer artes ou social media: crie 3 posts fictícios para uma padaria ou clínica no Canva grátis e salve no Google Drive.'
        ],
        steps: [
          'Crie uma pasta no seu Google Drive chamada "Portfólio - Seu Nome".',
          'Suba 2 a 3 arquivos PDF ou imagens demonstrando o serviço que você quer vender.',
          'Ative o compartilhamento "Qualquer pessoa com o link pode visualizar" e copie esse link curto.',
          'Pronto! Agora, quando um cliente perguntar "Você tem exemplos?", você não diz "sou iniciante", você manda o link da pasta com segurança.'
        ],
        exampleBox: {
          title: 'Regra de Proteção Financeira para Iniciantes',
          content: [
            'NUNCA pague taxa de cadastro, taxa de emissão de crachá, taxa de liberação de saque ou kit inicial para trabalhar para uma empresa.',
            'Sites legítimos (como Workana, 99Freelas, Appen, Hotmart, Shopee) descontam uma pequena porcentagem apenas DEPOIS que você ganha dinheiro. Nunca antes.'
          ]
        }
      }
    ],
    mistakes: [
      {
        mistake: 'Assinar planos "Pro" ou pagar anúncios no Instagram logo na primeira semana.',
        fix: 'Use exclusivamente tráfego orgânico, propostas gratuitas e planos grátis até faturar seus primeiros R$ 1.000.'
      },
      {
        mistake: 'Deixar o portfólio salvo apenas na galeria do celular, perdendo tempo para enviar.',
        fix: 'Tenha tudo organizado em 1 link único do Google Drive pronto para colar em qualquer conversa.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 3',
      objective: 'Instalar seu kit gratuito e criar sua primeira amostra de portfólio.',
      estimatedTime: '25 minutos',
      steps: [
        'Baixe Google Docs, Google Drive e Canva no seu celular.',
        'Crie 1 amostra de trabalho (um texto digitado e formatado OU 2 artes simples de loja) e salve em PDF no Google Drive.',
        'Teste o link compartilhável abrindo em uma aba anônima do navegador para garantir que está público.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=como+comecar+trabalhar+em+casa+do+zero+sem+investir+nada'
      }
    ]
  },
  {
    id: 'cap-4',
    number: 4,
    title: 'Ganhar dinheiro digitando textos e respondendo chats',
    subtitle: 'A porta de entrada mais rápida para quem sabe ler, escrever bem e responder com agilidade.',
    pageStart: 14,
    pageEnd: 16,
    readingTime: '11 min',
    dailyPotential: 'R$ 50 a R$ 170/dia',
    intro: [
      'Digitar textos e responder mensagens são as duas habilidades mais fáceis de transformar em dinheiro rápido. Você já digita no WhatsApp todos os dias — a diferença aqui é direcionar essa habilidade para empresas que têm volume alto de mensagens ou documentos atrasados.',
      'Neste mercado existem duas frentes reais: atendimento de chat/suporte (SDR, SAC no WhatsApp e Direct) e serviços de digitação/entrada de dados (passar PDFs, fotos, cadernos ou formulários para planilhas e documentos editáveis).'
    ],
    sections: [
      {
        heading: 'Como funciona na prática e quanto você cobra',
        paragraphs: [
          'Não aceite trabalhar por centavos em sites suspeitos que prometem R$ 500 por digitar 1 palavra. No mercado real, você ganha por projeto fechado ou pacote semanal de atendimento.',
          'Em digitação e entrada de dados (Data Entry), o segredo é usar o recurso de "Digitação por Voz" do teclado do celular (Gboard) ou do Google Docs, além do Google Lens para copiar texto de fotos automaticamente e só revisar!'
        ],
        table: {
          title: 'Tabela 4.1 — Tabela de Preços Médios para Iniciantes',
          headers: ['Serviço', 'Unidade / Pacote', 'Preço Justo (Iniciante)', 'Tempo Médio no Celular'],
          rows: [
            ['Digitação de texto simples / PDF para Word', 'Por bloco de 10 páginas', 'R$ 45 a R$ 80', '1h a 1h30 (com Google Lens)'],
            ['Cadastro de produtos em loja virtual / Shopee', 'Por 30 produtos cadastrados', 'R$ 60 a R$ 110', '2 horas'],
            ['Atendimento WhatsApp / Direct (Meio Período)', '4 horas/dia (Seg a Sex)', 'R$ 700 a R$ 1.100/mês', '4h diárias em casa'],
            ['Moderação de comentários e grupos', 'Pacote semanal', 'R$ 250 a R$ 400/sem', '1h30 por dia']
          ]
        }
      },
      {
        heading: 'Passo a passo para conseguir seu primeiro cliente de chat ou digitação',
        paragraphs: [
          'Você pode buscar clientes tanto em plataformas quanto diretamente na sua cidade ou Instagram.'
        ],
        steps: [
          'Abra o 99Freelas e o Workana e filtre projetos nas categorias "Suporte Administrativo", "Entrada de Dados" e "Atendimento ao Cliente".',
          'No Instagram, pesquise lojas da sua região (roupas, suplementos, estética, delivery) que postam todo dia e têm comentários sem resposta.',
          'Envie uma mensagem educada oferecendo 3 dias de teste gratuito ou um valor simbólico de entrada para organizar as respostas do WhatsApp e Direct.',
          'Use o WhatsApp Business com mensagens rápidas pré-salvas (ex.: "/preco", "/endereco", "/pix") para responder 5x mais rápido que uma pessoa comum.'
        ],
        exampleBox: {
          title: 'Exemplo Real: R$ 120/dia combinando 2 lojas locais',
          content: [
            'Uma loja de roupas femininas e uma clínica de estética recebem dezenas de mensagens no Instagram enquanto as donas estão atendendo presencialmente.',
            'Você fecha R$ 600/mês com cada uma (R$ 1.200 no total) para responder dúvidas básicas e agendar horários das 13h às 17h pelo celular. Leva menos de 20 minutos por hora de atenção real e libera seu tempo para outras tarefas.'
          ]
        }
      }
    ],
    platforms: [
      {
        name: '99Freelas',
        url: '99freelas.com.br',
        role: 'Projetos de entrada de dados, planilhas e atendimento remoto',
        earningRange: 'R$ 50 – R$ 160/dia',
        payout: 'Pix / Conta Bancária'
      },
      {
        name: 'Workana',
        url: 'workana.com',
        role: 'Vagas de suporte ao cliente e digitação em português/espanhol',
        earningRange: 'R$ 70 – R$ 190/dia',
        payout: 'Pix / PayPal'
      },
      {
        name: 'ModSquad',
        url: 'modsquad.com',
        role: 'Moderação de chats e comunidades para marcas internacionais',
        earningRange: 'R$ 85 – R$ 175/dia',
        payout: 'PayPal / Wise'
      }
    ],
    mistakes: [
      {
        mistake: 'Digitar tudo letra por letra quando o cliente manda foto de documento.',
        fix: 'Use o Google Lens para extrair o texto da foto em 5 segundos e gaste seu tempo apenas revisando a ortografia.'
      },
      {
        mistake: 'Responder clientes de forma seca ("Sim", "Não", "Veja no link").',
        fix: 'Use atendimento consultivo: cumprimente pelo nome, responda a dúvida e faça uma pergunta final para fechar a venda.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 4',
      objective: 'Configurar 3 respostas rápidas e enviar suas primeiras 5 propostas.',
      estimatedTime: '30 minutos',
      steps: [
        'Cadastre-se gratuitamente no 99Freelas e no Workana.',
        'Ative o modo de digitação por voz no teclado do seu celular e teste ditando um parágrafo de 5 linhas.',
        'Envie 5 propostas personalizadas hoje para projetos de digitação, cadastro de produtos ou atendimento ao cliente.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/watch?v=IxftvD0PA70'
      }
    ]
  },
  {
    id: 'cap-5',
    number: 5,
    title: 'Afiliado — como vender produtos sem aparecer',
    subtitle: 'Ganhe comissões de 10% a 60% indicando produtos da Shopee, Amazon, Mercado Livre e Hotmart sem mostrar o rosto.',
    pageStart: 17,
    pageEnd: 19,
    readingTime: '12 min',
    dailyPotential: 'R$ 50 a R$ 220/dia',
    intro: [
      'Ser afiliado é um dos jeitos mais inteligentes de trabalhar pelo celular porque você não precisa comprar estoque, não precisa embalar caixa, não vai aos Correios e não precisa lidar com entrega.',
      'Funciona assim: você se cadastra grátis em uma plataforma (como Shopee, Amazon, Mercado Livre ou Hotmart), escolhe produtos que as pessoas já querem comprar e pega um link exclusivo seu. Toda vez que alguém compra pelo seu link, a comissão cai no seu painel automaticamente.',
      'E o melhor: você não precisa gravar dancinha nem mostrar seu rosto. Existem estratégias "sem aparecer" que funcionam todos os dias.'
    ],
    sections: [
      {
        heading: 'Produtos Físicos vs. Produtos Digitais: qual escolher?',
        paragraphs: [
          'Produtos físicos (Shopee, Amazon, Mercado Livre) têm comissão menor por unidade (3% a 16%), mas vendem muito fácil porque todo mundo confia na marca. Já produtos digitais (ebooks, cursos, planilhas na Hotmart e Kiwify) pagam comissões altas de 40% a 60% por venda.'
        ],
        table: {
          title: 'Tabela 5.1 — Comparativo para Fazer R$ 100 a R$ 220 por Dia',
          headers: ['Plataforma', 'Ticket Médio', 'Comissão Média', 'Vendas p/ R$ 120/dia', 'Estratégia Sem Aparecer'],
          rows: [
            ['Shopee Afiliados', 'R$ 55', '8% a 14% (~R$ 7)', '17 vendas/dia (volume)', 'Vídeos curtos de achadinhos + grupo WhatsApp'],
            ['Mercado Livre', 'R$ 140', '8% a 16% (~R$ 16)', '8 vendas/dia', 'Canal de ofertas no Telegram / Pinterest'],
            ['Hotmart / Kiwify', 'R$ 97', '50% (~R$ 44)', '3 vendas/dia', 'Reels temáticos (finanças, receitas, casa)'],
            ['Amazon Associados', 'R$ 120', '7% a 12% (~R$ 12)', '10 vendas/dia', 'Listas "Melhores até R$ 100" no TikTok']
          ]
        }
      },
      {
        heading: '3 Métodos Reais para Vender Sem Mostrar o Rosto',
        paragraphs: [
          'Escolha apenas UM método abaixo para dominar pelos próximos 21 dias:'
        ],
        steps: [
          '1. Canal de Achadinhos (TikTok, Reels e YouTube Shorts): baixe vídeos curtos demonstrando produtos úteis de casa/cozinha (do próprio fornecedor ou banco de vídeos), adicione legenda grande no CapCut ("Organizador que salvou minha cozinha") e coloque o link na bio ou nos comentários.',
          '2. Grupo de Ofertas Relâmpago no WhatsApp: crie um grupo silencioso onde só você envia mensagens. Comece convidando 30 amigos e familiares com a promessa: "Só posto promoções reais de 40% a 70% de desconto na Shopee e Amazon". Poste 4 ofertas testadas por dia.',
          '3. Pinterest + Blog/Link direto: crie imagens verticais bonitas no Canva (ex.: "5 Livros para organizar sua vida financeira" ou "Itens minimalistas para quarto pequeno") e vincule ao seu link de afiliado da Amazon.'
        ],
        exampleBox: {
          title: 'Simulação Prática: A Conta dos R$ 150/dia na Kiwify',
          content: [
            'Você escolhe um guia prático de receitas low-carb ou organização financeira vendido a R$ 49,90 com 60% de comissão (R$ 26,00 líquidos por venda).',
            'Você cria um perfil temático no Instagram postando 2 Reels curtos de 15 segundos por dia feitos no Canva + CapCut, sem mostrar o rosto.',
            'Quando 1 vídeo bate 8.000 visualizações e gera 6 vendas no dia: 6 × R$ 26,00 = R$ 156,00 em um único dia trabalhando 1 hora pelo celular.'
          ]
        }
      }
    ],
    mistakes: [
      {
        mistake: 'Sair mandando link de afiliado no privado de desconhecidos ou comentando "compre aqui" em posts dos outros.',
        fix: 'Isso é spam e gera bloqueio. Crie conteúdo útil (reviews, comparações, dicas rápidas) que faça a pessoa pedir o link.'
      },
      {
        mistake: 'Escolher produtos caros com página de vendas confusa só porque a comissão é alta.',
        fix: 'Para iniciantes, produtos entre R$ 29 e R$ 147 convertem muito mais rápido no impulso pelo celular.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 5',
      objective: 'Ativar sua conta de afiliado e gerar seus 3 primeiros links rastreáveis.',
      estimatedTime: '20 minutos',
      steps: [
        'Faça seu cadastro gratuito no Programa de Afiliados da Shopee (affiliate.shopee.com.br) ou na Kiwify.',
        'Escolha 3 produtos úteis que você mesmo compraria (ex.: luminária LED, organizador, guia digital).',
        'Salve os 3 links encurtados no bloco de notas com uma descrição de 2 linhas sobre o principal benefício de cada item.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/watch?v=GQEPAJsb0SU'
      },
      {
        label: '🎬 VÍDEO EXTRA',
        url: 'https://www.youtube.com/watch?v=0UiiS7SI1j0'
      }
    ]
  }
];
