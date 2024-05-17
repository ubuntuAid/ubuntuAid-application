import { Link } from "react-router-dom"

function SignUp() {
  return (
    <div>
        {/* This the header section */}
        <section>
            <div>
            <Link to={'/'}><img src="/src/assets/ubuntuAid-logo.svg" alt="" /></Link>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <p>Go Back</p>
                    </div>
            </div>
        </section>
        {/* This the body section */}
        <section>

        </section>
    </div>
  )
}

export default SignUp