# App Calculadora - DocGo

Aplicação DocGo simples para soma de n argumentos.

## Funções

### soma

Soma múltiplos números fornecidos como argumentos.

**Parâmetros:**

- `numeros` (array, obrigatório): Lista de números para serem somados

**Exemplo de uso:**

```json
{
  "numeros": [1, 2, 3, 4, 5]
}
```

**Saída de exemplo:**

```json
{
  "success": true,
  "data": {
    "numeros": [1, 2, 3, 4, 5],
    "resultado": 15,
    "quantidade": 5
  }
}
```

## Build

```bash
./build.sh
```

ou

```bash
npm install
npm run build
```
