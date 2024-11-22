import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  transactions = [
    { cardHolder: 'John Doe', cardNumber: '**** **** **** 1234', amount: 120.50, date: '2023-10-01', status: 'Completed' },
    { cardHolder: 'Jane Smith', cardNumber: '**** **** **** 5678', amount: 75.00, date: '2023-10-02', status: 'Pending' },
    { cardHolder: 'Bob Johnson', cardNumber: '**** **** **** 9101', amount: 200.00, date: '2023-10-03', status: 'Completed' },
    { cardHolder: 'Alice Brown', cardNumber: '**** **** **** 1122', amount: 50.00, date: '2023-10-04', status: 'Refunded' }
  ];

  totalTransactions = this.transactions.length;
  totalEarned = this.transactions
    .filter(transaction => transaction.status === 'Completed')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  totalRefunded = this.transactions
    .filter(transaction => transaction.status === 'Refunded')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  totalPending = this.transactions
    .filter(transaction => transaction.status === 'Pending')
    .length;
  averageTransactionValue = (this.totalEarned / this.totalTransactions).toFixed(2);
}
