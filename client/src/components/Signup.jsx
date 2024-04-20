import { useState } from 'react'
import loginImg from '../assets/images/login.svg.png'
import { Eye, EyeSlash } from 'phosphor-react'
import { Button, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  return (
    <div className=' flex justify-evenly items-center bg-gray-100 mt-15 p-5 space-x-5'>
      <div>
        <img src={loginImg} alt='login_svg' />
      </div>
      <div className='w-[500px]'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-green-500'>Register</h1>
          <p className='text-gray-400 text-sm leading-8'>JOIN TO US</p>
        </div>
        <form>
          {/* name */}
          <div className='mb-6'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              Your Name
            </label>
            <OutlinedInput
              type='text'
              className=' block w-full bg-slate-100 border-2 rounded text-xl'
              placeholder='jhon doe'
              required
            />
          </div>
          {/* email */}
          <div className='mb-6'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              Email Address
            </label>
            <OutlinedInput
              type='text'
              className=' block w-full bg-slate-100 border-2 rounded text-xl'
              placeholder='Example@gmail.com'
              required
            />
          </div>
          {/* password */}
          <div className='mb-6'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              Password
            </label>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              className=' block w-full bg-slate-100 border-2 rounded'
              placeholder='your password'
              required
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword)
                    }}
                  >
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          {/* confirm password */}
          <div className='mb-6'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              Confirm Password
            </label>
            <OutlinedInput
              type={showConfirmPassword ? 'text' : 'password'}
              className=' block w-full bg-slate-100 border-2 rounded text-xl'
              placeholder='your confirm password'
              required
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword)
                    }}
                  >
                    {showConfirmPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#079bdb",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "gray.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "gray.800",
            },
          }}
        >
          Submit
        </Button>
        </form>
      </div>
    </div>
  )
}

export default Signup
