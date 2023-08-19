import PropType from 'prop-types'
import signUpImage from '../assets/signup.svg'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const StudentForm = ({ handleSubmit, register, onSubmit }) => {
  return <>
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-xs sm:max-w-sm'>
      <div className="w-full form-control">
        <label className="label" htmlFor='name'>
          <span className="text-lg label-text ">Enter Your Name</span>
        </label>
        <input id='name' type="text" placeholder="Jhon Doe" className="w-full input input-bordered" {...register('name')} />

        <label className="label" htmlFor='email'>
          <span className="text-lg label-text ">Enter Your Email</span>
        </label>
        <input id='email' type="email" placeholder="jhon@doe.email.com" className="w-full input input-bordered" {...register('email')} />

        <label className="label" htmlFor='college'>
          <span className="text-lg label-text ">Enter Your College</span>
        </label>
        <input id='college' type="text" placeholder="Jalpaiguri Government Engineering College" className="w-full input input-bordered" {...register('college')} />

        <label className="label" htmlFor='department'>
          <span className="text-lg label-text ">Enter Your Department</span>
        </label>
        <input id='department' type="text" placeholder="Information Technology" className="w-full input input-bordered" {...register('department')} />

        <label className="label" htmlFor='gender'>
          <span className="text-lg label-text ">Select Your Gender</span>
        </label>
        <select id='gender' className="w-full select select-bordered" {...register('gender')} >
          <option disabled selected>Select</option>
          <option value={'male'}>Male</option>
          <option value={'female'}>Female</option>
          <option value={'other'}>Prefer not to say</option>
        </select>
        <label className="label" htmlFor='skills'>
          <span className="text-lg label-text ">Enter your skills separated by comma(,)</span>
        </label>
        <textarea id='skills' className="textarea textarea-bordered" placeholder="React, Angular" {...register('skills')} ></textarea>
        <button type='submit' className="mt-4 btn btn-outline btn-primary">Sign Up</button>
      </div>
    </form>
  </>
}
const MentorForm = ({ handleSubmit, register, onSubmit }) => {
  return <>
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-xs sm:max-w-sm'>
      <div className="w-full form-control">
        <label className="label" htmlFor='name'>
          <span className="text-lg label-text ">Enter Your Name</span>
        </label>
        <input id='name' type="text" placeholder="Jhon Doe" className="w-full input input-bordered" {...register('name')} />

        <label className="label" htmlFor='email'>
          <span className="text-lg label-text ">Enter Your Email</span>
        </label>
        <input id='email' type="email" placeholder="jhon@doe.email.com" className="w-full input input-bordered" {...register('email')} />

        <label className="label" htmlFor='college'>
          <span className="text-lg label-text ">Enter Your College</span>
        </label>
        <input id='college' type="text" placeholder="Jalpaiguri Government Engineering College" className="w-full input input-bordered" {...register('college')} />
        
        <label className="label" htmlFor='company'>
          <span className="text-lg label-text ">Current Company</span>
        </label>
        <input id='company' type="text" placeholder="Google" className="w-full input input-bordered" {...register('company')} />

        <label className="label" htmlFor='experience'>
          <span className="text-lg label-text ">Years of Experience</span>
        </label>
        <input id='experience' type="number" placeholder="Information Technology" className="w-full input input-bordered" {...register('experience')} />

        <label className="label" htmlFor='gender'>
          <span className="text-lg label-text ">Select Your Gender</span>
        </label>
        <select id='gender' className="w-full select select-bordered" {...register('gender')} >
          <option disabled selected>Select</option>
          <option value={'male'}>Male</option>
          <option value={'female'}>Female</option>
          <option value={'other'}>Prefer not to say</option>
        </select>
        <label className="label" htmlFor='skills'>
          <span className="text-lg label-text ">Enter your skills separated by comma(,)</span>
        </label>
        <textarea id='skills' className="textarea textarea-bordered" placeholder="React, Angular" {...register('skills')} ></textarea>
        <button type='submit' className="mt-4 btn btn-outline btn-primary">Sign Up</button>
      </div>
    </form>
  </>
}

function SignUp({ role }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-6 my-12 lg:flex-row '>
        <div className='flex flex-col items-center justify-center w-full' >
          <h1 className='text-xl font-bold md:text-3xl'>Sign Up</h1>
          <div className="flex w-full max-w-xs sm:max-w-sm tabs tabs-boxed">
            <Link to={'/mentor/signup'} className={role === 'mentor' ? 'tab tab-active flex-1' : 'tab'}>Mentor</Link>
            <Link to={'/student/signup'} className={role === 'student' ? 'tab tab-active flex-1' : 'tab'}>Student</Link>
          </div>
          {role === 'student' && <StudentForm handleSubmit={handleSubmit} register={register} onSubmit={onSubmit} />}
          {role === 'mentor' && <MentorForm handleSubmit={handleSubmit} register={register} onSubmit={onSubmit} />}
        </div>
        <div className='flex items-center justify-center w-full p-12'>
          <img src={signUpImage} alt="" width={'75%'} className='duration-500 hover:scale-110 hover:drop-shadow-[0_10px_35px_rgba(87,13,248,0.25)] drop-shadow-[0_10px_10px_rgba(87,13,248,0.15)]' />
        </div>
      </div>
    </>
  )
}

SignUp.propTypes = {
  role: PropType.string
}
StudentForm.propTypes = {
  handleSubmit: PropType.func,
  register: PropType.func,
  onSubmit: PropType.func
}

MentorForm.propTypes = {
  handleSubmit: PropType.func,
  register: PropType.func,
  onSubmit: PropType.func
}


export default SignUp