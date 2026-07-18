# ☁️ AWS Learning Platform

> Plataforma de ensino interativa para aprendizagem de AWS, desenvolvida em HTML, CSS e JavaScript puro.

Inspirada em plataformas como:

- AWS Skill Builder
- Microsoft Learn
- Cisco Skills for All

O objetivo é ensinar Computação em Nuvem e AWS de forma progressiva, prática e organizada, além de servir como um projeto completo para estudo de desenvolvimento Front-end sem frameworks.

---

# 📚 Documentação

Toda a documentação do projeto está organizada para facilitar a manutenção, evolução da plataforma e a colaboração futura.

| Documento | Descrição |
|-----------|-----------|
| **README.md** | Visão geral da plataforma e instruções de uso |
| **docs/ROADMAP.md** | Planejamento das Sprints e evolução do projeto |
| **CHANGELOG.md** | Histórico de versões e alterações realizadas |
| **VERSION** | Versão atual da plataforma |

---

## 📈 Status do Projeto

| Item | Status |
|------|--------|
| 🚀 Versão | **0.1.0** |
| 📚 Curso | Aula 1 em desenvolvimento |
| 🛠️ Sprint Atual | Sprint 1 — Plataforma de Ensino |
| 📅 Última atualização | Julho de 2026 |

# 🎯 Objetivos do Projeto

- Ensinar AWS do nível iniciante ao avançado.
- Construir uma plataforma profissional utilizando JavaScript puro.
- Desenvolver uma arquitetura escalável e modular.
- Simular a experiência de plataformas oficiais de ensino.
- Preparar o aluno para certificações AWS.

Certificações planejadas:

- AWS Certified Cloud Practitioner
- AWS SysOps Administrator

---

# 📌 Status do Projeto

Versão atual:

> **v1.1**

Sprint atual:

> **Sprint 1 — Course Engine**

Status:

🚧 Em desenvolvimento

---

# 🗺 Roadmap

## Sprint 0 — Infraestrutura ✅

Concluído.

Implementado:

- Estrutura de diretórios
- Design System
- Layout base
- Sistema de Temas
- Router
- Storage
- Progress Engine
- Utilitários
- Inicialização central (app.js)

---

## Sprint 1 — Course Engine 🚧

Objetivo:

Criar um mecanismo capaz de renderizar qualquer aula utilizando arquivos JSON.

Funcionalidades:

- Carregamento dinâmico
- Hero da aula
- Objetivos
- Conteúdo
- Laboratório Mental
- Navegação entre aulas

---

## Sprint 2 — Quiz Engine

Planejado.

- Banco de questões
- Questões aleatórias
- Cronômetro
- Correção automática
- Explicações
- XP

---

## Sprint 3 — Dashboard

Planejado.

- Estatísticas
- XP
- Evolução
- Conquistas
- Certificados

---

## Sprint 4 — Simulados Oficiais

Planejado.

- Cloud Practitioner
- SysOps Administrator

---

# 📁 Estrutura do Projeto

```text
aws-learning/
│
├── index.html
├── dashboard.html
├── simulado.html
├── perfil.html
│
├── aulas/
│   ├── aula1.html
│   ├── aula2.html
│   └── ...
│
├── css/
│   ├── style.css
│   ├── layout.css
│   ├── dark.css
│   ├── quiz.css
│   └── dashboard.css
│
├── js/
│   ├── app.js
│   ├── router.js
│   ├── storage.js
│   ├── progress.js
│   ├── course.js
│   ├── quiz.js
│   ├── dashboard.js
│   ├── theme.js
│   └── utils.js
│
├── data/
│   ├── aulas.json
│   ├── aula1.json
│   ├── aula2.json
│   ├── cloud-practitioner.json
│   └── sysops.json
│
├── assets/
│   ├── img/
│   ├── icons/
│   └── logo.svg
│
└── certificado/
```

---

# 🏛 Arquitetura Geral

A plataforma foi dividida em quatro camadas.

```text
JSON
      ↓
Course Engine
      ↓
HTML
      ↓
CSS
```

Cada camada possui apenas uma responsabilidade.

---

# 📄 Arquitetura dos Arquivos JSON

Cada aula é representada por um arquivo JSON independente.

Exemplo:

```text
data/

aula1.json

aula2.json

aula3.json
```

Estrutura:

```json
{
    "version":"1.0",
    "id":1,
    "titulo":"...",
    "objetivos":[],
    "modulos":[],
    "laboratorio":{}
}
```

## Versionamento

Todos os arquivos de conteúdo deverão possuir um campo:

```json
"version":"1.0"
```

O objetivo é permitir evolução da estrutura dos arquivos sem quebrar aulas antigas.

O Course Engine será responsável por validar automaticamente a compatibilidade da versão antes da renderização.

---

# 🔄 Comunicação entre Módulos

A plataforma utiliza módulos independentes.

Fluxo principal:

```text
Course Engine

↓

Progress Engine

↓

Storage

↓

Dashboard
```

Quando uma aula for concluída:

```text
Usuário conclui aula

↓

Course.finishLesson()

↓

Progress.completeLesson()

↓

Storage.save()

↓

Dashboard atualizado
```

Cada módulo possui responsabilidades bem definidas, reduzindo acoplamento e facilitando manutenção.

---

# 📦 Módulos JavaScript

## app.js

Responsável pela inicialização da aplicação.

Inicializa:

- Storage
- Theme
- Router
- Progress
- Eventos Globais
- Módulos específicos da página

---

## router.js

Responsável pela navegação.

Funções atuais:

- Detectar página atual
- Navegação entre páginas
- Controle de menu

Futuras melhorias:

- Navegação inteligente
- Próxima aula
- Aula anterior
- Breadcrumbs

---

## storage.js

Camada de persistência.

Utiliza LocalStorage para armazenar:

- Tema
- Configurações
- XP
- Progresso
- Estatísticas

---

## progress.js

Responsável pela evolução do aluno.

Planejado:

- Registrar aulas concluídas
- Controle de XP
- Evolução geral
- Estatísticas

---

## theme.js

Gerencia:

- Tema Claro
- Tema Escuro

---

## course.js

Principal módulo da plataforma.

Responsável por:

- Carregar arquivos JSON
- Validar conteúdo
- Renderizar aulas
- Exibir mensagens de erro

Estrutura atual:

```text
Course

├── init()
├── getLessonId()
├── loadLesson()
├── render()
│
├── renderHero()
├── renderInfo()
├── renderObjectives()
├── renderModules()
├── renderLab()
├── renderFooter()
│
└── showError()
```

---

# ⚠ Tratamento de Erros

O Course Engine deverá tratar os principais cenários de erro.

Casos previstos:

- Aula inexistente
- JSON inválido
- Erro de carregamento
- Estrutura incompatível
- Versão não suportada

Quando ocorrer um erro:

- Exibir mensagem amigável ao usuário.
- Registrar detalhes no console.
- Manter a aplicação funcionando.

Exemplo:

```
📚 Aula em construção.

Esta aula ainda não está disponível.
```

---

# 📱 Responsividade

A plataforma será desenvolvida utilizando a estratégia **Mobile First**.

Objetivos:

- Smartphone
- Tablet
- Notebook
- Desktop

Breakpoints planejados:

- 768px
- 1024px
- 1280px

Todos os componentes deverão adaptar-se automaticamente.

---

# ♿ Acessibilidade

Diretrizes adotadas:

- HTML semântico
- aria-label
- aria-expanded
- Navegação por teclado
- Contraste adequado (WCAG AA)
- Foco visível
- Compatibilidade com leitores de tela

A acessibilidade fará parte da arquitetura da plataforma e não será tratada apenas como melhoria visual.

---

# 🚀 Como Executar

Utilize um servidor HTTP.

Exemplo utilizando o VS Code:

- Instale a extensão Live Server.
- Clique em **Open with Live Server**.

Ou utilize Python:

```bash
python -m http.server
```

Depois acesse:

```
http://localhost:5500/
```

---

# 🛠 Tecnologias

- HTML5
- CSS3
- JavaScript ES6+
- JSON
- LocalStorage

Sem frameworks.

Objetivo:

Aprender JavaScript construindo uma aplicação real.

---

# 🚀 Próximas Implementações

## Interface

- Hero inspirado no AWS Skill Builder
- Sidebar inteligente
- Accordion
- Toast
- Modal
- Loader
- Skeleton Loading

---

## Course Engine

- Vídeos
- Imagens
- Laboratórios
- Exemplos reais
- Exercícios
- Download de materiais

---

## Quiz Engine

- Banco com mais de 200 questões
- Questões aleatórias
- Cronômetro
- Explicações detalhadas
- XP
- Níveis
- Conquistas

---

## Dashboard

- Estatísticas
- Evolução
- Certificados
- Tempo de estudo
- Assuntos dominados

---

## Certificações

Planejado:

- AWS Cloud Practitioner
- AWS SysOps Administrator

---

# 👨‍💻 Autor

Desenvolvido por:

**Dejan Santos**

Arquitetura e desenvolvimento em conjunto com o ChatGPT (OpenAI).

---

# 📄 Licença

Projeto desenvolvido para fins educacionais.