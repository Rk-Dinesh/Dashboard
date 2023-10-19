<div>
      <HomeBredCurbs title="Dashboard" />
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
          <Card bodyClass="p-4">
            <div className="grid md:grid-cols-3 col-span-1 gap-4">
              <GroupChart1 />
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
       
        <div className="lg:col-span-12 col-span-12">
          <Card title="Recent Patients">
            <CompanyTable />
          </Card>
        </div>
       
      </div>
    </div>




import React from "react";
const HomeBredCurbs = ({ title }) => {
 
  return (
    <div className="flex justify-between flex-wrap items-center mb-6">
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
        {title}
      </h4>
      <div className="flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse">
      </div>
    </div>
  );
};

export default HomeBredCurbs;


// import React from "react";
import Card from "@/components/ui/Card";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import CompanyTable from "@/components/partials/Table/company-table";
// import HomeBredCurbs from "./HomeBredCurbs";

// const Dashboard = () => {
//   return (
    <div>
      <HomeBredCurbs title="Dashboard" />
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
          <Card bodyClass="p-4">
            <div className="grid md:grid-cols-3 col-span-1 gap-4">
              <GroupChart1 />
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
       
        <div className="lg:col-span-12 col-span-12">
          <Card title="Recent Patients">
            <CompanyTable />
          </Card>
        </div>
       
      </div>
    </div>
//   );
// };

// export default Dashboard;
