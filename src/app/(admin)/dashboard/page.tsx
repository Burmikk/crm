import { FC } from 'react';
import Header from '@/app/components/header';
import ButtonError from '@/app/components/button-error';

interface DashboardProps {}
const Dashboard: FC<DashboardProps> = () => {
  return (
    <main>
      <Header>Dashboard Page </Header>
      <ButtonError />
    </main>
  );
};
export default Dashboard;
