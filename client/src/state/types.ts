export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  service: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: string;
  expense: string;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: string;
  expense: string;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totelProfit: number;
  totelRevenue: number;
  totelExpenses: number;
  expensesByCategory: ExpensesByCategory
  monthlyData: Array<Month>;
  dailyData: Array<Day>
}

