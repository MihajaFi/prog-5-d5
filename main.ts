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

export class User {
  constructor(
    public readonly id: string,
    public name: string,
    private balance: number
  ) {}

  public getBalance(): number {
    return this.balance;
  }

  public debit(amount: number): void {
    if (this.balance < amount) {
      throw new PaymentFailedError();
    }
    this.balance -= amount;
  }
}

