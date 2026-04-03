export interface SolicitacaoAcesso {
  nomeCompleto: string
  emailProfissional: string
  nomeEscritorio: string
}

export interface Feature {
  icone: string
  titulo: string
  descricao: string
}

export interface Problema {
  icone: string
  titulo: string
  descricao: string
}

export interface PerfilPermissao {
  nome: 'Editor' | 'Aprovador'
  capacidades: string[]
}
