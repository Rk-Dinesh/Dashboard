import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { Tab } from "@headlessui/react"; import axios from "axios";
import { useLocation } from "react-router-dom";

const Patient_Details = () => {

    const [Data, setData] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get("email");

    useEffect(() => {
        if (email) {

            axios
                .get(`http://localhost:3001/viewpatient?email=${email}`)
                .then((response) => {
                    setData(response.data);

                })
                .catch((error) => {
                    console.error("Error fetching answers:", error);
                });
        }
    }, [email]);

    return (
        <div>
            <Tab.Group >
                <div className="grid gap-5 grid-cols-12">
                    <div className="xl:col-span-3 lg:col-span-4 col-span-12 card-auto-height">
                        <Card>
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Name </p>
                                    <p>: {Data.map((dataItem) => dataItem["fname"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>DOB </p>
                                    <p>: {Data.map((dataItem) => dataItem["dob"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Gender </p>
                                    <p>: {Data.map((dataItem) => dataItem["gender"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Email </p>
                                    <p>: {Data.map((dataItem) => dataItem["email"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Phone </p>
                                    <p>: {Data.map((dataItem) => dataItem["phone"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Address </p>
                                    <p>: {Data.map((dataItem) => dataItem["address"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>State </p>
                                    <p>: {Data.map((dataItem) => dataItem["state"])}</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ width: '100px', textAlign: 'left', marginRight: '10px' }}>Postcode </p>
                                    <p>: {Data.map((dataItem) => dataItem["postcode"])}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="xl:col-span-9 lg:col-span-8 col-span-12">
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="space-y-1">
                                    <div>
                                        <div className="accordion shadow-base dark:shadow-none rounded-md">
                                            <div className="flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700  rounded-md">
                                                <span>Patient Medical Dataset</span>
                                                <span><i className="fa fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="space-y-5">
                                            <div className="accordion shadow-base dark:shadow-none rounded-md">
                                                <div className="flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700  rounded-md">
                                                    <span>Reffering Doctors</span>
                                                    <span><i className="fa fa-angle-down"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="space-y-5">
                                            <div className="accordion shadow-base dark:shadow-none rounded-md">
                                                <div className="flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700  rounded-md">
                                                    <span>Insurance & Compensation</span>
                                                    <span><i className="fa fa-angle-down"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="space-y-5">
                                            <div className="accordion shadow-base dark:shadow-none rounded-md">
                                                <div className="flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700  rounded-md">
                                                    <span>Medication & Allergies</span>
                                                    <span><i className="fa fa-angle-down"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="space-y-5">
                                            <div className="accordion shadow-base dark:shadow-none rounded-md">
                                                <div className="flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700  rounded-md">
                                                    <span>MRI Safety Questions</span>
                                                    <span><i className="fa fa-angle-down"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="space-y-5">
                                            <div className="accordion shadow-base dark:shadow-none rounded-md">
                                                <div className="flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700  rounded-md">
                                                    <span>Surgical History</span>
                                                    <span><i className="fa fa-angle-down"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="space-y-5">
                                            <div className="accordion shadow-base dark:shadow-none rounded-md">
                                                <div className="flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700  rounded-md">
                                                    <span>Medical History</span>
                                                    <span><i className="fa fa-angle-down"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </div>
            </Tab.Group>
        </div >
    );
};

export default Patient_Details;
