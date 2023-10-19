import React from "react";
import Card from "@/components/ui/Card";
import PatientTable from "./PatientTable";

const PatientDetails = () => {
  return (
    <div className=" space-y-5">
      <PatientTable />
    </div>
  );
};

export default PatientDetails;
