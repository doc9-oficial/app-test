import docgo from "docgo-sdk";

async function soma(): Promise<void> {
  try {
    const validation = docgo.validateParams();
    if (!validation.valid) {
      console.log(docgo.result(false, null, validation.error));
      return;
    }

    const numeros = docgo.getParam("numeros") as number[];
    if (!numeros || !Array.isArray(numeros) || numeros.length === 0) {
      console.log(
        docgo.result(
          false,
          null,
          "É necessário fornecer ao menos um número para somar"
        )
      );
      return;
    }

    // Verificar se todos os elementos são números
    const todosNumeros = numeros.every(
      (num) => typeof num === "number" && !isNaN(num)
    );
    if (!todosNumeros) {
      console.log(
        docgo.result(
          false,
          null,
          "Todos os elementos devem ser números válidos"
        )
      );
      return;
    }

    // Realizar a soma
    const resultado = numeros.reduce((total, atual) => total + atual, 0);

    console.log(
      docgo.result(true, {
        numeros: numeros,
        resultado: resultado,
        quantidade: numeros.length,
      })
    );
  } catch (error: any) {
    console.log(docgo.result(false, null, error.message));
  }
}

soma();
