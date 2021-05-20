import EspenseItmem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: "Car  insurence",
      amount: 294.67,
      date: new Date(2021, 5, 20)
    },
    {
      id: 'e2',
      title: "Car  insurence",
      amount: 294.67,
      date: new Date(2021, 5, 20)
    },
    {
      id: 'e3',
      title: "Car  insurence",
      amount: 294.67,
      date: new Date(2021, 5, 20)
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <EspenseItmem></EspenseItmem>
      <EspenseItmem></EspenseItmem>
      <EspenseItmem></EspenseItmem>
      <EspenseItmem></EspenseItmem>
    </div>
  );
}

export default App;
