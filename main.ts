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

export class PaymentService {
  constructor(private logger: Logger) {}

  public processPayment(user: User, amount: number): void {
    try {
      user.debit(amount);
    } catch (error) {
      if (error instanceof PaymentFailedError) {
        this.logger.logError(`Échec paiement pour ${user.name} : solde insuffisant (${user.getBalance()}€).`);
      }
      throw error;
    }
  }
}

export class CoffeeService {
  constructor(public stockService: StockService, private logger: Logger) {}

  public prepareCoffee(type: CoffeeType): string {
    return `Voilà votre ${type}`;
  }

  public getStockStatus(): string {
    return this.stockService.getStockStatus();
  }
}

export class CoffeeMachineController {
  private pricePerCup = 2;

  constructor(
    private paymentService: PaymentService,
    private coffeeService: CoffeeService,
    private logger: Logger
  ) {}

  public buyCoffee(user: User, type: CoffeeType): string {
    try {
      this.coffeeService.stockService.checkAndConsumeResources();

      this.paymentService.processPayment(user, this.pricePerCup);

      return this.coffeeService.prepareCoffee(type);

    } catch (error) {
      if (error instanceof PaymentFailedError) {
        this.coffeeService.stockService.restoreResources();
        return error.message;
      }
      if (error instanceof InsufficientResourcesError) {
        return error.message;
      }
      this.logger.logError(`Erreur interne: ${(error as Error).message}`);
      return "Une erreur est survenue, veuillez réessayer plus tard.";
    }
  }

  public getStockInfo(): string {
    return this.coffeeService.getStockStatus();
  }
}
