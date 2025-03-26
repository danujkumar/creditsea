'use client'
import { Button, OutlinedInput, Radio, TextField } from '@mui/material'
import React from 'react'

const InputField = ({ label }: { label: string }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      sx={{
        width: '300px',
        '& .MuiOutlinedInput-root': {
          height: '50px', // Adjust this value to your desired height
          '& input': {
            padding: '10px 14px', // Adjust padding if needed
          },
        },
      }}
    />
  )
}

export default function Home() {
  const [selectedValue, setSelectedValue] = React.useState('a')

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
                <InputField label="Full name as it appears on bank account" />
              </div>

              <div>
                <div style={{ marginBottom: '0.4rem' }}>
                  Loan tenure (in months)
                </div>
                <InputField label="Loan tenure (in months)" />
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
                <InputField label="How much do you need?" />
              </div>

              <div>
                <div style={{ marginBottom: '0.4rem' }}>Employment status</div>
                <InputField label="Employment status" />
              </div>

              <div>
                <div style={{ marginBottom: '0.4rem' }}>Employment address</div>
                <InputField label="Employment address" />
              </div>

              <div>
                <div style={{ marginBottom: '0.4rem' }}>Employment address</div>
                <InputField label="Employment address" />
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
          <Button variant="contained" style={{ width: '15%', height: '8%' }}>
            Submit
          </Button>
        </div>
      </div>
      {/* <Middle/> */}
    </div>
  )
}
