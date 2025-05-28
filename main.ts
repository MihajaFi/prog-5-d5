export enum CoffeeType {
  Mocha = "Mocha",
  IceCoffe = "IceCoffe",
  Cappuccino = "Cappuccino",
}

export class InsufficientResourcesError extends Error {
  constructor() {
    super("Ressources insuffisantes : café ou eau manquant.");
    this.name = "InsufficientResourcesError";
  }
}

export class PaymentFailedError extends Error {
  constructor() {
    super("Paiement refusé : solde insuffisant.");
    this.name = "PaymentFailedError";
  }
}