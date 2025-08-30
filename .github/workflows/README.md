# Automação de Build e Release para Aplicativos DocGo

Este diretório contém os workflows de GitHub Actions para automatizar o processo de build e criação de releases para os aplicativos DocGo.

## Workflow principal: `app-build-release.yml`

Este workflow automatiza o processo de compilação e release de aplicativos DocGo.

### Como usar

#### Método 1: Tags Git

Você pode criar uma nova release simplesmente criando uma tag Git com o formato:

```
app-NOME@VERSAO
```

Exemplo:

```bash
git tag app-slack@1.0.0
git push origin app-slack@1.0.0
```

Isso vai disparar o workflow automaticamente.

#### Método 2: Execução manual

1. Vá até a aba "Actions" no GitHub
2. Selecione o workflow "Build and Release App"
3. Clique em "Run workflow"
4. Preencha:
   - Nome do aplicativo (ex: slack, jusbr, query)
   - Versão (ex: 1.0.0)
   - Marque "É uma pré-release?" se aplicável
5. Clique em "Run workflow"

### O que este workflow faz

1. Detecta o tipo de aplicativo (Node.js, Go, ou outro)
2. Executa o processo de build apropriado
3. Verifica se o diretório `dist` foi criado
4. Cria um arquivo ZIP contendo:
   - Diretório `dist` (código compilado)
   - `manifest.json` (definição do aplicativo)
   - `README.md` (documentação)
5. Cria uma release GitHub com o arquivo ZIP anexado

### Requisitos para aplicativos

Para que o aplicativo seja compatível com o DocGo e este workflow, ele deve:

1. Ter um `manifest.json` válido
2. Ter um processo de build que gere os arquivos compilados em um diretório `dist`
3. Estar em um diretório com nome no formato `app-NOME` (ex: `app-slack`)

## Melhores práticas

1. **Sempre teste localmente** antes de criar uma release
2. Mantenha a documentação (`README.md`) atualizada
3. Use versionamento semântico (X.Y.Z) nas releases
4. Inclua informações relevantes nas mensagens de commit para que as notas de release sejam úteis
