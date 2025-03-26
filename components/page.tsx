'use client'
import { Button, OutlinedInput, Radio, TextField } from '@mui/material'
import React, { useState } from 'react'

const InputField = ({ label, value, onChange }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={{
        width: '300px',
        '& .MuiOutlinedInput-root': {
          height: '50px',
          '& input': {
            padding: '10px 14px',
          },
        },
      }}
    />
  )
}

const applyLoan = async (
  fullname: string,
  loan_amount: number,
  tenure: number,
  employment_status: string,
  reason: string,
  address: string,
  email: string
) => {
  try {
    const response = await fetch("http://localhost:3000/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        loan_amount,
        tenure,
        employment_status,
        reason,
        address,
        email,
        allowed: true, // Assuming these are fixed
        repaid: false
      }),
    });

    const data = response.status;
    console.log(data)

    if (response.ok) {
      console.log("Loan applied successfully:", data);
      window.alert("Loan applied successfully");
      return data;
    } else {
      console.error("Error applying for loan:", data, fullname, loan_amount, tenure, employment_status, reason, address, email);
      return null;
    }
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
};

export default function Home() {
  const [fullname, setFullname] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [reason, setReason] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div
        style={{
          // backgroundColor: 'red',
          height: '100vh',
          width: '80vw',
          display: 'flex',
          justifyContent: 'center',
          position: "absolute",
          zIndex: 10,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            // backgroundColor: 'blue',
            height: '90vh',
            width: '60%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
          <div
            style={{
              color: 'black',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginLeft: '2vw',
            }}
          >
            Apply For Loan
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              height: '70%',
              flexDirection: 'row',
              // marginTop: '6vh',
            }}
          >
            <div
              style={{
                // backgroundColor: 'yellow',
                flexDirection: 'column',
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ marginBottom: '0.4rem' }}>
                  Full name as it appears on bank account
                </div>
                <InputField onChange={(e) => setFullname(e.target.value)} value={fullname} label="Full name as it appears on bank account" />
              </div>

              <div>
                <div style={{ marginBottom: '0.4rem' }}>
                  Loan tenure (in months)
                </div>
                <InputField onChange={(e) => setTenure(e.target.value)} value={tenure} label="Loan tenure (in months)" />
              </div>

              {/* <div>
                <div style={{ marginBottom: '0.4rem' }}>
                  How much do you need?
                </div>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  sx={{ width: '300px' }}
                />
              </div> */}

              <div>
                <div style={{ marginBottom: '0.4rem' }}>Reason for loan</div>
                <OutlinedInput
                  onChange={(e) => setReason(e.target.value)}
                  value={reason}
                  placeholder="Reason for loan"
                  sx={{ width: '300px', height: '200px' }}
                />
              </div>
            </div>
            <div
              style={{
                // backgroundColor: 'yellow',
                flexDirection: 'column',
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ marginBottom: '0.4rem' }}>
                  How much do you need?
                </div>
                <InputField onChange={(e) => setLoanAmount(e.target.value)} value={loanAmount} label="How much do you need?" />
              </div>

              <div>
                <div style={{ marginBottom: '0.4rem' }}>Employment status</div>
                <InputField onChange={(e) => setEmploymentStatus(e.target.value)} value={employmentStatus} label="Employment status" />
              </div>

              <div>
                <div style={{ marginBottom: '0.4rem' }}>Employment address</div>
                <InputField onChange={(e)=>setAddress(e.target.value)} value={address} label="Employment address" />
              </div>

              <div>
                <div style={{ marginBottom: '0.4rem' }}>Email Id</div>
                <InputField onChange={(e)=>setEmail(e.target.value)} value={email} label="Email Id" />
              </div>
            </div>
          </div>

          <div
            style={{
              // backgroundColor: 'green',
              width: '100%',
              // height: '20%',
              display: 'flex',
              flexDirection: 'row',
              float: 'left',
            }}
          >
            <div style={{ width: '50%' }}>
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
              />
              I have read the important information and accept that by
              completing the application I will be bound by the terms
            </div>

            <div style={{ width: '50%' }}>
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
              />
              Any personal and credit information obtained may be disclosed from
              time to time to other lenders, credit bureaus or other credit
              reporting agencies.
            </div>
          </div>
          <Button variant="contained" onClick={()=>{applyLoan(fullname, Number.parseFloat(loanAmount), Number.parseInt(tenure), employmentStatus, reason, address, email);}} style={{ width: '15%', height: '8%' }}>
            Submit
          </Button>
        </div>
      </div>
      {/* <Middle/> */}
    </div>
  )
}
