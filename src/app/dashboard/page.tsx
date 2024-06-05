import { FC } from 'react';
import Link from 'next/link';
interface DashboardProps {}
const Dashboard: FC<DashboardProps> = () => {
  return (
    <div className=" p-10">
      <h2 className="  text-4xl mb-5">Dashbord</h2>
      <hr className=" mb-2 font-medium" />
      <Link className=" text-xl" href={'dashboard/mycompany'}>
        Companys
      </Link>
    </div>
  );
};
export default Dashboard;
