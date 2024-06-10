import AddCompanyButton from './components/add-company-button';
import Button from './components/button';
import ButtonError from './components/button-error';
import StatusLabel, { Status } from './components/status-lable';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <AddCompanyButton />
    </main>
  );
}
