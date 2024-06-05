import { FC } from 'react';

import Link from 'next/link';
interface CompanyProps {
  params: { id: string[] };
}

const Company: FC<CompanyProps> = ({ params }) => {
  const { id } = params;

  console.log('id--->', id);
  const lastElement = id.slice(-1).toString();
  console.log('lastElement--->', lastElement);
  if (lastElement === 'info') {
    return (
      <div className="p-5">
        <h2 className="  text-3xl">Info</h2>
        <hr />
        <Link className="text-xl  mt-4 block" href={`${lastElement}/buyItem`}>
          Buy Item
        </Link>
      </div>
    );
  }
  if (lastElement === 'buyItem') {
    return (
      <div className="p-5">
        <h2 className="  text-3xl">Happy end</h2>
        <hr />
        {/* <Link className="text-xl  mt-4 block" href={`${lastElement}/buyItem`}>
         Buy Item
       </Link> */}
      </div>
    );
  }
  return (
    <div className="p-5">
      <h2 className="  text-3xl">Company</h2>
      <hr />
      <Link className="text-xl  mt-4 block" href={`${lastElement}/info`}>
        Info
      </Link>
    </div>
  );
};
export default Company;
