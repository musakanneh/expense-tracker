import EspenseItmem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: "Toilet paper",
      amount: 300.67,
      date: new Date(2021, 5, 20)
    },
    {
      id: 'e2',
      title: "Car insurence",
      amount: 3000,
      date: new Date(2020, 5, 20)
    },
    {
      id: 'e3',
      title: "Summer engineering analyst",
      amount: 30000,
      date: new Date(2021, 6, 20)
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <EspenseItmem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </EspenseItmem>

      <EspenseItmem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </EspenseItmem>

      <EspenseItmem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </EspenseItmem>
    </div>
  );
}

export default App;
