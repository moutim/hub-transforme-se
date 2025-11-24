# Prompt para Conversão de HTML/Tailwind para Bulma

Preciso converter páginas HTML estilizadas com Tailwind CSS para usar Bulma CSS. As páginas contêm conteúdo educacional/aulas que serão inseridas em um arquivo TypeScript como template strings.

## Requisitos de Conversão:

### 0. Descrição dos Dias
- As descrições dos dias (campo "descricao" ou texto principal de cada aula) devem ter no mínimo **130 caracteres** e no máximo **150**.
- O texto deve refletir o contexto da aula em questão, trazendo informações relevantes sobre o conteúdo abordado, objetivos ou temas principais.

### 1. Framework CSS
- **De:** Tailwind CSS
- **Para:** Bulma CSS
- **Documentação:** https://bulma.io/documentation/

### 2. Estrutura HTML
- Manter a estrutura semântica do HTML
- Converter todas as classes Tailwind para equivalentes em Bulma
- O HTML será inserido como template string em TypeScript (dentro de backticks)

### 3. Classes que devem ser REMOVIDAS:
- **Remover TODAS as classes `has-background-*`** - deixar backgrounds para o Bulma gerenciar
- **Remover classes de `<strong>`** - deixar elementos strong sem classes
- **Remover `has-text-white`** - o texto deve herdar a cor naturalmente

### 4. CSS Inline - ESTRITAMENTE PROIBIDO:
- **NÃO usar `style="..."` em NENHUM elemento** - toda estilização deve ser feita com classes
- **INCLUINDO `background-color`, `padding`, `margin`, `border-radius`, etc.**
- Qualquer estilo inline deve ser convertido para classes Bulma ou classes customizadas
- Se precisar de estilos específicos, crie classes customizadas no CSS

### 5. Classes Customizadas Permitidas:
Estas classes customizadas já estão definidas no CSS e podem ser usadas:
- `highlight-pink` - para texto em rosa (#e80170)
- `highlight-green` - para texto em verde (#48c78e)
- `has-text-info` - para texto em azul
- `has-text-purple` - para texto em roxo
- `has-text-warning` - para texto em amarelo
- `has-text-grey` - para texto em cinza
- `has-text-grey-light` - para texto em cinza claro
- `section-title` - para títulos de seção
- `border-left-pink` - borda esquerda rosa
- `emoji-large` - emoji grande
- `box-dark` - caixa com fundo escuro

### 6. Padrões de Conversão Comuns:

**Layout:**
- Grid Tailwind → Bulma Columns (`columns`, `column`)
- Container → `container`
- Flexbox → Bulma flex helpers (`is-flex`, `is-align-items-*`, `is-justify-content-*`)

**Espaçamento:**
- Tailwind `m-*`, `p-*` → Bulma `m-*`, `p-*`, `mb-*`, `mt-*`, `p-4`, `p-5`, etc.

**Tipografia:**
- Tailwind `text-*` → Bulma `title`, `subtitle`, `is-size-*`
- `font-bold` → remover (usar `<strong>` sem classes)
- Text alignment → `has-text-centered`, `has-text-left`, `has-text-right`

**Componentes:**
- Cards → `box` ou `card`
- Buttons → `button is-*`

### 7. Formato de Saída:
```typescript
"conteudo": `
  <div class="container">
    <!-- HTML convertido aqui -->
  </div>
`
```

### 8. Estrutura Típica de Seção:
```html
<div class="mb-6" id="secao-id">
  <h2 class="title is-4 section-title mb-5">Título da Seção</h2>
  <div class="columns is-vcentered">
    <div class="column">
      <div class="content is-size-5">
        <p class="mb-5">Conteúdo com <strong>negrito</strong></p>
      </div>
    </div>
    <div class="column">
      <figure class="image">
        <img src="url" alt="descrição" />
      </figure>
    </div>
  </div>
</div>
```

### 9. Imagens em Colunas:
- Sempre usar `<figure class="image">` para envolver imagens
- Imagens dentro de columns terão max-height: 350px automaticamente
- Usar `is-vcentered` nas columns para centralizar verticalmente
- NÃO usar `style` inline nas imagens

### 10. Blocos de Código:
```html
<pre class="p-4"><code>
// código aqui
</code></pre>
```
**NÃO usar:** `style="padding: 1rem; border-radius: 6px;"` - usar apenas classes

### 11. Caixas de Destaque:
```html
<div class="box box-dark">
  <h3 class="title is-5 mb-4">Título</h3>
  <div class="content">
    <p>Conteúdo</p>
  </div>
</div>
```

### 12. Regras de Ouro:
- ✅ Use classes Bulma sempre que possível
- ✅ Use classes customizadas quando necessário
- ❌ NUNCA use CSS inline (style="...") - NENHUM, ZERO, JAMAIS
- ❌ NUNCA adicione classes em elementos `<strong>`
- ❌ NUNCA use `has-background-*` ou `has-text-white`
- ❌ NUNCA use `background-color`, `padding`, `margin`, etc. inline

### 13. Exemplos de Conversão:

**❌ ERRADO:**
```html
<pre style="background-color: #1a1a1a; padding: 1rem; border-radius: 6px;">
<div style="max-width: 800px; margin: 0 auto;">
<strong class="text-white">Texto</strong>
```

**✅ CORRETO:**
```html
<pre class="box-dark p-4">
<div class="container">
<strong>Texto</strong>
```

### 14. Exercícios
- Todo exercício deve conter um título (usando <h3> ou equivalente) e uma descrição clara do que deve ser feito (usando <p> ou equivalente), seguindo o padrão dos exemplos do mock.

- Não incluir blocos genéricos como "Seu código aqui" nos exercícios. Apenas o enunciado e instruções devem aparecer.

### 15. Escapamento de Tags HTML em Enunciados
- Quando mencionar tags HTML em enunciados ou instruções (como `<h1>`, `<div>`, `<ul>`, etc.), sempre escape os caracteres `<` e `>` para `&lt;` e `&gt;` para evitar que sejam renderizados como HTML.
- Exemplo: Em vez de "Mude a cor do `<h2>`", use "Mude a cor do `&lt;h2&gt;`".
- Isso garante que as tags apareçam como texto no enunciado, não como elementos HTML.

### 16. IDs Progressivos das Aulas
- Os IDs das aulas devem ser **progressivos e contínuos** ao longo de todas as semanas, sem reiniciar em 1 a cada nova semana.
- Exemplo: Se a Semana 1 tem aulas com IDs 1 a 6, a Semana 2 deve começar com ID 7, e assim por diante.
- **NÃO reinicie os IDs em 1** para semanas subsequentes - mantenha a sequência contínua.

### 17. Preservação do Conteúdo Original
- **NÃO modificar, resumir ou alterar o texto/conteúdo educacional** das aulas.
- Apenas adaptar as classes CSS de Tailwind para Bulma, mantendo toda a estrutura textual, explicações e informações originais intactas.
- O conteúdo deve ser convertido, não reescrito - preserve parágrafos, listas, exemplos e toda a narrativa educacional.