Ótimo! Um bom planejamento inicial ajuda a manter o foco e desenvolver com mais qualidade. Vamos estruturar o projeto *SOS Cidadão* de forma clara, dividindo em:

---

## 🗺️ **Planejamento Geral — SOS Cidadão API**

---

### 🎯 **Objetivo**

Construir uma API RESTful para que cidadãos possam registrar, consultar e acompanhar a resolução de **problemas urbanos**, como buracos, lixo, iluminação pública, etc. A aplicação também permite que administradores atualizem o status desses problemas.

---

### 🧑‍🤝‍🧑 **Perfis de Usuário**

| Tipo        | Permissões                                                                |
| ----------- | ------------------------------------------------------------------------- |
| **Cidadão** | - Registrar problema<br>- Ver seus próprios relatos<br>- Consultar status |
| **Admin**   | - Ver todos os relatos<br>- Atualizar status de qualquer problema         |

---

### 📦 **Recursos da API**

#### 1. **Usuário**

* Registro (`POST /auth/register`)
* Login (`POST /auth/login`)
* Perfil (`GET /users/me`)

#### 2. **Problemas Urbanos**

* Criar problema (`POST /issues`)
* Ver problemas do usuário (`GET /issues/mine`)
* (Admin) Ver todos os problemas (`GET /issues`)
* (Admin) Atualizar status (`PATCH /issues/:id/status`)
* (Opcional) Filtros por categoria, status, bairro

#### 3. **Extras (futuramente)**

* Dashboard com estatísticas (quantidade por bairro, status, categoria)
* Upload de imagem (simulado ou via link)
* Geolocalização (coordenadas ou CEP)

---

### 🧱 **Modelo de Dados (Inicial)**

#### Usuário

```js
{
  _id,
  name,
  email,
  passwordHash,
  role: 'user' | 'admin',
  createdAt,
}
```

#### Problema

```js
{
  _id,
  title,
  description,
  category: 'buraco' | 'lixo' | 'iluminação' | ...,
  location: {
    bairro,
    rua,
    numero,
    referencia,
    coords: { lat, lng } // opcional
  },
  status: 'pendente' | 'em andamento' | 'resolvido',
  createdBy: userId,
  createdAt,
  updatedAt
}
```

---

### 🛠️ **Tecnologias e Ferramentas**

| Item           | Tecnologia              |
| -------------- | ----------------------- |
| Backend        | Node.js + Express       |
| Banco de Dados | MongoDB + Mongoose      |
| Autenticação   | JWT                     |
| Deploy         | Docker + Docker Compose |
| Testes         | Jest (básicos)          |
| Documentação   | Swagger/OpenAPI         |

---

### ⏱️ **Cronograma Sugerido para 1 Semana**

| Dia | Tarefa                                                     |
| --- | ---------------------------------------------------------- |
| 1   | Planejamento e setup (estrutura, Docker, MongoDB, Express) |
| 2   | Módulo de autenticação (register/login + JWT + roles)      |
| 3   | CRUD de problemas (usuário comum)                          |
| 4   | Funcionalidades admin (listar todos, mudar status)         |
| 5   | Filtros, ajustes, upload simulado                          |
| 6   | Swagger, testes simples e deploy opcional                  |
| 7   | README completo e revisão geral                            |

---

### ✅ Próximo passo

Agora que planejamos o escopo, vamos para a **Etapa 1: Setup do Projeto** (estrutura de pastas, Docker, MongoDB e Express), como descrevi antes.

Quer que eu te envie os comandos e arquivos novamente aqui organizados passo a passo para você executar agora?
