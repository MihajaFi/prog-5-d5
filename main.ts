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

export class Logger {
  logError(message: string): void {
    console.error(`[ERROR] - ${message}`);
  }
}

export class StockService {
  constructor(
    private coffeeStock: number,
    private waterStock: number,
    private logger: Logger
  ) {}

  public checkAndConsumeResources(): void {
    if (this.coffeeStock <= 0 || this.waterStock <= 0) {
      this.logger.logError("Ressources insuffisantes pour préparer le café.");
      throw new InsufficientResourcesError();
    }
    this.coffeeStock--;
    this.waterStock--;
  }

  public restoreResources(): void {
    this.coffeeStock++;
    this.waterStock++;
  }

  public getStockStatus(): string {
    return `Café: ${this.coffeeStock}, Eau: ${this.waterStock}`;
  }
}

