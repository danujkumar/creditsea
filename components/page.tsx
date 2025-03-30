"use client";
import { Button, Checkbox, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      className="w-full sm:w-60 h-10"
    />
  );
};

const applyLoan = async (
  fullname: string,
  loan_amount: number,
  tenure: number,
  employment_status: string,
  reason: string,
  address: string,
  email: string,
  allowed: boolean,
): Promise<boolean | null> => {
  try {
    const response = await fetch(
      "https://loan-service-ivxx.onrender.com/apply",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          loan_amount,
          tenure,
          employment_status,
          reason,
          address,
          email,
          allowed,
          repaid: false,
        }),
      }
    );

    if (response.ok) {
      window.alert("Loan applied successfully");
      return true;
    } else {
      console.error("Error applying for loan:", response.status);
      return false;
    }
  } catch (error) {
    console.error("Network error:", error);
    return false;
  }
};

export default function Home({ close }: Readonly<{ close: (isClose: boolean) => void }>) {
  const [fullname, setFullname] = useState<string>("");
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [tenure, setTenure] = useState<string>("");
  const [employmentStatus, setEmploymentStatus] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [terms, setTerms] = useState<boolean>(false);
  const [allowed, setAllowed] = useState<boolean>(false);

  return (
    <div className="w-full h-3/4 mt-8 flex items-center justify-center fixed top-20  left-0 z-50 bg-opacity-50 ">
      <div className="h-full w-10/12 md:w-4/5 lg:w-4/7 p-6 rounded-lg bg-white border-2 shadow-lg flex flex-col items-center overflow-scroll">
        <h2 className="text-2xl font-bold mb-4 text-center">Apply For Loan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
          <InputField
            label="Full name as it appears on bank account"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <InputField
            label="Loan tenure (in months)"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
          <InputField
            label="How much do you need?"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <InputField
            label="Employment status"
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
          />
          <InputField
            label="Employment address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <InputField
            label="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <OutlinedInput
            className="w-full md:w-60 h-24"
            placeholder="Reason for loan"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2 w-full mt-14">
          <label className="flex items-center">
            <Checkbox
              checked={terms}
              onChange={()=>{setTerms(!terms)}}
            />
            I accept the terms
          </label>

          <label className="flex items-center">
            <Checkbox
              checked={allowed}
              onChange={()=>{setAllowed(!allowed)}}
            />
            My information may be shared with credit bureaus
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            variant="contained"
            className="w-full sm:w-36 h-10"
            onClick={async () => {
              if (!terms) {
                window.alert("Please accept the terms");
                return;
              }
              const result = await applyLoan(
                fullname,
                Number(loanAmount),
                Number(tenure),
                employmentStatus,
                reason,
                address,
                email,
                allowed
              );
              console.log(result);
              close(!result);
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            className="w-full sm:w-36 h-10"
            onClick={() => close(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
