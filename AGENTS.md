# AGENTS.md — Laboratório Visual de Geometria

## 1. Sobre o projeto

Este repositório contém o Laboratório Visual de Geometria, uma coleção crescente de códigos, visualizações interativas e experimentos computacionais em geometria e topologia.

O objetivo é desenvolver recursos didáticos e científicos que permitam explorar objetos matemáticos por meio de visualizações computacionais.

## 2. Princípios gerais de desenvolvimento

- Preserve a organização atual do repositório.
- Antes de criar uma nova funcionalidade, examine os arquivos e identifique os padrões já utilizados.
- Reutilize componentes, estilos e funções existentes sempre que possível.
- Evite duplicação desnecessária de código.
- Não modifique arquivos que não sejam necessários para a tarefa solicitada.
- Preserve as funcionalidades já existentes.
- Não substitua uma implementação funcional sem justificar a necessidade.

## 3. Organização dos arquivos

Respeite a estrutura atual do projeto:

- `assets/`: recursos compartilhados.
- `curvas/`: visualizações de curvas.
- `fibracoes/`: visualizações de fibrados e fibrações.
- `superficies/`: visualizações de superfícies.
- `topologia/`: visualizações e experimentos de topologia.

Novas visualizações devem ser organizadas na pasta temática correspondente.

Sempre que uma nova página for criada, verifique se ela deve ser acrescentada ao catálogo da respectiva seção.

## 4. Identidade visual

- Preserve a identidade visual existente.
- Priorize fundo branco, tipografia legível e interface limpa.
- Mantenha consistência entre títulos, painéis, controles e legendas.
- Preserve a opção de alto contraste quando ela já estiver disponível.
- Priorize interfaces responsivas, compatíveis com computadores, tablets e celulares.
- Evite elementos visuais desnecessários.

## 5. Visualizações tridimensionais

Para visualizações 3D:

- Utilize Three.js quando adequado, respeitando as bibliotecas já adotadas no projeto.
- Implemente controles intuitivos de rotação e zoom.
- Inclua tela cheia quando apropriado.
- Organize os parâmetros matemáticos em controles acessíveis.
- Evite sobreposição de painéis e controles.
- Considere o desempenho em dispositivos móveis.
- Preserve a proporção e a qualidade da representação geométrica.

## 6. Rigor matemático

A precisão matemática é prioritária.

- Verifique as parametrizações e suas hipóteses.
- Diferencie imersões, mergulhos, submersões e aplicações singulares.
- Verifique domínios, identificações e condições de periodicidade.
- Não apresente como suave uma aplicação que seja apenas contínua ou diferenciável sob hipóteses adicionais.
- Identifique singularidades e pontos onde o posto da diferencial diminui.
- Explique as convenções matemáticas utilizadas.
- Não invente propriedades matemáticas para tornar uma visualização aparentemente correta.

Sempre que possível, apresente as fórmulas matemáticas utilizadas na própria página.

## 7. Interatividade

Quando pertinente, implemente:

- Sliders para variar parâmetros.
- Botões para mostrar ou ocultar elementos.
- Animações e curvas integrais.
- Legendas explicativas.
- Opções de visualização dos diferentes componentes geométricos.
- Controles de velocidade e pausa para animações.

As interações devem ser funcionais, não apenas decorativas.

## 8. Qualidade e testes

Antes de considerar uma tarefa concluída:

1. Verifique se o código está sintaticamente correto.
2. Confira os caminhos dos arquivos e dependências.
3. Teste as funcionalidades principais.
4. Verifique a visualização em diferentes dimensões de tela, quando possível.
5. Identifique claramente funcionalidades que não puderam ser testadas.

Não afirme que uma funcionalidade funciona se ela não foi efetivamente testada.

## 9. Git e publicação

- Não descarte alterações existentes sem autorização.
- Antes de realizar modificações importantes, examine o estado do Git.
- Explique quais arquivos serão modificados.
- Não execute `git push` sem autorização explícita do usuário.
- Não faça commits automáticos sem autorização.
- Preserve o histórico e a organização do repositório.

## 10. Comunicação

O usuário é matemático e utiliza o projeto para fins acadêmicos e didáticos.

- Explique decisões matemáticas e computacionais com precisão.
- Prefira soluções claras e bem documentadas.
- Apresente o código de maneira organizada.
- Diferencie resultados matematicamente demonstrados de aproximações numéricas.
- Quando houver limitações, informe-as explicitamente.

## 11. Regra fundamental

O objetivo não é apenas produzir imagens visualmente interessantes, mas construir ferramentas computacionais matematicamente consistentes, interativas, didáticas e reutilizáveis.