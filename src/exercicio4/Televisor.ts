//Faça um programa que simule um televisor criando-o como um objeto:
//O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume.
//Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.

export class Televisor {
  constructor(private _canal = 1, private _volume = 20) {}

  private validarCanal(c: number) {
    return Math.min(99, Math.max(1, Math.floor(c)));
  }

  private validarVolume(v: number) {
    return Math.min(100, Math.max(0, Math.floor(v)));
  }

  mudarCanal(canal: number) {
    this._canal = this.validarCanal(canal);
  }

  aumentarVolume() {
    this._volume = this.validarVolume(this._volume + 1);
  }

  diminuirVolume() {
    this._volume = this.validarVolume(this._volume - 1);
  }

  get canal() {
    return this._canal;
  }

  get volume() {
    return this._volume;
  }
}





