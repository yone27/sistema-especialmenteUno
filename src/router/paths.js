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
import Planilla from '@/components/Pacientes/Planilla'
import Home from '@/components/Home'

import AuthGuard from './auth-guard'

export default [
  {
    path: '/',
    name: 'Hello',
    component: Home
  },
  {
    path: '/signin',
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
    component: Patients,
    beforeEnter: AuthGuard
  },
  {
    path: '/patient',
    name: 'CreatePatient',
    component: CreatePatient,
    beforeEnter: AuthGuard
  },
  {
    path: '/patient/:id',
    name: 'Patient',
    props: true,
    component: Patient
  },
  {
    path: '/planilla',
    name: 'Planilla',
    component: Planilla,
    beforeEnter: AuthGuard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: AuthGuard
  }
  /* Especialist */
  /* Admin */
]
