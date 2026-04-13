export const mockProblems = [
  {
    id: 1,
    title: "Buraco na via principal",
    description: "Um buraco enorme está dificultando o trânsito na Avenida Deolinda Rodrigues.",
    category: "Infraestrutura",
    location: "Avenida Deolinda Rodrigues, Luanda",
    status: "recebido",
    votes: 124,
    comments: [
      { id: 1, user: "João Silva", text: "Isso está assim há meses!" },
      { id: 2, user: "Maria Santos", text: "Ontem vi um carro furar o pneu aqui." }
    ],
    image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1b?auto=format&fit=crop&q=80&w=1000",
    date: "2024-03-20",
    lat: -8.8344,
    lng: 13.2644
  },
  {
    id: 2,
    title: "Acúmulo de lixo no bairro",
    description: "O lixo não é recolhido há mais de uma semana no Bairro Operário.",
    category: "Saneamento",
    location: "Bairro Operário, Luanda",
    status: "em análise",
    votes: 85,
    comments: [],
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=1000",
    date: "2024-03-21",
    lat: -8.8144,
    lng: 13.2388
  },
  {
    id: 3,
    title: "Poste sem iluminação",
    description: "A rua está completamente às escuras durante a noite, aumentando a insegurança.",
    category: "Energia",
    location: "Rua Direita da Samba, Luanda",
    status: "resolvido",
    votes: 45,
    comments: [
      { id: 3, user: "António Manuel", text: "Finalmente arranjaram!" }
    ],
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=1000",
    date: "2024-03-18",
    lat: -8.8488,
    lng: 13.2188
  }
];

export const mockBudgets = [
  {
    id: 1,
    title: "Projecto de Melhoramento da Iluminação Pública",
    amount: "500,000,000 Kz",
    purpose: "Energia",
    deadline: "2024-12-31",
    status: "Em execução",
    relatedProblemIds: [3]
  },
  {
    id: 2,
    title: "Plano Nacional de Saneamento Básico",
    amount: "1,200,000,000 Kz",
    purpose: "Saneamento",
    deadline: "2025-06-30",
    status: "Aguardando início",
    relatedProblemIds: [2]
  }
];

export const mockNews = [
  {
    id: 1,
    title: "Governo investe em infraestrutura urbana em Luanda",
    summary: "Novos projectos de asfaltagem foram aprovados para melhorar a mobilidade urbana.",
    content: "O Governo Provincial de Luanda anunciou hoje um novo pacote de investimentos focado na reparação de vias principais...",
    date: "24 Mar 2024",
    category: "Obras Públicas",
    image: "https://images.unsplash.com/photo-1590674899484-13da0d1b5ec4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Orçamento Participativo 2024",
    summary: "Abertas as votações para os projectos prioritários do município de Luanda Sul.",
    date: "22 Mar 2024",
    category: "Governação",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Workshop: Tecnologia e Cidadania",
    summary: "Jovens debatem o futuro da participação digital na administração local.",
    date: "20 Mar 2024",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
  }
];

export const mockUser = {
  name: "Albino Ernesto",
  email: "albino@example.com",
  points: 750,
  ranking: 124,
  reportsCount: 12,
  achievements: ["Cidadão Activo", "Fiscal do Bairro", "Voz Prime"],
  coverPhoto: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop"
};

export const mockStats = {
  totalResolved: 154,
  pendingReview: 45,
  transparencyScore: 8.5,
  activeUsers: "1,240"
};
