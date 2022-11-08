const questions = {
  q1: {
    id: '1',
    question: 'Qual seu nome ou apelido?',
    adicional:
      'Conta pra nós como você gosta de ser chamada, sua resposta vai aparecer no seu produto personalizado! ',
    typeQuestion: 'line',
    direcionamento: 'q2',
    pattern: /^.{3,}$/,
  },
  q2: {
    id: '2',
    question: 'Qual seu email',
    typeQuestion: 'line',
    direcionamento: 'q3',
    pattern: /^[a-z0-9._]+@[a-z0-9._]+\.[a-z]+(\.[a-z]+)?$/,
  },
  q3: {
    id: '3',
    question: 'Você é: ',
    typeQuestion: 'multiple',
    options: ['Mulher', 'Homem', 'Prefiro não declarar'],
    direcionamento: {Mulher: 'q3.1', Homem: 'q4', 'Prefiro não declarar': 'q4'},
  },
  'q3.1': {
    id: '3.1',
    question: 'Você é gestante ou lactante?',
    typeQuestion: 'multiple',
    options: ['Sim', 'Não'],
    direcionamento: {Sim: 'produto', Não: 'q4'},
    produto: {Sim: '8'},
  },
  q4: {
    id: '4',
    question: 'Qual sua faixa etária?',
    typeQuestion: 'multiple',
    options: [
      'a) Menor de 18 anos.',
      'b) Entre 18 e 29 anos.',
      'c) Entre 30 e 39 anos.',
      'd) Entre 40 e 49 anos.',
      'e) 50 anos ou mais.',
    ],
    direcionamento: {
      'a) Menor de 18 anos.': 'q5',
      'b) Entre 18 e 29 anos.': 'q5',
      'c) Entre 30 e 39 anos.': 'q19',
      'd) Entre 40 e 49 anos.': 'q42',
      'e) 50 anos ou mais.': 'q42',
    },
  },
  q5: {
    id: '5',
    question:
      'Assim como tudo, a pele também muda. Então nos conte, como você classificaria sua pele hoje?',
    typeQuestion: 'multiple',
    options: [
      'a) Pele seca. ',
      'b) Pele oleosa.',
      'c) Pele mista.',
      'd) Pele normal.',
    ],
    direcionamento: {
      'a) Pele seca. ': 'q20',
      'b) Pele oleosa.': 'q6',
      'c) Pele mista.': 'q6',
      'd) Pele normal.': 'q6',
    },
  },
  q6: {
    id: '6',
    question: 'Sobre acne, nos conte:',
    typeQuestion: 'multiple',
    options: [
      'Tenho acne toda semana.',
      'Tenho acne cerca de uma a duas vezes por mês',
      'Raramente ou nunca tenho acne.',
    ],
    direcionamento: {
      'Tenho acne toda semana.': 'q7',
      'Tenho acne cerca de uma a duas vezes por mês': 'q7',
      'Raramente ou nunca tenho acne.': 'q21',
    },
  },
  q7: {
    id: '7',
    question: 'Caracteristicas abaixo',
    typeQuestion: 'multiple',
    options: [
      'a) Rosácea ',
      'b) Melasma',
      'c) Nenhuma das caracteristicas acima. ',
    ],
    direcionamento: {
      'a) Rosácea ': 'q31b',
      'b) Melasma': 'q69',
      'c) Nenhuma das caracteristicas acima. ': 'q8',
    },
  },
  q8: {
    id: '8',
    question: 'Qual seu tom de pele? ',
    typeQuestion: 'multiple',
    options: [
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.',
    ],
    direcionamento: {
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ':
        'q9',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.':
        'q9',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.':
        'q9',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.':
        'q9',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ':
        'q9',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.':
        'q9',
    },
  },
  q9: {
    id: '9',
    question:
      'Seus hábitos e como você vem se sentindo influencia muito sua pele. Com quais dos hábitos abaixo você se identifica?',
    adicional: 'Marque quantas opções precisar, sem julgamentos :)',
    typeQuestion: 'checkbox',
    options: [
      'Não durmo suficiente. ',
      'Sou fumante ou fumo de vez em quando. ',
      'Não tenho uma alimentação saudável. ',
      'Acabo enfrentando muito estresse no meu dia a dia. ',
      'Minha vida é estressante, mas sob controle. ',
      'Bebo pouca água.',
    ],
    direcionamento: 'q10',
  },
  q10: {
    id: '10',
    question:
      'Depois de entender um pouco mais sobre você, queremos saber quais são seus objetivos. Se você pudesse realizar três desejos em relação a sua pele, quais seriam?',
    adicional:
      'Nós sabemos que é difícil escolher só três, mas temos que começar por algum lugar: ',
    typeQuestion: 'checkbox',
    qtdSelect: 3,
    options: [
      'a) Reduzir a aparição de acne.',
      'b) Uniformizar o tom de pele.',
      'c) Reduzir rugas e/ou linhas de expressão.',
      'd) Aumentar a hidratação.',
      'e) Reduzir a oleosidade.',
      'f) Reduzir manchas e vermelhidão.',
      'g) Ter uma pele mais firme.',
      'h) Estou feliz com a minha pele do jeito que está, quero apenas manter.',
    ],
    direcionamento: 'q11',
  },

  q11: {
    id: '11',
    question:
      'Não utilizamos fragrâncias sintéticas! O cheiro vem dos óleos essenciais, que também trazem benefícios para a pele. No seu ritual, os óleos essenciais indicados são capim limão e menta – leve aroma cítrico, herbal, com toque mentolado e refrescante, com uma sensação de motivação e bem-estar, revigorante.',
    adicional:
      'Sabendo que o óleo essencial de lavanda, por ter muitos benefícios, pode ser indicado para diversos tipos de pele; e que peles sensíveis e com tendência a alergias devem evitar óleos essenciais, então nos diga:',
    typeQuestion: 'multiple',
    options: [
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ',
    ],
    direcionamento: {
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ':
        'q12',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ':
        'q12',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ': 'q12',
    },
  },
  q12: {
    id: '12',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q13',
  },
  q13: {
    id: '13',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '1.1', Discordo: '1.1'},
  },

  q14: {
    id: '14',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q15',
  },
  q15: {
    id: '15',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '1.2', Discordo: '1.2'},
  },

  q16: {
    id: '16',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q17',
  },
  q17: {
    id: '17',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '1.3', Discordo: '1.3'},
  },

  q19: {
    id: '19',
    question:
      'Assim como tudo, a pele também muda. Então nos conte, como você classificaria sua pele hoje?',
    typeQuestion: 'multiple',
    options: [
      'a) Pele seca. ',
      'b) Pele oleosa.',
      'c) Pele mista.',
      'd) Pele normal.',
    ],
    direcionamento: {
      'a) Pele seca. ': 'q43',
      'b) Pele oleosa.': 'q20',
      'c) Pele mista.': 'q20',
      'd) Pele normal.': 'q20',
    },
  },
  q20: {
    id: '20',
    question: 'Sobre acne, nos conte:',
    typeQuestion: 'multiple',
    options: [
      'Tenho acne toda semana.',
      'Tenho acne cerca de uma a duas vezes por mês',
      'Raramente ou nunca tenho acne.',
    ],
    direcionamento: {
      'Tenho acne toda semana.': 'q21',
      'Tenho acne cerca de uma a duas vezes por mês': 'q21',
      'Raramente ou nunca tenho acne.': 'q21',
    },
  },
  q21: {
    id: '21',
    question: 'Caracteristicas abaixo',
    typeQuestion: 'multiple',
    options: [
      'a) Rosácea ',
      'b) Melasma',
      'c) Nenhuma das caracteristicas acima. ',
    ],
    direcionamento: {
      'a) Rosácea ': 'q31',
      'b) Melasma': 'q69',
      'c) Nenhuma das caracteristicas acima. ': 'q22',
    },
  },
  q22: {
    id: '22',
    question:
      'Agora nos conte quanto a presença de rugas, linhas de expressão e firmeza da sua pele.',
    adicional:
      'Sabendo que linhas de expressão são aquelas rugas que aparecem só com o movimento do rosto e as rugas são marcas que não dependem do movimento do rosto, são visíveis mesmo com a face em repouso. Escolha quantas alternativas quiser: ',
    typeQuestion: 'checkbox',
    options: [
      'Tenho algumas linhas de expressão.',
      'Tenho rugas.',
      'Minha pele me parece tão firme quanto sempre foi.',
      'Minha pele já não está tão firme quanto costumava ser.',
      'Minha pele não me parece nada firme.',
    ],
    direcionamento: 'q23',
  },
  q23: {
    id: '23',
    question: 'Qual seu tom de pele? ',
    typeQuestion: 'multiple',
    options: [
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.',
    ],
    direcionamento: {
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ':
        'q24',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.':
        'q24',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.':
        'q24',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.':
        'q24',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ':
        'q24',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.':
        'q24',
    },
  },
  q24: {
    id: '24',
    question:
      'Seus hábitos e como você vem se sentindo influencia muito sua pele. Com quais dos hábitos abaixo você se identifica?',
    adicional: 'Marque quantas opções precisar, sem julgamentos :)',
    typeQuestion: 'checkbox',
    options: [
      'Não durmo suficiente. ',
      'Sou fumante ou fumo de vez em quando. ',
      'Não tenho uma alimentação saudável. ',
      'Acabo enfrentando muito estresse no meu dia a dia. ',
      'Minha vida é estressante, mas sob controle. ',
      'Bebo pouca água.',
    ],
    direcionamento: 'q25',
  },
  q25: {
    id: '25',
    question:
      'Depois de entender um pouco mais sobre você, queremos saber quais são seus objetivos. Se você pudesse realizar três desejos em relação a sua pele, quais seriam?',
    adicional:
      'Nós sabemos que é difícil escolher só três, mas temos que começar por algum lugar: ',
    typeQuestion: 'checkbox',
    qtdSelect: 3,
    options: [
      'a) Reduzir a aparição de acne.',
      'b) Uniformizar o tom de pele.',
      'c) Reduzir rugas e/ou linhas de expressão.',
      'd) Aumentar a hidratação.',
      'e) Reduzir a oleosidade.',
      'f) Reduzir manchas e vermelhidão.',
      'g) Ter uma pele mais firme.',
      'h) Estou feliz com a minha pele do jeito que está, quero apenas manter.',
    ],
    direcionamento: 'q26',
  },

  q26: {
    id: '26',
    question:
      'Não utilizamos fragrâncias sintéticas! O cheiro vem dos óleos essenciais, que também trazem benefícios para a pele. No seu ritual, os óleos essenciais indicados são capim limão e menta – leve aroma cítrico, herbal, com toque mentolado e refrescante, com uma sensação de motivação e bem-estar, revigorante.',
    adicional:
      'Sabendo que o óleo essencial de lavanda, por ter muitos benefícios, pode ser indicado para diversos tipos de pele; e que peles sensíveis e com tendência a alergias devem evitar óleos essenciais, então nos diga:',
    typeQuestion: 'multiple',
    options: [
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ',
    ],
    direcionamento: {
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ':
        'q27',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ':
        'q29',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ': 'q31',
    },
  },
  q27: {
    id: '27',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q28',
  },
  q28: {
    id: '28',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '2.1', Discordo: '2.1'},
  },

  q29: {
    id: '29',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q30',
  },
  q30: {
    id: '30',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '2.2', Discordo: '2.2'},
  },

  q31: {
    id: 'q31',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q32b',
  },
  q32b: {
    id: '32',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '2.3', Discordo: '2.3'},
  },

  q31b: {
    id: 'q31b',
    question:
      'Agora nos conte quanto a presença de rugas, linhas de expressão e firmeza da sua pele.',
    adicional:
      'Sabendo que linhas de expressão são aquelas rugas que aparecem só com o movimento do rosto e as rugas são marcas que não dependem do movimento do rosto, são visíveis mesmo com a face em repouso. Escolha quantas alternativas quiser: ',
    typeQuestion: 'checkbox',
    options: [
      'Tenho algumas linhas de expressão.',
      'Tenho rugas.',
      'Minha pele me parece tão firme quanto sempre foi.',
      'Minha pele já não está tão firme quanto costumava ser.',
      'Minha pele não me parece nada firme.',
    ],
    direcionamento: 'q32',
  },
  q32: {
    id: '32',
    question: 'Qual seu tom de pele? ',
    typeQuestion: 'multiple',
    options: [
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.',
    ],
    direcionamento: {
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ':
        'q33',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.':
        'q33',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.':
        'q33',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.':
        'q33',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ':
        'q33',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.':
        'q33',
    },
  },
  q33: {
    id: '33',
    question:
      'Seus hábitos e como você vem se sentindo influencia muito sua pele. Com quais dos hábitos abaixo você se identifica?',
    adicional: 'Marque quantas opções precisar, sem julgamentos :)',
    typeQuestion: 'checkbox',
    options: [
      'Não durmo suficiente. ',
      'Sou fumante ou fumo de vez em quando. ',
      'Não tenho uma alimentação saudável. ',
      'Acabo enfrentando muito estresse no meu dia a dia. ',
      'Minha vida é estressante, mas sob controle. ',
      'Bebo pouca água.',
    ],
    direcionamento: 'q34',
  },
  q34: {
    id: '34',
    question:
      'Depois de entender um pouco mais sobre você, queremos saber quais são seus objetivos. Se você pudesse realizar três desejos em relação a sua pele, quais seriam?',
    adicional:
      'Nós sabemos que é difícil escolher só três, mas temos que começar por algum lugar: ',
    typeQuestion: 'checkbox',
    qtdSelect: 3,
    options: [
      'a) Reduzir a aparição de acne.',
      'b) Uniformizar o tom de pele.',
      'c) Reduzir rugas e/ou linhas de expressão.',
      'd) Aumentar a hidratação.',
      'e) Reduzir a oleosidade.',
      'f) Reduzir manchas e vermelhidão.',
      'g) Ter uma pele mais firme.',
      'h) Estou feliz com a minha pele do jeito que está, quero apenas manter.',
    ],
    direcionamento: 'q35',
  },

  q35: {
    id: '35',
    question:
      'Não utilizamos fragrâncias sintéticas! O cheiro vem dos óleos essenciais, que também trazem benefícios para a pele. No seu ritual, os óleos essenciais indicados são capim limão e menta – leve aroma cítrico, herbal, com toque mentolado e refrescante, com uma sensação de motivação e bem-estar, revigorante.',
    adicional:
      'Sabendo que o óleo essencial de lavanda, por ter muitos benefícios, pode ser indicado para diversos tipos de pele; e que peles sensíveis e com tendência a alergias devem evitar óleos essenciais, então nos diga:',
    typeQuestion: 'multiple',
    options: [
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ',
    ],
    direcionamento: {
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ':
        'q36',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ':
        'q38',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ': 'q40',
    },
  },
  q36: {
    id: '36',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q37',
  },
  q37: {
    id: '37',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '3.1', Discordo: '3.1'},
  },

  q38: {
    id: '38',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q39',
  },
  q39: {
    id: '39',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '3.2', Discordo: '3.2'},
  },

  q40: {
    id: '40',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q41',
  },
  q41: {
    id: '41',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '3.3', Discordo: '3.3'},
  },

  q42: {
    id: '42',
    question:
      'Assim como tudo, a pele também muda. Então nos conte, como você classificaria sua pele hoje?',
    typeQuestion: 'multiple',
    options: [
      'a) Pele seca. ',
      'b) Pele oleosa.',
      'c) Pele mista.',
      'd) Pele normal.',
    ],
    direcionamento: {
      'a) Pele seca. ': 'q43',
      'b) Pele oleosa.': 'q43',
      'c) Pele mista.': 'q43',
      'd) Pele normal.': 'q43',
    },
  },
  q43: {
    id: '43',
    question: 'Sobre acne, nos conte:',
    typeQuestion: 'multiple',
    options: [
      'Tenho acne toda semana.',
      'Tenho acne cerca de uma a duas vezes por mês',
      'Raramente ou nunca tenho acne.',
    ],
    direcionamento: {
      'Tenho acne toda semana.': 'q21',
      'Tenho acne cerca de uma a duas vezes por mês': 'q21',
      'Raramente ou nunca tenho acne.': 'q44',
    },
  },
  q44: {
    id: '44',
    question: 'Caracteristicas abaixo',
    typeQuestion: 'multiple',
    options: [
      'a) Rosácea ',
      'b) Melasma',
      'c) Nenhuma das caracteristicas acima. ',
    ],
    direcionamento: {
      'a) Rosácea ': 'q57',
      'b) Melasma': 'q69',
      'c) Nenhuma das caracteristicas acima. ': 'q45',
    },
  },

  q45: {
    id: '45',
    question:
      'Agora nos conte quanto a presença de rugas, linhas de expressão e firmeza da sua pele.',
    adicional:
      'Sabendo que linhas de expressão são aquelas rugas que aparecem só com o movimento do rosto e as rugas são marcas que não dependem do movimento do rosto, são visíveis mesmo com a face em repouso. Escolha quantas alternativas quiser: ',
    typeQuestion: 'checkbox',
    options: [
      'Tenho algumas linhas de expressão.',
      'Tenho rugas.',
      'Minha pele me parece tão firme quanto sempre foi.',
      'Minha pele já não está tão firme quanto costumava ser.',
      'Minha pele não me parece nada firme.',
    ],
    direcionamento: 'q46',
  },

  q46: {
    id: '46',
    question:
      'Você fez aplicação de toxina botulínica (Botox) nos últimos 6 meses?',
    typeQuestion: 'multiple',
    options: ['Sim', 'Não'],
    direcionamento: {Sim: 'q47', Não: 'q47'},
  },

  q47: {
    id: '47',
    question: 'Qual seu tom de pele? ',
    typeQuestion: 'multiple',
    options: [
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.',
    ],
    direcionamento: {
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ':
        'q48',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.':
        'q48',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.':
        'q48',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.':
        'q48',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ':
        'q48',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.':
        'q48',
    },
  },
  q48: {
    id: '48',
    question:
      'Seus hábitos e como você vem se sentindo influencia muito sua pele. Com quais dos hábitos abaixo você se identifica?',
    adicional: 'Marque quantas opções precisar, sem julgamentos :)',
    typeQuestion: 'checkbox',
    options: [
      'Não durmo suficiente. ',
      'Sou fumante ou fumo de vez em quando. ',
      'Não tenho uma alimentação saudável. ',
      'Acabo enfrentando muito estresse no meu dia a dia. ',
      'Minha vida é estressante, mas sob controle. ',
      'Bebo pouca água.',
    ],
    direcionamento: 'q49',
  },
  q49: {
    id: '49',
    question:
      'Depois de entender um pouco mais sobre você, queremos saber quais são seus objetivos. Se você pudesse realizar três desejos em relação a sua pele, quais seriam?',
    adicional:
      'Nós sabemos que é difícil escolher só três, mas temos que começar por algum lugar: ',
    typeQuestion: 'checkbox',
    qtdSelect: 3,
    options: [
      'a) Reduzir a aparição de acne.',
      'b) Uniformizar o tom de pele.',
      'c) Reduzir rugas e/ou linhas de expressão.',
      'd) Aumentar a hidratação.',
      'e) Reduzir a oleosidade.',
      'f) Reduzir manchas e vermelhidão.',
      'g) Ter uma pele mais firme.',
      'h) Estou feliz com a minha pele do jeito que está, quero apenas manter.',
    ],
    direcionamento: 'q50',
  },

  q50: {
    id: '50',
    question:
      'Não utilizamos fragrâncias sintéticas! O cheiro vem dos óleos essenciais, que também trazem benefícios para a pele. No seu ritual, o indicado é gerânio – aroma floral – conhecido como óleo da feminilidade por atenuar efeitos da TPM e menopausa. Proporciona sensação de relaxamento, calmante. ',
    adicional:
      'Sabendo que o óleo essencial de lavanda, por te muitos benefícios, pode ser indicado para diversos tipos de pele; e que peles sensíveis e com tendência a alergias devem evitar óleos essenciais, então nos diga:',
    typeQuestion: 'multiple',
    options: [
      'Gostei do óleo essencial de gerânio, quero manter.',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento.',
      'Prefiro sem fragrância – sem adição de óleos essenciais.',
    ],
    direcionamento: {
      'Gostei do óleo essencial de gerânio, quero manter.': 'q51',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento.':
        'q53',
      'Prefiro sem fragrância – sem adição de óleos essenciais.': 'q55',
    },
  },

  q51: {
    id: '51',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q52',
  },
  q52: {
    id: '52',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '4.1', Discordo: '4.1'},
  },

  q53: {
    id: '53',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q54',
  },
  q54: {
    id: '54',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '4.2', Discordo: '4.2'},
  },

  q55: {
    id: '55',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q56',
  },
  q56: {
    id: '56',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '4.3', Discordo: '4.3'},
  },

  q57: {
    id: '57',
    question:
      'Agora nos conte quanto a presença de rugas, linhas de expressão e firmeza da sua pele.',
    adicional:
      'Sabendo que linhas de expressão são aquelas rugas que aparecem só com o movimento do rosto e as rugas são marcas que não dependem do movimento do rosto, são visíveis mesmo com a face em repouso. Escolha quantas alternativas quiser: ',
    typeQuestion: 'checkbox',
    options: [
      'Tenho algumas linhas de expressão.',
      'Tenho rugas.',
      'Minha pele me parece tão firme quanto sempre foi.',
      'Minha pele já não está tão firme quanto costumava ser.',
      'Minha pele não me parece nada firme.',
    ],
    direcionamento: 'q58',
  },

  q58: {
    id: '58',
    question:
      'Você fez aplicação de toxina botulínica (Botox) nos últimos 6 meses?',
    typeQuestion: 'multiple',
    options: ['Sim', 'Não'],
    direcionamento: {Sim: 'q59', Não: 'q59'},
  },

  q59: {
    id: '59',
    question: 'Qual seu tom de pele? ',
    typeQuestion: 'multiple',
    options: [
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.',
    ],
    direcionamento: {
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ':
        'q60',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.':
        'q60',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.':
        'q60',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.':
        'q60',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ':
        'q60',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.':
        'q60',
    },
  },
  q60: {
    id: '60',
    question:
      'Seus hábitos e como você vem se sentindo influencia muito sua pele. Com quais dos hábitos abaixo você se identifica?',
    adicional: 'Marque quantas opções precisar, sem julgamentos :)',
    typeQuestion: 'checkbox',
    options: [
      'Não durmo suficiente. ',
      'Sou fumante ou fumo de vez em quando. ',
      'Não tenho uma alimentação saudável. ',
      'Acabo enfrentando muito estresse no meu dia a dia. ',
      'Minha vida é estressante, mas sob controle. ',
      'Bebo pouca água.',
    ],
    direcionamento: 'q61',
  },
  q61: {
    id: '61',
    question:
      'Depois de entender um pouco mais sobre você, queremos saber quais são seus objetivos. Se você pudesse realizar três desejos em relação a sua pele, quais seriam?',
    adicional:
      'Nós sabemos que é difícil escolher só três, mas temos que começar por algum lugar: ',
    typeQuestion: 'checkbox',
    qtdSelect: 3,
    options: [
      'a) Reduzir a aparição de acne.',
      'b) Uniformizar o tom de pele.',
      'c) Reduzir rugas e/ou linhas de expressão.',
      'd) Aumentar a hidratação.',
      'e) Reduzir a oleosidade.',
      'f) Reduzir manchas e vermelhidão.',
      'g) Ter uma pele mais firme.',
      'h) Estou feliz com a minha pele do jeito que está, quero apenas manter.',
    ],
    direcionamento: 'q62',
  },

  q62: {
    id: '62',
    question:
      'Não utilizamos fragrâncias sintéticas! O cheiro vem dos óleos essenciais, que também trazem benefícios para a pele. No seu ritual, o indicado é gerânio – aroma floral – conhecido como óleo da feminilidade por atenuar efeitos da TPM e menopausa. Proporciona sensação de relaxamento, calmante. ',
    adicional:
      'Sabendo que o óleo essencial de lavanda, por te muitos benefícios, pode ser indicado para diversos tipos de pele; e que peles sensíveis e com tendência a alergias devem evitar óleos essenciais, então nos diga:',
    typeQuestion: 'multiple',
    options: [
      'Gostei do óleo essencial de gerânio, quero manter.',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento.',
      'Prefiro sem fragrância – sem adição de óleos essenciais.',
    ],
    direcionamento: {
      'Gostei do óleo essencial de gerânio, quero manter.': 'q63',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento.':
        'q65',
      'Prefiro sem fragrância – sem adição de óleos essenciais.': 'q67',
    },
  },

  q63: {
    id: '63',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q64',
  },
  q64: {
    id: '64',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '5.1', Discordo: '5.1'},
  },

  q65: {
    id: '65',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q66',
  },
  q66: {
    id: '66',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '5.2', Discordo: '5.2'},
  },

  q67: {
    id: '67',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q68',
  },
  q68: {
    id: '68',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '5.3', Discordo: '5.3'},
  },

  q69: {
    id: '69',
    question: 'Você tem pele sensível? ',
    adicional:
      'A sensibilidade acontece quando a pele se torna facilmente irritada com o uso de alguns cosméticos, por exemplo, logo após o primeiro ou segundo uso daquele produto. Neste caso é comum aparecer zonas com vermelhidão, coceiras e manchas.',
    typeQuestion: 'multiple',
    options: [
      'Não é sensível, nunca notei sensibilidade durante o uso de produtos cosméticos.',
      'Um pouco sensível, mas consigo utilizar alguns cremes com ácidos.',
      'Muito sensível, não posso utilizar cremes com ácidos.',
      'Extremamente sensível (pele fica vermelha e descama mesmo após o uso de um sabonete ou hidratante indicado para peles sensíveis).',
    ],
    direcionamento: {
      'Não é sensível, nunca notei sensibilidade durante o uso de produtos cosméticos.':
        'q82',
      'Um pouco sensível, mas consigo utilizar alguns cremes com ácidos.':
        'q82',
      'Muito sensível, não posso utilizar cremes com ácidos.': 'q70',
      'Extremamente sensível (pele fica vermelha e descama mesmo após o uso de um sabonete ou hidratante indicado para peles sensíveis).':
        'q70',
    },
  },

  q70: {
    id: '70',
    question:
      'Agora nos conte quanto a presença de rugas, linhas de expressão e firmeza da sua pele.',
    adicional:
      'Sabendo que linhas de expressão são aquelas rugas que aparecem só com o movimento do rosto e as rugas são marcas que não dependem do movimento do rosto, são visíveis mesmo com a face em repouso. Escolha quantas alternativas quiser: ',
    typeQuestion: 'checkbox',
    options: [
      'Tenho algumas linhas de expressão.',
      'Tenho rugas.',
      'Minha pele me parece tão firme quanto sempre foi.',
      'Minha pele já não está tão firme quanto costumava ser.',
      'Minha pele não me parece nada firme.',
    ],
    direcionamento: 'q71',
  },

  q71: {
    id: '71',
    question:
      'Você fez aplicação de toxina botulínica (Botox) nos últimos 6 meses?',
    typeQuestion: 'multiple',
    options: ['Sim', 'Não'],
    direcionamento: {Sim: 'q72', Não: 'q72'},
  },

  q72: {
    id: '72',
    question: 'Qual seu tom de pele? ',
    typeQuestion: 'multiple',
    options: [
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.',
    ],
    direcionamento: {
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ':
        'q73',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.':
        'q73',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.':
        'q73',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.':
        'q73',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ':
        'q73',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.':
        'q73',
    },
  },
  q73: {
    id: '73',
    question:
      'Seus hábitos e como você vem se sentindo influencia muito sua pele. Com quais dos hábitos abaixo você se identifica?',
    adicional: 'Marque quantas opções precisar, sem julgamentos :)',
    typeQuestion: 'checkbox',
    options: [
      'Não durmo suficiente. ',
      'Sou fumante ou fumo de vez em quando. ',
      'Não tenho uma alimentação saudável. ',
      'Acabo enfrentando muito estresse no meu dia a dia. ',
      'Minha vida é estressante, mas sob controle. ',
      'Bebo pouca água.',
    ],
    direcionamento: 'q74',
  },
  q74: {
    id: '74',
    question:
      'Depois de entender um pouco mais sobre você, queremos saber quais são seus objetivos. Se você pudesse realizar três desejos em relação a sua pele, quais seriam?',
    adicional:
      'Nós sabemos que é difícil escolher só três, mas temos que começar por algum lugar: ',
    typeQuestion: 'checkbox',
    qtdSelect: 3,
    options: [
      'a) Reduzir a aparição de acne.',
      'b) Uniformizar o tom de pele.',
      'c) Reduzir rugas e/ou linhas de expressão.',
      'd) Aumentar a hidratação.',
      'e) Reduzir a oleosidade.',
      'f) Reduzir manchas e vermelhidão.',
      'g) Ter uma pele mais firme.',
      'h) Estou feliz com a minha pele do jeito que está, quero apenas manter.',
    ],
    direcionamento: 'q75',
  },

  q75: {
    id: '75',
    question:
      'Não utilizamos fragrâncias sintéticas! O cheiro vem dos óleos essenciais, que também trazem benefícios para a pele. No seu ritual, os óleos essenciais indicados são capim limão e menta – leve aroma cítrico, herbal, com toque mentolado e refrescante, com uma sensação de motivação e bem-estar, revigorante.',
    adicional:
      'Sabendo que o óleo essencial de lavanda, por ter muitos benefícios, pode ser indicado para diversos tipos de pele; e que peles sensíveis e com tendência a alergias devem evitar óleos essenciais, então nos diga:',
    typeQuestion: 'multiple',
    options: [
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ',
    ],
    direcionamento: {
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ':
        'q76',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ':
        'q78',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ': 'q80',
    },
  },
  q76: {
    id: '76',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q77',
  },
  q77: {
    id: '77',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '6.1', Discordo: '6.1'},
  },

  q78: {
    id: '78',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q79',
  },
  q79: {
    id: '79',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '6.2', Discordo: '6.2'},
  },

  q80: {
    id: 'q80',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q81',
  },
  q81: {
    id: '81',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '6.3', Discordo: '6.3'},
  },

  q82: {
    id: '82',
    question:
      'Agora nos conte quanto a presença de rugas, linhas de expressão e firmeza da sua pele.',
    adicional:
      'Sabendo que linhas de expressão são aquelas rugas que aparecem só com o movimento do rosto e as rugas são marcas que não dependem do movimento do rosto, são visíveis mesmo com a face em repouso. Escolha quantas alternativas quiser: ',
    typeQuestion: 'checkbox',
    options: [
      'Tenho algumas linhas de expressão.',
      'Tenho rugas.',
      'Minha pele me parece tão firme quanto sempre foi.',
      'Minha pele já não está tão firme quanto costumava ser.',
      'Minha pele não me parece nada firme.',
    ],
    direcionamento: 'q83',
  },

  q83: {
    id: '83',
    question:
      'Você fez aplicação de toxina botulínica (Botox) nos últimos 6 meses?',
    typeQuestion: 'multiple',
    options: ['Sim', 'Não'],
    direcionamento: {Sim: 'q84', Não: 'q84'},
  },

  q84: {
    id: '84',
    question: 'Qual seu tom de pele? ',
    typeQuestion: 'multiple',
    options: [
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.',
    ],
    direcionamento: {
      '1 - Pele branca: sempre queima, nunca bronzeia, muito sensível ao sol. ':
        'q85',
      '2 - Pele branca: sempre queima, bronzeia muito pouco, sensível ao sol.':
        'q85',
      '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.':
        'q85',
      '4 - Pele morena moderada: queima (pouco), sempre bronzeia, sensibilidade normal ao sol.':
        'q85',
      '5 - Pele morena escura: queima (raramente), sempre bronzeia, pouco sensível ao sol. ':
        'q85',
      '6 - Pele negra: nunca queima, totalmente pigmentada, insensível ao sol.':
        'q85',
    },
  },
  q85: {
    id: '85',
    question:
      'Seus hábitos e como você vem se sentindo influencia muito sua pele. Com quais dos hábitos abaixo você se identifica?',
    adicional: 'Marque quantas opções precisar, sem julgamentos :)',
    typeQuestion: 'checkbox',
    options: [
      'Não durmo suficiente. ',
      'Sou fumante ou fumo de vez em quando. ',
      'Não tenho uma alimentação saudável. ',
      'Acabo enfrentando muito estresse no meu dia a dia. ',
      'Minha vida é estressante, mas sob controle. ',
      'Bebo pouca água.',
    ],
    direcionamento: 'q86',
  },
  q86: {
    id: '86',
    question:
      'Depois de entender um pouco mais sobre você, queremos saber quais são seus objetivos. Se você pudesse realizar três desejos em relação a sua pele, quais seriam?',
    adicional:
      'Nós sabemos que é difícil escolher só três, mas temos que começar por algum lugar: ',
    typeQuestion: 'checkbox',
    qtdSelect: 3,
    options: [
      'a) Reduzir a aparição de acne.',
      'b) Uniformizar o tom de pele.',
      'c) Reduzir rugas e/ou linhas de expressão.',
      'd) Aumentar a hidratação.',
      'e) Reduzir a oleosidade.',
      'f) Reduzir manchas e vermelhidão.',
      'g) Ter uma pele mais firme.',
      'h) Estou feliz com a minha pele do jeito que está, quero apenas manter.',
    ],
    direcionamento: 'q87',
  },

  q87: {
    id: '87',
    question:
      'Não utilizamos fragrâncias sintéticas! O cheiro vem dos óleos essenciais, que também trazem benefícios para a pele. No seu ritual, os óleos essenciais indicados são capim limão e menta – leve aroma cítrico, herbal, com toque mentolado e refrescante, com uma sensação de motivação e bem-estar, revigorante.',
    adicional:
      'Sabendo que o óleo essencial de lavanda, por ter muitos benefícios, pode ser indicado para diversos tipos de pele; e que peles sensíveis e com tendência a alergias devem evitar óleos essenciais, então nos diga:',
    typeQuestion: 'multiple',
    options: [
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ',
    ],
    direcionamento: {
      'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ':
        'q88',
      'Prefiro óleo essencial de lavanda, aroma floral, doce, com toque herbal e canforado – sensação de relaxamento. ':
        'q90',
      'Prefiro sem fragrância – sem adição de óleos essenciais. ': 'q92',
    },
  },
  q88: {
    id: '88',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q89',
  },
  q89: {
    id: '89',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '4.1', Discordo: '4.1'},
  },

  q90: {
    id: '90',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q91',
  },
  q91: {
    id: '91',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '4.2', Discordo: '4.2'},
  },

  q92: {
    id: 'q92',
    question:
      'Você tem alergia a algum ingrediente ou acha que precisamos saber de mais algum detalhe para formular o seu produto personalizado? Esse espaço é seu, fique à vontade para compartilhar com a gente. É opcional, então caso não tenha, pode deixar em branco :)  ',
    typeQuestion: 'line',
    direcionamento: 'q93',
  },
  q93: {
    id: '93',
    question:
      'Agora que nós já temos suas informações, seu Ritual vai ser formulado especialmente para você. Ao clicar na caixinha abaixo, você concorda com a criação de um perfil contendo os dados fornecidos por você no preenchimento deste formulário. O perfil serve para que você possa alterar suas preferências nos próximos pedidos e assim conseguimos te acompanhar de pertinho :) ',
    typeQuestion: 'multiple',
    options: ['Concordo', 'Discordo'],
    direcionamento: {Concordo: 'produto', Discordo: 'produto'},
    produto: {Concordo: '4.3', Discordo: '4.3'},
  },
};

export default questions;
