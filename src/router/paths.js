/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Patients from '@/components/Pacientes/Patients'
import CreatePatient from '@/components/Pacientes/CreatePatient'
import Patient from '@/components/Pacientes/Patient'

export default [
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  /* Patients */
  {
    path: '/patients',
    name: 'Patients',
    component: Patients
  },
  {
    path: '/patient',
    name: 'CreatePatient',
    component: CreatePatient,
    //beforeEnter: AuthGuard
  },
  {
    path: '/patient/:id',
    name: 'Patient',
    props: true,
    component: Patient
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    //beforeEnter: AuthGuard
  }
  /* Especialist */
  /* Admin */
]
