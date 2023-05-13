export class Cuenta {
  #cliente;
  #saldo;

  constructor(cliente, numero, agencia, saldo) {

		if (this.constructor == Cuenta) {

			throw new Error("No se deben instanciar objetos de la clase cuenta");
		}
    this.numero = numero;
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retirarDeCuenta(valor,comision) {
		//Método abstracto
		throw new Error("Debe implementar el metodo retirar de cuenta en su clase");
  }

	_retirarDeCuenta(valor,comision) {
		valor = valor * (1+comision/100);
    if (valor <= this.#saldo) this.#saldo -= valor;
    return this.#saldo;
  }


  verSaldo() {
    return this.#saldo;
  }

  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
    valor = 200;
    valor = valor * 1000;
  }
}
