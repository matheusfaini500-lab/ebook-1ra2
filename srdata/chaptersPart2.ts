import { EbookChapter } from '../types/ebook';

export const CHAPTERS_PART_2: EbookChapter[] = [
  {
    id: 'cap-6',
    number: 6,
    title: 'Assistente Virtual — o que faz e quanto ganha',
    subtitle: 'A profissão mais estável do home office: ganhe mensalidade fixa cuidando da rotina de pequenos negócios.',
    pageStart: 20,
    pageEnd: 23,
    readingTime: '12 min',
    dailyPotential: 'R$ 90 a R$ 220/dia',
    intro: [
      'Se você quer previsibilidade — saber exatamente quanto vai cair na sua conta todo mês — Assistente Virtual (AV) é o caminho mais seguro.',
      'Um Assistente Virtual não é um "faz-tudo" confuso. É a pessoa que ajuda um médico, advogado, corretor, loja online ou influenciador a organizar tarefas administrativas à distância: responder e-mails, confirmar consultas no WhatsApp, emitir boletos ou notas simples, alimentar planilhas e agendar reuniões.',
      'O melhor de tudo? Você não precisa de faculdade nem certificação cara. Pequenos empresários valorizam confiança, pontualidade e organização muito mais do que diplomas.'
    ],
    sections: [
      {
        heading: 'Quanto ganha um Assistente Virtual no Brasil',
        paragraphs: [
          'Você pode cobrar por hora (de R$ 25 a R$ 60/hora para iniciantes) ou montar pacotes mensais de horas. Pacotes são melhores porque garantem renda recorrente todos os meses.'
        ],
        table: {
          title: 'Tabela 6.1 — Pacotes Mensais de Assistente Virtual',
          headers: ['Tipo de Pacote', 'Carga Horária', 'Valor por Cliente', 'Com 2 Clientes', 'Renda Diária Equiv.'],
          rows: [
            ['Pacote Essencial (Agenda + WhatsApp)', '1h30 por dia (Seg-Sex)', 'R$ 650/mês', 'R$ 1.300/mês', 'R$ 60/dia'],
            ['Pacote Comercial (Atendimento + Orçamentos)', '2h30 por dia (Seg-Sex)', 'R$ 1.100/mês', 'R$ 2.200/mês', 'R$ 100/dia'],
            ['Pacote Completo (Adm + Financeiro + Redes)', '4h por dia (Seg-Sex)', 'R$ 1.800/mês', 'R$ 3.600/mês', 'R$ 163/dia'],
            ['Assistente Bilíngue (Cliente Gringo)', '4h por dia (Seg-Sex)', 'US$ 500 (~R$ 2.750)', 'US$ 900 (~R$ 4.950)', 'R$ 225/dia']
          ]
        }
      },
      {
        heading: 'As 6 tarefas mais pedidas que você aprende em 1 tarde',
        paragraphs: [
          'Mesmo começando do zero, você consegue entregar todas as funções abaixo usando apenas o Google Agenda, Planilhas e WhatsApp Business:'
        ],
        steps: [
          'Confirmação de agenda: mandar mensagem 24h antes lembrando pacientes/clientes de horários marcados (reduz faltas e o dono ama).',
          'Triagem de caixa de entrada: organizar e-mails e responder dúvidas frequentes usando modelos salvos.',
          'Controle de recebimentos: anotar em uma planilha simples quem pagou e mandar lembrete educado para quem esqueceu o boleto/Pix.',
          'Pesquisa de fornecedores e cotações: comparar preços de materiais ou passagens para o cliente.',
          'Postagem programada: subir artes e legendas já aprovadas no Meta Business Suite (ferramenta gratuita do Instagram/Facebook).',
          'Atendimento pós-venda: perguntar 3 dias depois se o produto chegou bem e pedir uma avaliação no Google.'
        ],
        exampleBox: {
          title: 'Como conseguir o 1º cliente sem depender de sorte',
          content: [
            'Abra o Google Maps no seu bairro ou cidade e pesquise "Clínica de estética", "Psicólogo", "Advocacia" ou "Imobiliária".',
            'Anote 10 negócios que têm WhatsApp cadastrado, mas demoram para responder ou têm poucos horários bem organizados.',
            'Use os scripts prontos do Capítulo 15 para se apresentar de forma leve e oferecer um pacote de teste de 7 dias por R$ 150.'
          ]
        }
      }
    ],
    mistakes: [
      {
        mistake: 'Aceitar ficar disponível 24 horas por dia no WhatsApp cobrando pouco.',
        fix: 'Defina horário comercial claro no contrato simples (ex.: atendimento das 9h às 13h, de segunda a sexta).'
      },
      {
        mistake: 'Esquecer de enviar relatório semanal mostrando o que você fez.',
        fix: 'Toda sexta-feira às 17h mande um resumo de 4 linhas: "Esta semana: 64 clientes respondidos, 18 consultas confirmadas, planilha atualizada". Isso garante renovação.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 6',
      objective: 'Montar seu cardápio de serviços de Assistente Virtual em 1 página.',
      estimatedTime: '25 minutos',
      steps: [
        'Escolha 3 tarefas da lista acima que você domina ou aprende hoje.',
        'Abra o Canva (modelo "Apresentação" ou "Currículo simples") e crie uma folha de 1 página com seu nome, foto, 3 serviços que resolve e 2 opções de pacote (R$ 650 e R$ 1.100).',
        'Exporte em PDF para enviar junto com suas abordagens.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=como+ser+assistente+virtual+iniciante+trabalhar+em+casa'
      }
    ]
  },
  {
    id: 'cap-7',
    number: 7,
    title: 'Tradução, revisão e transcrição',
    subtitle: 'Transforme áudios, vídeos e textos em dinheiro mesmo sem ser professor de português ou fluente em outro idioma.',
    pageStart: 24,
    pageEnd: 27,
    readingTime: '10 min',
    dailyPotential: 'R$ 60 a R$ 180/dia',
    intro: [
      'Todos os dias são gravados milhões de minutos de podcasts, aulas online, reuniões, audiências e vídeos para YouTube e TikTok. Criadores de conteúdo e empresas precisam transformar esses áudios em texto (transcrição), corrigir erros gramaticais (revisão) ou adaptar para outro idioma (tradução).',
      'Com a ajuda de ferramentas gratuitas modernas como DeepL, LanguageTool e transcritores automáticos, o seu papel não é digitar tudo do zero na força bruta: é fazer a revisão humana inteligente, garantindo naturalidade, pontuação correta e sentido real.'
    ],
    sections: [
      {
        heading: 'Diferença prática entre os 3 serviços',
        paragraphs: [
          'Você pode oferecer os três em plataformas como VintePila, 99Freelas, GoTranscript e Workana:'
        ],
        table: {
          title: 'Tabela 7.1 — Valores Médios de Transcrição, Revisão e Tradução',
          headers: ['Serviço', 'O que Você Faz', 'Ferramenta Gratuita de Apoio', 'Valor Praticado'],
          rows: [
            ['Transcrição de Áudio/Vídeo', 'Ouvir e corrigir o texto gerado por IA (nomes, vírgulas, falas)', 'Pinpoint (Google) / Whisper', 'R$ 2,50 a R$ 4,50 por min de áudio'],
            ['Revisão de Textos / TCC / Ebooks', 'Corrigir ortografia, concordância e clareza', 'LanguageTool + Google Docs', 'R$ 6 a R$ 12 por página'],
            ['Legendagem de Reels / Shorts', 'Criar e revisar legendas sincronizadas', 'CapCut (Legendas Automáticas)', 'R$ 15 a R$ 35 por vídeo curto'],
            ['Tradução (EN/ES → PT)', 'Adaptar texto automático para português natural do Brasil', 'DeepL + revisão humana', 'R$ 0,08 a R$ 0,18 por palavra']
          ]
        }
      },
      {
        heading: 'Fluxo turbo em 4 passos para transcrever 30 min em 40 min',
        paragraphs: [
          'Se você digitasse ouvindo devagar, levaria 3 horas para transcrever 30 minutos de áudio. Usando o fluxo inteligente abaixo, você faz em 40 minutos e aumenta seu ganho por hora:'
        ],
        steps: [
          'Suba o áudio ou vídeo no Google Pinpoint (journaliststudio.google.com/pinpoint) ou no CapCut para gerar o rascunho automático em segundos.',
          'Exporte o texto bruto para o Google Docs.',
          'Ouça o áudio em velocidade 1.25x ou 1.5x enquanto lê o texto no Docs, corrigindo nomes próprios, pontuação e identificando quem fala ("Entrevistador:", "Convidado:").',
          'Passe a extensão gratuita LanguageTool para caçar qualquer erro de acento ou vírgula antes de entregar ao cliente.'
        ]
      }
    ],
    platforms: [
      {
        name: 'GoTranscript',
        url: 'gotranscript.com',
        role: 'Transcrição de áudios em português e inglês com pagamento semanal',
        earningRange: 'R$ 60 – R$ 145/dia',
        payout: 'PayPal / Payoneer'
      },
      {
        name: 'TranscribeMe',
        url: 'transcribeme.com',
        role: 'Áudios curtos (micro-trechos) fáceis para iniciantes',
        earningRange: 'R$ 65 – R$ 150/dia',
        payout: 'PayPal'
      },
      {
        name: 'VintePila',
        url: 'vintepila.com.br',
        role: 'Pacotes de transcrição, revisão e legendagem de vídeos',
        earningRange: 'R$ 50 – R$ 140/dia',
        payout: 'Pix'
      }
    ],
    mistakes: [
      {
        mistake: 'Entregar texto gerado por tradutor ou IA sem ler linha por linha.',
        fix: 'Robôs erram expressões brasileiras, gírias e nomes. Seu diferencial pago é o ouvido e o olho humano.'
      },
      {
        mistake: 'Não perguntar antes se o cliente quer transcrição "limpa" (sem vícios como "ééé, tipo assim") ou "literal".',
        fix: 'Sempre confirme o formato preferido antes de começar.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 7',
      objective: 'Testar o fluxo de transcrição e revisão em um vídeo real.',
      estimatedTime: '20 minutos',
      steps: [
        'Instale ou abra o CapCut no celular (ou Google Pinpoint no navegador).',
        'Pegue um vídeo curto de 2 minutos e gere a legenda/transcrição automática.',
        'Copie para o Google Docs, ajuste a pontuação, formate com título e guarde no seu Portfólio como amostra de Transcrição/Revisão.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=ganhar+dinheiro+traduzindo+transcrevendo+textos+em+casa'
      }
    ]
  },
  {
    id: 'cap-8',
    number: 8,
    title: 'Vender ebooks e PLR',
    subtitle: 'Crie ou adapte guias digitais de baixo custo (R$ 19 a R$ 47) que vendem no automático pelo celular.',
    pageStart: 28,
    pageEnd: 31,
    readingTime: '11 min',
    dailyPotential: 'R$ 60 a R$ 220/dia',
    intro: [
      'Você está lendo um ebook neste exato momento. Percebeu como um guia bem organizado, direto ao ponto e com preço acessível (como R$ 27,90) resolve um problema real e gera valor imediato?',
      'Você também pode criar e vender pequenos guias digitais em PDF (ou comprar/adaptar materiais PLR — Private Label Rights, onde você tem direito de editar e revender com sua marca). A grande vantagem é que você produz uma única vez e pode vender 10, 50 ou 500 vezes sem custo de estoque.'
    ],
    sections: [
      {
        heading: 'O que vende muito para iniciantes (Micro-nichos de dor urgente)',
        paragraphs: [
          'Não tente escrever uma enciclopédia genérica. Os ebooks que mais vendem rápido entre R$ 19,90 e R$ 37,00 são guias práticos com promessa clara:'
        ],
        table: {
          title: 'Tabela 8.1 — Ideias de Ebooks de Alta Conversão + Simulação de Lucro',
          headers: ['Tema do Guia Digital', 'Preço de Venda', 'Taxa Plataforma (~8%)', 'Vendas/Dia p/ R$ 120', 'Público Comprador'],
          rows: [
            ['30 Marmitas Fit Congeláveis da Semana', 'R$ 24,90', 'R$ 2,90 (Sobram R$ 22)', '6 vendas/dia', 'Pessoas sem tempo na cozinha'],
            ['Guia de Adestramento de Filhotes em Apto', 'R$ 29,90', 'R$ 3,20 (Sobram R$ 26,70)', '5 vendas/dia', 'Donos de pets recentes'],
            ['Planilha + Guia para Sair das Dívidas no Salário Mínimo', 'R$ 27,90', 'R$ 3,00 (Sobram R$ 24,90)', '5 vendas/dia', 'Famílias buscando controle'],
            ['50 Prompts/Modelos Prontos para Pequenos Comércios', 'R$ 37,00', 'R$ 3,90 (Sobram R$ 33,10)', '4 vendas/dia', 'Donos de loja e autônomos']
          ]
        }
      },
      {
        heading: 'Como criar seu ebook do zero grátis usando Canva + Kiwify',
        paragraphs: [
          'Você não precisa contratar designer nem programador:'
        ],
        steps: [
          'Escolha 1 problema específico que você já resolveu na sua vida (ou pesquise a fundo para organizar em passos simples).',
          'Estruture em 7 a 10 capítulos práticos no Google Docs (Introdução, Erro Comum, Passo a Passo, Exemplos, Checklist Final).',
          'Abra o Canva grátis, busque pelo modelo "Ebook" ou "Documento A4", cole seus textos e exporte como "PDF Padrão".',
          'Crie conta grátis na Kiwify ou Hotmart, suba o PDF na aba "Produtos", defina o preço (R$ 19,90 a R$ 29,90) e ative o link de checkout com Pix.'
        ],
        exampleBox: {
          title: 'Cuidado essencial ao usar PLR',
          content: [
            'Se você pegar um material PLR pronto em inglês ou português, NUNCA revenda exatamente igual sem revisar.',
            'Traduza com qualidade, adapte exemplos para a realidade brasileira (valores em Reais, Pix, WhatsApp), troque a capa no Canva e adicione 1 capítulo bônus autoral. Isso transforma um arquivo genérico em um produto único.'
          ]
        }
      }
    ],
    mistakes: [
      {
        mistake: 'Criar ebook de 10 páginas rasas só para vender caro.',
        fix: 'Entregue conteúdo denso e passo a passo de verdade. Cliente satisfeito recomenda e não pede reembolso.'
      },
      {
        mistake: 'Gastar dinheiro com tráfego pago antes de validar a primeira venda no orgânico.',
        fix: 'Valide vendendo seus 10 primeiros exemplares via Reels, TikTok, grupos de interesse ou Pinterest de graça.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 8',
      objective: 'Definir o título e o índice de 7 capítulos do seu futuro guia digital.',
      estimatedTime: '20 minutos',
      steps: [
        'Escolha 1 micro-nicho em que você tenha facilidade ou curiosidade prática.',
        'Escreva um título forte no formato "[Nome] — Guia Prático para [Resultado] em [Prazo]".',
        'Liste os 7 capítulos no seu bloco de notas e crie uma capa de teste no Canva grátis.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=como+vender+ebook+plr+ganhar+dinheiro'
      }
    ]
  },
  {
    id: 'cap-9',
    number: 9,
    title: 'Trabalhar para empresas gringas e ganhar em dólar',
    subtitle: 'Como multiplicar seus ganhos em 5x aproveitando a força do Dólar e do Euro trabalhando do Brasil.',
    pageStart: 32,
    pageEnd: 35,
    readingTime: '13 min',
    dailyPotential: 'R$ 120 a R$ 220+/dia (US$ 22 a US$ 45/dia)',
    image: {
      src: '/src/assets/images/trabalho_remoto_casa_1795594178612.jpg',
      alt: 'Pessoa trabalhando em casa com notebook e celular na mesa durante o dia',
      caption: 'Fig. 9.1 — Mesmo trabalhando da mesa de casa no Brasil, você pode prestar serviços para empresas dos EUA e Europa.'
    },
    intro: [
      'Esta é a virada de chave mais poderosa deste livro. Quando você trabalha para uma empresa no Brasil, ganhar R$ 100 por dia exige entregar bastante valor. Quando você presta o mesmo serviço para os Estados Unidos ou Europa, cobrar US$ 20 ou US$ 35 por dia é considerado barato para eles — mas para você, com o dólar na faixa de R$ 5,50+, isso vira R$ 110 a R$ 192 no mesmo dia!',
      'E você NÃO precisa falar inglês perfeito. Existem centenas de projetos específicos para quem fala Português do Brasil (para treinar inteligências artificiais, testar aplicativos localizados, moderar comentários ou atender clientes brasileiros de marcas internacionais).'
    ],
    sections: [
      {
        heading: 'A tabela da multiplicação em Dólar (US$)',
        paragraphs: [
          'Veja como metas pequenas em dólar se transformam rapidamente em renda alta no Brasil (considerando US$ 1,00 = R$ 5,50 como referência conservadora):'
        ],
        table: {
          title: 'Tabela 9.1 — Conversão Real de Ganhos em Dólar para Reais',
          headers: ['Ganho em Dólar / Dia', 'Equivalente em Reais / Dia', 'Renda Mensal (22 dias)', 'Tipo de Atividade Comum'],
          rows: [
            ['US$ 12/dia', 'R$ 66,00/dia', 'R$ 1.452,00/mês', 'Microtarefas no Clickworker / Toloka (1h30)'],
            ['US$ 20/dia', 'R$ 110,00/dia', 'R$ 2.420,00/mês', '2 testes no UserTesting ou avaliação na Appen'],
            ['US$ 30/dia', 'R$ 165,00/dia', 'R$ 3.630,00/mês', '1 aula de português no Preply + microprojeto Fiverr'],
            ['US$ 40/dia', 'R$ 220,00/dia', 'R$ 4.840,00/mês', 'Atendimento bilíngue / Avaliador IA na Outlier/TELUS']
          ]
        }
      },
      {
        heading: 'As 4 portas abertas para brasileiros hoje (mesmo com inglês básico)',
        paragraphs: [
          'Use estas quatro estratégias com apoio do tradutor DeepL para ler os enunciados com calma:'
        ],
        steps: [
          '1. Avaliação de IA e Buscadores (TELUS, Appen, Welocalize, Outlier): você avalia se respostas em português estão naturais ou se resultados do Google fazem sentido no Brasil. Pagam entre US$ 7 e US$ 18 por hora.',
          '2. Ensinar Português para Gringos (Preply e iTalki): estrangeiros que moram no Brasil ou amam nossa cultura pagam US$ 8 a US$ 16 por hora apenas para conversar em português com um nativo paciente.',
          '3. Serviços visuais no Fiverr: remoção de fundo de fotos de produtos, criação de miniaturas para YouTube, legendagem em português ou design simples no Canva cobrando US$ 10 a US$ 25 por pacote.',
          '4. Testes de Aplicativos (uTest e UserTesting): você baixa um app em teste, segue um roteiro e recebe US$ 10 a US$ 20 por relatório.'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Desistir na primeira tela em inglês sem usar o tradutor do navegador.',
        fix: 'Use o Google Chrome com tradução automática da página e o DeepL para escrever respostas claras e educadas.'
      },
      {
        mistake: 'Criar perfil no Upwork ou Fiverr e deixar sem portfólio nem descrição clara.',
        fix: 'Capriche em 3 imagens de exemplo e escreva exatamente qual problema você resolve em 3 frases diretas.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 9',
      objective: 'Criar sua primeira conta em plataforma internacional.',
      estimatedTime: '25 minutos',
      steps: [
        'Acesse app.crowdgen.com (Appen) ou clickworker.com pelo celular.',
        'Faça seu cadastro selecionando "Portuguese (Brazil)" como idioma nativo.',
        'Preencha suas informações pessoais verdadeiras (mesmo nome do CPF/conta para não travar saque depois).'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=home+office+em+dolar+3+sites+contratando+brasileiros'
      }
    ]
  },
  {
    id: 'cap-10',
    number: 10,
    title: 'Os 50 melhores sites e apps para trabalhar em casa',
    subtitle: 'Diretório oficial verificado, separado por categoria, dispositivo (celular/PC), idioma e meio de pagamento.',
    pageStart: 36,
    pageEnd: 38,
    readingTime: '15 min',
    dailyPotential: 'R$ 50 a R$ 220/dia',
    intro: [
      'Chega de perder horas procurando sites confiáveis no Google e caindo em páginas cheias de vírus ou promessas mentirosas. Reunimos abaixo os 50 melhores sites e aplicativos reais utilizados por trabalhadores remotos no Brasil e no mundo.',
      'Use os filtros interativos abaixo para encontrar exatamente as plataformas que funcionam no seu celular hoje, no seu idioma e que pagam via Pix, PayPal ou Wise.'
    ],
    sections: [
      {
        heading: 'Como usar esta lista com inteligência (Regra dos 3 Pilares)',
        paragraphs: [
          'Não tente se cadastrar nos 50 sites no mesmo dia — você vai cansar e abandonar todos. Escolha apenas 3 plataformas de categorias diferentes para atuar por 21 dias seguidos:'
        ],
        steps: [
          '1 Plataforma de Caixa Rápido no Brasil (ex.: 99Freelas, GetNinjas ou VintePila).',
          '1 Plataforma de Microtarefas/Dólar (ex.: Clickworker, TELUS, Appen ou uTest).',
          '1 Plataforma de Renda Recorrente/Afiliado (ex.: Shopee Afiliados, Hotmart ou Preply).'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Usar e-mails diferentes e nomes abreviados entre o site e a conta bancária.',
        fix: 'PayPal, Wise e plataformas gringas bloqueiam saques se o nome cadastrado não bater 100% com o documento oficial.'
      },
      {
        mistake: 'Se cadastrar em 20 sites, não completar nenhum perfil e dizer que "nenhum funciona".',
        fix: 'Perfil incompleto fica no fim das buscas. Complete 100% de 3 sites antes de ir para o quarto.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 10',
      objective: 'Selecionar seus 3 sites oficiais do método.',
      estimatedTime: '15 minutos',
      steps: [
        'Use o diretório interativo neste capítulo e filtre por "Celular" (se ainda não tem computador).',
        'Escolha 1 site de cada pilar (Brasil, Dólar e Afiliado) e anote no seu caderno.',
        'Faça o cadastro completo nos 3 ainda hoje.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=melhores+sites+apps+trabalhar+em+casa'
      }
    ]
  },
  {
    id: 'cap-11',
    number: 11,
    title: 'Como receber seu pagamento: Pix, PayPal, Wise',
    subtitle: 'Passo a passo para não perder dinheiro em taxas abusivas e sacar dólares direto para sua conta bancária via Pix.',
    pageStart: 39,
    pageEnd: 41,
    readingTime: '9 min',
    dailyPotential: 'Economia de até 8% por saque internacional',
    intro: [
      'Não adianta fazer R$ 150 por dia se na hora de sacar você perde metade em taxas de câmbio ruins ou fica com o dinheiro preso por erro de cadastro.',
      'Neste capítulo, você vai aprender exatamente como configurar as três carteiras principais do trabalhador home office: Pix (clientes no Brasil), PayPal (exigido pela maioria dos sites de microtarefas) e Wise (a melhor opção para receber em dólar/euro e mandar para seu banco no Brasil via Pix em minutos).'
    ],
    sections: [
      {
        heading: 'Comparativo prático: Pix vs. PayPal vs. Wise',
        paragraphs: [
          'Cada plataforma tem uma regra de saque. Entender qual escolher quando há opção faz diferença direta no seu lucro líquido:'
        ],
        table: {
          title: 'Tabela 11.1 — Taxas, Prazos e Melhores Usos',
          headers: ['Meio de Pagamento', 'Ideal Para', 'Custo / Taxa Média', 'Tempo até Cair no Banco'],
          rows: [
            ['Pix Direto / Chaves', 'Clientes diretos, 99Freelas, Hotmart, Kiwify, Shopee', 'Zero (0%) para pessoa física', 'Instantâneo (segundos)'],
            ['PayPal', 'Clickworker, Toloka, UserTesting, GoTranscript', '~4,5% a 5% no câmbio', '1 a 3 dias úteis (saque grátis para banco BR)'],
            ['Wise (Conta Global)', 'Fiverr, Upwork, Preply, clientes gringos diretos', '0,8% a 1,5% (melhor câmbio real)', 'Minutos até poucas horas via Pix'],
            ['Payoneer', 'Appen, OneForma, empresas de IA', 'US$ 1,50 a 2% por saque', '1 a 2 dias úteis']
          ]
        }
      },
      {
        heading: 'Passo a passo para configurar PayPal e Wise de graça pelo celular',
        paragraphs: [
          'Você pode abrir ambas as contas hoje mesmo com seu RG ou CNH e CPF, sem pagar anuidade:'
        ],
        steps: [
          'No PayPal: baixe o app oficial, crie conta pessoal com o mesmo e-mail de trabalho, confirme seu CPF e vincule sua conta corrente ou poupança (Nubank, Inter, Caixa, Itaú, Bradesco — mesma titularidade!).',
          'Na Wise: baixe o app Wise, crie sua conta grátis, ative o saldo em Dólar Americano (USD) para gerar seus próprios dados bancários nos EUA (Routing Number e Account Number) sem precisar morar lá.',
          'Regra do CPF idêntico: nunca tente sacar dinheiro do seu PayPal ou Wise para a conta bancária de um parente ou cônjuge; o sistema devolve e cobra taxa.'
        ]
      }
    ],
    mistakes: [
      {
        mistake: 'Vincular conta bancária de outra pessoa (esposa, marido, mãe) no PayPal.',
        fix: 'Sempre use conta no SEU próprio CPF.'
      },
      {
        mistake: 'Deixar o dinheiro parado em plataformas sem verificar o valor mínimo de saque.',
        fix: 'Confira se o saque mínimo é US$ 5, US$ 10 ou R$ 50 e programe saques semanais ou quinzenais.'
      }
    ],
    task: {
      title: 'Tarefa Prática do Capítulo 11',
      objective: 'Deixar suas carteiras de recebimento prontas antes do primeiro ganho.',
      estimatedTime: '20 minutos',
      steps: [
        'Verifique se você já tem uma chave Pix ativa usando seu CPF ou e-mail profissional.',
        'Crie ou valide sua conta no PayPal (paypal.com/br) vinculando sua conta bancária brasileira.',
        'Baixe o app Wise e conclua a verificação de identidade com seu documento.'
      ]
    },
    videos: [
      {
        label: '🎬 ASSISTA ESSE VÍDEO NA PRÁTICA',
        url: 'https://www.youtube.com/results?search_query=como+receber+pagamento+paypal+wise+pix+freelancer'
      }
    ]
  }
];
