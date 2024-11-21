import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
  const erros: string[] = [];

  if (!evento.alias) erros.push("Alias é obrigatorio");
  if (!evento.senha) erros.push("Senha é obrigatorio");
  if (!evento.nome) erros.push("Nome é obrigatorio");
  if (!evento.data) erros.push("Data é obrigatorio");
  if (!evento.local) erros.push("Local é obrigatorio");
  if (!evento.descricao) erros.push("Descricao é obrigatorio");
  if (!evento.imagem) erros.push("Imagem é obrigatorio");
  if (!evento.imagemBackground) erros.push("Imagem de fundo é obrigatorio");
  if (!evento.publicoEsperado || evento.publicoEsperado < 1) erros.push("Publico Esperado é obrigatorio");

  return erros;
}
