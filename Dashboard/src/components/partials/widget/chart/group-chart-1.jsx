import { useEffect, useState } from "react";
import React  from "react";
import Chart from "react-apexcharts";


const GroupChart1 = () => {

  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);


  const fetchData = async () => {
    try {
      const doctorsResponse = await axios.get("http://localhost:3000/doctors");
      if (doctorsResponse.status === 200) {
        setDoctorCount(doctorsResponse.data.length);
      }

      const patientsResponse = await axios.get("http://localhost:3000/patients");
      if (patientsResponse.status === 200) {
        setPatientCount(patientsResponse.data.length);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const statistics = [
    {
      title: "Total Doctors",
      count: doctorCount,
      bg: "bg-[#E5F9FF] dark:bg-slate-900",
    },
    {
      title: "Total Patients",
      count: patientCount,
      bg: "bg-[#FFEDE5] dark:bg-slate-900",
    },
    {
      title: "Total Answers",
      count: "90",
      bg: "bg-[#EAE5FF] dark:bg-slate-900",
    },
  ];

  
  return (
    <>
      {statistics.map((item, i) => (
        <div className={`py-[18px] px-4 rounded-[6px] ${item.bg}`} key={i}>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex-1">
              <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">
                {item.title}
              </div>
              <div className="text-slate-900 dark:text-white text-lg font-medium">
                {item.count}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GroupChart1;