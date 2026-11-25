import { EbookChapter, OutreachScript, RoutineBlock } from '../types/ebook';

export const BONUS_CHECKLIST: { id: string; category: string; text: string }[] = [
  { id: 'chk-1', category: 'Estrutura Zero-Custo', text: 'E-mail profissional exclusivo criado no Gmail' },
  { id: 'chk-2', category: 'Estrutura Zero-Custo', text: 'Foto de perfil clara com boa iluminação e fundo neutro' },
  { id: 'chk-3', category: 'Estrutura Zero-Custo', text: 'Google Docs, Canva e WhatsApp Business instalados no celular' },
  { id: 'chk-4', category: 'Estrutura Zero-Custo', text: 'Pasta de portfólio criada no Google Drive com 2 amostras reais' },
  { id: 'chk-5', category: 'Pagamentos', text: 'Chave Pix profissional testada e ativa' },
  { id: 'chk-6', category: 'Pagamentos', text: 'Conta PayPal criada com o mesmo CPF da conta bancária' },
  { id: 'chk-7', category: 'Pagamentos', text: 'Conta global Wise verificada para receber em Dólar/Euro' },
  { id: 'chk-8', category: 'Ação e Vendas', text: 'Cadastro 100% completo em 1 plataforma Brasil (99Freelas / Workana / GetNinjas)' },
  { id: 'chk-9', category: 'Ação e Vendas', text: 'Cadastro completo em 1 plataforma Dólar/IA (Appen / Clickworker / TELUS)' },
  { id: 'chk-10', category: 'Ação e Vendas', text: 'Conta de Afiliado ativa (Shopee, Amazon ou Kiwify) com 3 links salvos' },
  { id: 'chk-11', category: 'Ação e Vendas', text: 'Primeiras 10 propostas ou abordagens enviadas sem medo' },
  { id: 'chk-12', category: 'Rotina e Proteção', text: 'Bloco diário fixo de 90 a 120 minutos reservado na agenda do celular' }
];

export const DEFAULT_ROUTINE: RoutineBlock[] = [
  {
    time: '08:00 – 08:25',
    activity: 'Prospecção Ativa (5 propostas novas)',
    focus: 'Enviar mensagens no 99Freelas, Workana ou WhatsApp de comércios',
    goal: 'Gerar 1 a 2 conversas de orçamento por dia'
  },
  {
    time: '08:25 – 09:15',
    activity: 'Bloco de Produção / Microtarefas',
    focus: 'Executar serviços fechados ou tarefas no Clickworker / TELUS / Transcrição',
    goal: 'Garantir R$ 40 a R$ 90 em entregas diretas'
  },
  {
    time: '12:30 – 12:50',
    activity: 'Publicação de Afiliado Sem Aparecer',
    focus: 'Postar 1 vídeo curto de achadinho ou oferta no grupo/Reels/Shorts',
    goal: 'Construir tráfego diário para comissões'
  },
  {
    time: '19:00 – 19:45',
    activity: 'Atendimento & Follow-up',
    focus: 'Responder interessados com educação e entregar revisões pendentes',
    goal: 'Fechar pedidos do dia e manter nota 5 estrelas'
  },
  {
    time: '19:45 – 20:00',
    activity: 'Fechamento de Caixa & Agenda',
    focus: 'Anotar quanto ganhou no dia e separar as 3 metas de amanhã',
    goal: 'Manter consistência nos 30 dias'
  }
];

export const OUTREACH_SCRIPTS: OutreachScript[] = [
  {
    id: 'script-1',
    channel: 'Workana / 99Freelas',
    title: 'Proposta Curta de Alta Conversão (Digitação / Suporte)',
    context: 'Use quando o cliente postar vaga de digitação, cadastro de produtos ou atendimento.',
    message: `Olá, [Nome do Cliente]! Li sua solicitação sobre [citar exatamente o que ele pediu, ex: cadastrar 40 produtos / digitar PDFs] e consigo te entregar isso pronto até [prazo, ex: amanhã às 18h].

Trabalho de forma organizada pelo Google Docs e Planilhas, garantindo revisão ortográfica completa antes da entrega.

Aqui está uma amostra rápida do meu trabalho: [Link do seu Google Drive]

Podemos fechar ainda hoje para eu já começar?`
  },
  {
    id: 'script-2',
    channel: 'WhatsApp / Instagram (Negócio Local)',
    title: 'Abordagem Educada para Assistente Virtual / Atendimento',
    context: 'Para enviar para clínicas, salões, lojas de roupa e imobiliárias da sua região.',
    message: `Olá, equipe da [Nome da Loja/Clínica]! Tudo bem?

Acompanho o perfil de vocês e vi que recebem bastante procura pelos serviços. Eu trabalho como Assistente Virtual ajudando pequenos negócios a não perderem clientes no WhatsApp e Direct por falta de resposta rápida.

Posso assumir o atendimento inicial, confirmação de horários e organização de planilhas por algumas horas do dia, direto do meu celular, sem vínculo trabalhista nem encargos.

Toparia testar 3 dias por um valor simbólico de entrada para ver como funciona na prática?`
  },
  {
    id: 'script-3',
    channel: 'WhatsApp / Status / Grupos',
    title: 'Convite para Grupo de Ofertas (Afiliado Shopee / Amazon)',
    context: 'Para encher seu grupo de promoções com amigos, conhecidos e contatos.',
    message: `Pessoal, criei um grupo fechado e silencioso (sem bom dia nem spam!) onde eu garimpo todo dia cupons escondidos e promoções reais da Shopee, Mercado Livre e Amazon com 40% a 70% de desconto.

Só entra coisa útil para casa, cozinha e celular que eu mesmo testei o preço antes. Quem quiser economizar de verdade, o link está aqui: [Link do Grupo]`
  },
  {
    id: 'script-4',
    channel: 'Follow-up (Retorno)',
    title: 'Mensagem de Lembrete Sem Ser Chato (48h depois)',
    context: 'Quando o cliente visualizou seu orçamento e não respondeu em 2 dias.',
    message: `Oi, [Nome]! Passando só para confirmar se você ainda precisa de ajuda com [nome do projeto] esta semana.

Ainda tenho horário livre amanhã para pegar sua demanda e entregar rápido. Se já tiver resolvido, sem problemas! Fico à disposição.`
  },
  {
    id: 'script-5',
    channel: 'Pós-entrega (Fidelização)',
    title: 'Pedido de Avaliação + Indicação Após Entregar Serviço',
    context: 'Envie logo após o cliente aprovar sua entrega para conseguir mais clientes.',
    message: `Que bom que gostou do resultado, [Nome]! Foi ótimo trabalhar com você.

Se puder deixar uma avaliação de 5 estrelas na plataforma (ou me indicar para algum conhecido que precise de digitação/atendimento), ajuda muito meu trabalho. Sempre que precisar de novo, é só chamar por aqui!`
  }
];

export const CHAPTERS_PART_3: EbookChapter[] = [
  {
    id: 'cap-12',
    number: 12,
    title: 'Rotina perfeita de Home Office',
    subtitle: 'Como render em 2 horas focadas o que muita gente leva 8 horas tentando fazer no sofá.',
    pageStart: 42,
    pageEnd: 44,
    readingTime: '9 min',
    dailyPotential: 'Produtividade 3x maior no mesmo tempo livre',
    intro: [
      'O maior inimigo de quem trabalha em casa não é a falta de vagas — é a distração. A televisão ligada, a louça na pia, o grupo da família apitando e o hábito de abrir o Instagram "só por 2 minutos" devoram o seu tempo e fazem parecer que trabalhar de casa não dá dinheiro.',
      'Você não precisa de um escritório luxuoso. Precisa de um ritual simples de 3 regras que avisa ao seu cérebro: "agora é hora de fazer dinheiro".'
    ],
    sections: [
      {
        heading: 'O Método dos Blocos de 50 Minutos (mesmo para quem trabalha fora)',
        paragraphs: [
          'Se você tem um emprego tradicional hoje ou cuida da casa e dos filhos, seu tempo vale ouro. Divida sua dedicação em dois blocos curtos, sem tentar trabalhar o dia inteiro sem pausa:'
        ],
        table: {
          title: 'Tabela 12.1 — Rotina Sugerida por Disponibilidade Diária',
          headers: ['Seu Perfil Atual', 'Tempo Disponível', 'Como Dividir os Blocos', 'Meta Realista de Renda'],
          rows: [
            ['Trabalha fora ou estuda', '1h30 por dia (noite)', '25 min prospecção + 50 min execução + 15 min afiliado', 'R$ 50 a R$ 90/dia (R$ 1.100–R$ 1.980/mês)'],
            ['Meio período livre', '3 horas por dia', '40 min propostas + 1h40 produção + 40 min afiliado/dolar', 'R$ 90 a R$ 160/dia (R$ 1.980–R$ 3.520/mês)'],
            ['Dedicação integral em casa', '5 a 6 horas por dia', '1h prospecção + 3h clientes fixos + 1h30 dólar/ebooks', 'R$ 150 a R$ 220+/dia (R$ 3.300–R$ 4.840+/mês)']
          ]
        }
      },
      {
        heading: '5 Regras de Ouro do Ambiente Produtivo',
        paragraphs: [
          'Pequenos ajustes no seu dia multiplicam sua velocidade no celular:'
        ],
        steps: [
          'Nunca trabalhe deitado na cama: sente-se à mesa da cozinha ou em uma cadeira firme com as costas apoiadas.',
          'Ative o modo "Não Perturbe" durante o bloco de 50 minutos, liberando notificações apenas do app de trabalho.',
          'Deixe uma garrafa de água do seu lado para não levantar toda hora.',
          'Separe o WhatsApp Business (clientes) do WhatsApp pessoal (família e memes).',
          'Respeite seu horário de encerrar: desligue as abas de trabalho e descanse sem culpa.'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Começar o dia rolando o feed de redes sociais antes de enviar suas propostas.',
        fix: 'Regra "Primeiro eu ganho, depois eu navego": mande 5 propostas ou faça 30 min de tarefa ANTES de ver vídeos.'
      },
      {
        mistake: 'Tentar trabalhar sem horário fixo ("quando der tempo eu faço").',
        fix: 'O que não tem horário marcado na agenda nunca acontece. Coloque um alarme diário no celular.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 12',
      objective: 'Definir seu alarme diário de trabalho remoto.',
      estimatedTime: '10 minutos',
      steps: [
        'Escolha exatamente qual faixa de horário será seu "turno sagrado" de home office nos próximos 30 dias.',
        'Crie 2 alarmes no despertador do celular: "Início Home Office" e "Fim do Turno".',
        'Combine com as pessoas da sua casa que naqueles 60 a 90 minutos você estará em horário de trabalho.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=rotina+perfeita+home+office+produtividade'
      }
    ]
  },
  {
    id: 'cap-13',
    number: 13,
    title: 'Os 7 golpes de home office que você deve fugir',
    subtitle: 'Aprenda a identificar armadilhas em 10 segundos para proteger seu dinheiro, seu CPF e sua conta bancária.',
    pageStart: 45,
    pageEnd: 47,
    readingTime: '10 min',
    dailyPotential: 'Proteção total contra prejuízos',
    intro: [
      'Onde existem milhões de pessoas buscando renda extra rápida, infelizmente existem golpistas tentando se aproveitar da urgência e da inocência de quem está começando.',
      'Conhecer os 7 golpes mais comuns do Brasil hoje vai blindar você para sempre. Se qualquer oferta bater com um dos cenários abaixo, bloqueie o contato na mesma hora.'
    ],
    sections: [
      {
        heading: 'Lista Vermelha: Os 7 Golpes Mais Comuns na Internet',
        paragraphs: [
          'Memorize cada um destes padrões para nunca cair:'
        ],
        table: {
          title: 'Tabela 13.1 — Raio-X dos 7 Golpes de Trabalho em Casa',
          headers: ['Nome do Golpe', 'Como o Golpista Atrai Você', 'O Sinal de Alerta Fatal'],
          rows: [
            ['1. Taxa de Liberação / Crachá', 'Diz que você foi aprovado para vaga ótima de R$ 3.000/mês.', 'Pede Pix de R$ 35 a R$ 150 para "exame médico, uniforme ou seguro".'],
            ['2. Golpe da Tarefa Pré-Paga (VIP)', 'No Telegram/WhatsApp, paga R$ 10 para curtir vídeos e ganhar confiança.', 'Depois exige depósito de R$ 200+ para "desbloquear tarefa VIP de R$ 800".'],
            ['3. Embalar Produtos em Casa', 'Promete pagar R$ 2.500/mês para embalar canetas, meias ou brindes.', 'Cobra frete ou kit inicial antes de enviar qualquer caixa.'],
            ['4. App que Paga R$ 300/dia Assistindo Vídeo', 'Anúncio prometendo fortuna fácil só dando play ou avaliando roupas.', 'Exige pagar "taxa de saque" ou "chave de verificação" via Pix.'],
            ['5. Aluguel de Conta / Laranja', 'Oferece R$ 500 por semana só para usar seu Pix, Mercado Pago ou Wi-Fi.', 'Crime grave! Usam seu CPF para aplicar golpes e você responde na Justiça.'],
            ['6. Print Falso de Comprovante', 'Cliente supostamente fecha serviço e manda imagem de transferência agendada.', 'Pressiona você a entregar ou devolver "troco" antes do dinheiro cair na conta.'],
            ['7. Curso Disfarçado de Vaga de Emprego', 'Publica vaga CLT falsa; ao clicar, o atendente obriga a comprar certificado.', 'Condiciona a contratação à compra de curso no mesmo minuto.']
          ]
        }
      },
      {
        heading: 'Regra de Ouro Anti-Golpe',
        paragraphs: [
          'Trabalho honesto tem fluxo de dinheiro em uma única direção: da empresa ou cliente PARA o seu bolso. Jamais do seu bolso para quem diz estar te contratando.',
          'Além disso, desconfie sempre de ganhos astronômicos sem esforço (ex.: "R$ 500 por dia só curtindo fotos"). Renda real para iniciantes fica entre R$ 50 e R$ 220 por dia mediante entrega de trabalho verdadeiro.'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Enviar foto do RG/CNH frente e verso + selfie segurando documento para desconhecidos no WhatsApp.',
        fix: 'Só envie documentos dentro de plataformas oficiais grandes (Wise, PayPal, Hotmart, Workana) acessadas pelo site oficial.'
      },
      {
        mistake: 'Sair do ambiente seguro da plataforma (99Freelas/Workana) logo no primeiro contato porque o cliente pediu.',
        fix: 'Nos primeiros serviços com desconhecidos, mantenha o pagamento garantido dentro da plataforma.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 13',
      objective: 'Blindar sua segurança digital antes de começar as abordagens.',
      estimatedTime: '10 minutos',
      steps: [
        'Ative a verificação em duas etapas no seu WhatsApp, Gmail e Instagram.',
        'Confira se os sites que você salvou no Capítulo 10 têm o cadeado "https://" e o domínio oficial exato.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=golpes+home+office+como+evitar'
      }
    ]
  },
  {
    id: 'cap-14',
    number: 14,
    title: 'Plano de 30 dias para seu primeiro pagamento',
    subtitle: 'Seu mapa diário passo a passo da Semana 1 à Semana 4 para sair do zero absoluto até o dinheiro na conta.',
    pageStart: 48,
    pageEnd: 50,
    readingTime: '11 min',
    dailyPotential: 'Meta do Plano: R$ 800 a R$ 2.500 no 1º mês',
    intro: [
      'Conhecimento sem plano vira apenas leitura boa. A partir de hoje, você não precisa mais se perguntar "o que eu faço agora?".',
      'Siga exatamente as 4 semanas abaixo, dedicando de 90 minutos a 2 horas por dia. Se você cumprir pelo menos 80% deste cronograma, é praticamente inevitável destravar seus primeiros clientes, comissões ou saques em dólar antes do dia 30.'
    ],
    sections: [
      {
        heading: 'Cronograma Completo de 30 Dias',
        paragraphs: [
          'Cada semana tem um foco único para você não se perder:'
        ],
        table: {
          title: 'Tabela 14.1 — Roteiro Semana a Semana até o Primeiro Pagamento',
          headers: ['Semana', 'Foco Principal', 'Ações Diárias Obrigatórias', 'Meta Esperada'],
          rows: [
            ['Semana 1 (Dias 1–7)', 'Base + Primeiras Propostas', 'Criar e-mail, portfólio no Drive, contas Pix/PayPal/Wise e cadastro em 3 sites. Enviar 5 propostas/dia.', 'Perfil 100% ativo + primeiras respostas de clientes'],
            ['Semana 2 (Dias 8–14)', 'Caixa Rápido + Volume', 'Subir para 8 propostas/dia no 99Freelas/Workana/GetNinjas + 45 min/dia em microtarefas + 1º post afiliado.', 'Primeiros R$ 50 a R$ 250 faturados e avaliados'],
            ['Semana 3 (Dias 15–21)', 'Construção de Clientes Fixos', 'Abordar 5 negócios locais/dia no WhatsApp para Assistente Virtual + manter microtarefas e vídeos curtos.', 'Fechar 1º cliente recorrente ou atingir R$ 100/dia'],
            ['Semana 4 (Dias 22–30)', 'Escala e Repetição', 'Pedir indicações aos primeiros clientes, aumentar ticket das propostas e testar vagas em dólar (Preply/TELUS).', 'Consolidar R$ 800 a R$ 2.500+ acumulados e sacar']
          ]
        }
      },
      {
        heading: 'O que fazer se chegar ao Dia 10 sem nenhum cliente fechado?',
        paragraphs: [
          'Não desista — ajuste a mira! Na maioria das vezes, quando ninguém responde até o dia 10, o erro está em apenas um destes 3 pontos:'
        ],
        steps: [
          'Sua proposta está longa e genérica ("Olá, sou esforçado e preciso trabalhar"). Troque pelos scripts diretos do Capítulo 15 focando no problema do cliente.',
          'Seu preço inicial está alto demais para quem ainda tem 0 avaliações. Faça os 2 primeiros projetos por R$ 40–R$ 60 só para conquistar suas primeiras notas 5 estrelas.',
          'Você enviou poucas propostas. No início, a média é fechar 1 serviço a cada 12 a 15 propostas enviadas. Volume gera resultado.'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Pular direto para a Semana 4 tentando escalar sem ter feito a base da Semana 1.',
        fix: 'Respeite a ordem: Estrutura → Caixa Rápido → Cliente Fixo → Dólar/Escala.'
      },
      {
        mistake: 'Desanimar com os primeiros "nãos" ou silêncio de clientes.',
        fix: 'No mercado freelance, levar 10 "nãos" para ouvir 1 "sim" é completamente normal. Continue enviando todos os dias.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 14',
      objective: 'Iniciar o Dia 1 do seu Plano de 30 Dias hoje.',
      estimatedTime: '15 minutos',
      steps: [
        'Anote a data de hoje como "Dia 1" e a data daqui a 30 dias como "Dia 30 - Balanço do 1º Mês".',
        'Execute hoje todas as ações da Semana 1 listadas na tabela acima.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=plano+30+dias+primeiro+pagamento+trabalhando+em+casa'
      }
    ]
  },
  {
    id: 'cap-15',
    number: 15,
    title: 'Bônus: Checklist + Planilha de rotina + Frases para abordar clientes',
    subtitle: 'Suas ferramentas práticas interativas para copiar, preencher e começar a faturar ainda hoje.',
    pageStart: 51,
    pageEnd: 53,
    readingTime: '12 min',
    dailyPotential: 'Pronto para copiar e colar em 1 clique',
    intro: [
      'Este capítulo vale sozinho muito mais do que os R$ 27,90 que você investiu neste guia. Em vez de deixar você na dúvida sobre o que escrever para um cliente ou como organizar seus horários, entregamos tudo mastigado abaixo.',
      'Use o Checklist Interativo para marcar sua evolução (seu progresso fica salvo automaticamente no navegador), calcule sua meta financeira mensal na Planilha de Rotina e copie as 5 Frases Prontas para abordar clientes com postura profissional.'
    ],
    sections: [
      {
        heading: 'Como adaptar as frases prontas sem parecer um robô',
        paragraphs: [
          'Copiar e colar exatamente igual funciona bem, mas personalizar apenas duas informações — o nome da pessoa/empresa e um detalhe real que você observou — dobra sua taxa de resposta no mesmo dia.',
          'Antes de enviar qualquer mensagem no WhatsApp ou plataforma, troque tudo o que estiver entre colchetes [assim] pelos dados reais do cliente.'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Mandar mensagem esquecendo de trocar "[Nome do Cliente]" no texto.',
        fix: 'Leia a mensagem inteira uma vez antes de apertar Enviar.'
      },
      {
        mistake: 'Mandar textão de 30 linhas na primeira abordagem.',
        fix: 'Mensagens de 4 a 7 linhas cabem inteiras na tela do celular do cliente e são lidas na hora.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 15',
      objective: 'Completar seu checklist e enviar 3 mensagens usando os scripts bônus.',
      estimatedTime: '20 minutos',
      steps: [
        'Marque todos os itens do Checklist Bônus que você já concluiu.',
        'Preencha sua meta diária na Planilha de Rotina abaixo para visualizar seu ganho mensal.',
        'Copie um dos scripts prontos e envie para 3 oportunidades reais hoje.'
      ]
    }
  },
  {
    id: 'cap-16',
    number: 16,
    title: 'Conclusão + Chamada para ação para começar hoje',
    subtitle: 'A diferença entre quem só lê ebooks e quem vê o Pix cair na conta nos próximos dias.',
    pageStart: 54,
    pageEnd: 55,
    readingTime: '6 min',
    dailyPotential: 'Sua nova fase começa nos próximos 10 minutos',
    intro: [
      'Parabéns por chegar até o último capítulo do Casa Que Rendi! Só o fato de você ter lido até aqui já coloca você à frente de 90% das pessoas que compram um material, abrem a primeira página e nunca terminam.',
      'Mas existe uma verdade simples que precisa ser dita com carinho e firmeza: leitura não paga boleto. Execução paga. Você agora tem o mapa completo — dos 50 sites reais aos scripts prontos, das regras contra golpes ao plano exato de 30 dias.'
    ],
    sections: [
      {
        heading: 'Seu Compromisso de 10 Minutos Agora',
        paragraphs: [
          'Não feche este guia dizendo "segunda-feira eu começo". Segunda-feira é o dia favorito da procrastinação. A sua casa só começa a render no minuto em que você realiza a primeira ação concreta no mundo real.',
          'Escolha UMA única ação pequena para fazer nos próximos 10 minutos antes de largar o celular: criar seu e-mail profissional, concluir o cadastro no 99Freelas ou enviar a primeira proposta usando o Script 1 do Capítulo 15.'
        ],
        steps: [
          'Passo Final 1: Volte para a Tarefa do Capítulo que mais chamou sua atenção (Digitação, Afiliado, Assistente Virtual, Transcrição ou Dólar).',
          'Passo Final 2: Faça hoje a sua primeira ação de 15 minutos, mesmo que não esteja perfeita.',
          'Passo Final 3: Repita pelos próximos 30 dias seguindo o Plano do Capítulo 14. Nos vemos no seu primeiro pagamento!'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Guardar este guia na pasta de downloads e voltar para a rotina antiga sem testar nada.',
        fix: 'Comece imperfeito hoje. O primeiro R$ 50 ganho de casa muda sua confiança para sempre.'
      }
    ],
    task: {
      title: 'Desafio Final — Ação Imediata Hoje',
      objective: 'Dar o primeiro passo oficial rumo aos seus primeiros R$ 50 a R$ 220/dia.',
      estimatedTime: '10 minutos agora',
      steps: [
        'Escolha sua rota principal nº 1 (Cap. 4, 5, 6, 7, 8 ou 9).',
        'Abra 1 plataforma do Capítulo 10 agora mesmo no navegador do celular.',
        'Faça seu cadastro e envie sua primeira proposta ou gere seu primeiro link de afiliado hoje!'
      ]
    }
  }
];
