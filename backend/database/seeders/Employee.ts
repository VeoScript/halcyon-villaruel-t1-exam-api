import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employee from 'App/Models/Employee'

export default class EmployeeSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Employee.createMany([
      {
        firstname: 'Richlyn',
        lastname: 'Hermosilla',
        birthdate: new Date('05-31-2003'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Admin', // Admin, Engineering, Finance
        position: 'HR',
        date_hired: new Date('07-05-2022'),
        employment_status: 'Probationary', // Casual, Probationary, Regular
        contact_number: '09558398008',
        email: 'richlynhermosilla@outlook.com',
        address: 'Brgy. Ponong',
        city: 'Matalom',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Jerome',
        lastname: 'Villaruel',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Amanda',
        lastname: 'Holand',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Anthony',
        lastname: 'Lowe',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Christopher',
        lastname: 'Hughes',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Matthew',
        lastname: 'Silva Jr',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Karen',
        lastname: 'Richard',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Robert',
        lastname: 'Hull',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Theresa',
        lastname: 'Torres',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Maria',
        lastname: 'Carroll',
        birthdate: new Date('09-13-1997'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Web Developer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'mariacaroll@gmail.com',
        address: 'Brgy. Carolina',
        city: 'Jollibee',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Kathleen',
        lastname: 'Stevens',
        birthdate: new Date('09-13-1987'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Finance', // Admin, Engineering, Finance
        position: 'Cashier',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'kethleenstevens@gmail.com',
        address: 'Brgy. Oks',
        city: 'Lang',
        province: 'Ako',
        nationality: 'Filipino'
      },
      {
        firstname: 'David',
        lastname: 'Mills Jr.',
        birthdate: new Date('09-13-1990'),
        gender: 'Male',
        marital_status: 'Married',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'davidmills@gmail.com',
        address: 'Brgy. Langgam',
        city: 'Olats',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Stephen',
        lastname: 'Stanley',
        birthdate: new Date('09-13-1940'),
        gender: 'Male',
        marital_status: 'Widowed',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'stephenstanley@gmail.com',
        address: 'Brgy. Bleeeh',
        city: 'Labyu',
        province: 'Mahal',
        nationality: 'Kita'
      },
      {
        firstname: 'Jacqueline',
        lastname: 'Hogan',
        birthdate: new Date('09-13-1996'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Admin', // Admin, Engineering, Finance
        position: 'Taga Sira Ng Computer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Probationary', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jacquelinehogan@gmail.com',
        address: 'Brgy. Kurina',
        city: 'Sanchez',
        province: 'Leyte',
        nationality: 'Sunitarium'
      },
      {
        firstname: 'Daniel',
        lastname: 'Rojas',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'danielrojas@gmail.com',
        address: 'Brgy. Rojas',
        city: 'Benigno',
        province: 'Aquino',
        nationality: 'Neptune'
      },
      {
        firstname: 'Angela',
        lastname: 'Thompson',
        birthdate: new Date('09-13-1892'),
        gender: 'Female',
        marital_status: 'Widowed',
        department: 'Finance', // Admin, Engineering, Finance
        position: 'Stafa',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Casual', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'angleathompson@gmail.com',
        address: 'Brgy. Gunggong',
        city: 'Galunggong',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Christine',
        lastname: 'Adkins',
        birthdate: new Date('09-13-1889'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Probationary', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'christineadkins@gmail.com',
        address: 'Brgy. Away',
        city: 'Away',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Andrea',
        lastname: 'Haynes',
        birthdate: new Date('09-13-1998'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Admin', // Admin, Engineering, Finance
        position: 'DIC',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'andreahaynes@gmail.com',
        address: 'Brgy. Koler',
        city: 'Arelok',
        province: 'Iloilo',
        nationality: 'Filipino'
      },
      {
        firstname: 'Marcus',
        lastname: 'Wagner',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Nuclear Bomb Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Casual', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'marcus@gmail.com',
        address: 'Brgy. Mingaw',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Joshua',
        lastname: 'Torres',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Finance', // Admin, Engineering, Finance
        position: 'Taga Ubos Ng Pera',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'josua@gmail.com',
        address: 'Brgy. Kawat',
        city: 'Busha',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Daniel',
        lastname: 'Rivera',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'daniel@gmail.com',
        address: 'Brgy. Compu',
        city: 'Matalom',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Joseph',
        lastname: 'Bailey',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Admin', // Admin, Engineering, Finance
        position: 'Eating Disorder',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'josephbailey@gmail.com',
        address: 'Brgy. Mumoy',
        city: 'Kewkew',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Kelli',
        lastname: 'Williams',
        birthdate: new Date('09-13-1350'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Marine Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Casual', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'kelliwilliams@gmail.com',
        address: 'Brgy. Amaw',
        city: 'Binatog',
        province: 'Leyte',
        nationality: 'Marsian'
      },
      {
        firstname: 'Xavier',
        lastname: 'Brown',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Married',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Electrical Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'xavierbrown@gmail.com',
        address: 'Brgy. Langgam',
        city: 'Maasin City',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Casey',
        lastname: 'Snyder',
        birthdate: new Date('09-13-1998'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Admin', // Admin, Engineering, Finance
        position: 'HR',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'caseysnyder@gmail.com',
        address: 'Brgy. Mingming',
        city: 'Mingaw',
        province: 'Cebu',
        nationality: 'Korean'
      },
      {
        firstname: 'Olivia',
        lastname: 'Bates',
        birthdate: new Date('09-13-1998'),
        gender: 'Female',
        marital_status: 'Married',
        department: 'Finance', // Admin, Engineering, Finance
        position: 'Accountant',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Probationary', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'olivabates@gmail.com',
        address: 'Brgy. Kwanggol',
        city: 'Ormoc',
        province: 'Leyte',
        nationality: 'American'
      },
      {
        firstname: 'Allison',
        lastname: 'Matthews',
        birthdate: new Date('09-13-1745'),
        gender: 'Male',
        marital_status: 'Widowed',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('05-30-2022'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'alisonmatthews@gmail.com',
        address: 'Brgy. Ambot',
        city: 'Tagaasanis',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Andrea',
        lastname: 'Barrett',
        birthdate: new Date('09-13-1998'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Admin', // Admin, Engineering, Finance
        position: 'Janitress',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Casual', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'andreabarrett@gmail.com',
        address: 'Brgy. Kamotes',
        city: 'Bogo',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Kari',
        lastname: 'Chavez',
        birthdate: new Date('09-13-1998'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Finance', // Admin, Engineering, Finance
        position: 'Accountant',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'karichavez@gmail.com',
        address: 'Brgy. Kamaisan',
        city: 'Unggoy',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Kevin',
        lastname: 'Cox',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'kevincox@gmail.com',
        address: 'Brgy. Bunga',
        city: 'Baybay',
        province: 'Leyte',
        nationality: 'Filipino'
      },
    ])
  }
}
