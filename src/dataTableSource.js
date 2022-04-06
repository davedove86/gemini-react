export const dataColumns = [
  { field: "id", headerName: "id", width: "150" },
  {
    field: "image",
    headerName: "image",
    width: "150",
    renderCell: (params) => {
      return (
        <img src={params.value} alt={params.value} className="personImage" />
      );
    },
  },
  { field: "first_name", headerName: "First Name", width: "150" },
  { field: "last_name", headerName: "Last Name", width: "150" },
  // {
  //   field: "address",
  //   headerName: "address",
  //   width: "150",
  //   renderCell: (params) => {
  //     return (
  //       <div>
  //         <p>{params.value.street}</p>
  //         <p>{params.value.city}</p>
  //         <p>{params.value.zip}</p>
  //       </div>
  //     );
  //   },
  // },
  { field: "dob", headerName: "DOB", width: "150" },
  // add age column with dynamic age value
];

export const dataRows = [
  {
    id: 2565,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    first_name: "Oona",
    last_name: "Brisley",
    dob: "05/07/1971",
    gender: "Female",
    email: "obrisley0@usgs.gov",
    house_number: 73,
    street_name: "Lake View",
    city: "Vitomarci",
    date_from: "19/05/2021",
    date_to: "16/06/2021",
    officer: 1185,
    approved: true,
  },
  {
    id: 72555,
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    first_name: "Heath",
    last_name: "Bartlam",
    dob: "22/09/1985",
    gender: "Female",
    email: "hbartlam1@homestead.com",
    house_number: 63,
    street_name: "Delladonna",
    city: "Morrelgonj",
    date_from: "15/05/2021",
    date_to: "21/05/2021",
    officer: 1718,
    approved: true,
  },
  {
    id: 52262,
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    first_name: "Lynna",
    last_name: "Craufurd",
    dob: "01/10/1998",
    gender: "Female",
    email: "lcraufurd2@narod.ru",
    house_number: 34,
    street_name: "Riverside",
    city: "Belmopan",
    date_from: "18/07/2021",
    date_to: "25/03/2022",
    officer: 4831,
    approved: false,
  },
  {
    id: 22155,
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    first_name: "Cornelius",
    last_name: "Sparshott",
    dob: "16/09/1980",
    gender: "Polygender",
    email: "csparshott3@ifeng.com",
    house_number: 41,
    street_name: "1st",
    city: "Choloma",
    date_from: "05/06/2021",
    date_to: "23/11/2021",
    officer: 2202,
    approved: false,
  },
  {
    id: 6200,
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    first_name: "Chrisy",
    last_name: "Koppens",
    dob: "05/06/1985",
    gender: "Male",
    email: "ckoppens4@theatlantic.com",
    house_number: 37,
    street_name: "Alpine",
    city: "Itaúna",
    date_from: "18/08/2021",
    date_to: "20/09/2021",
    officer: 2703,
    approved: false,
  },
  {
    id: 11039,
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    first_name: "Belvia",
    last_name: "Polsin",
    dob: "16/07/1983",
    gender: "Female",
    email: "bpolsin5@fema.gov",
    house_number: 21,
    street_name: "Melrose",
    city: "Qalqaman",
    date_from: "11/04/2021",
    date_to: "23/10/2021",
    officer: 3259,
    approved: false,
  },
  {
    id: 99884,
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    first_name: "Berna",
    last_name: "Skoyles",
    dob: "25/08/1951",
    gender: "Female",
    email: "bskoyles6@seattletimes.com",
    house_number: 44,
    street_name: "Butternut",
    city: "Cikupa",
    date_from: "28/12/2021",
    date_to: "25/02/2022",
    officer: 2610,
    approved: false,
  },
  {
    id: 49679,
    image: "https://randomuser.me/api/portraits/men/79.jpg",
    first_name: "Ellery",
    last_name: "Skottle",
    dob: "30/11/1983",
    gender: "Male",
    email: "eskottle7@is.gd",
    house_number: 31,
    street_name: "Dryden",
    city: "Summerside",
    date_from: "16/04/2021",
    date_to: "04/07/2021",
    officer: 5440,
    approved: true,
  },
  {
    id: 28100,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    first_name: "Millicent",
    last_name: "Scrivener",
    dob: "26/08/1951",
    gender: "Female",
    email: "mscrivener8@nasa.gov",
    house_number: 36,
    street_name: "Prairieview",
    city: "Deshan",
    date_from: "22/02/2022",
    date_to: "17/11/2021",
    officer: 2514,
    approved: true,
  },
  {
    id: 30412,
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    first_name: "Kennie",
    last_name: "Haresnaip",
    dob: "29/09/1956",
    gender: "Male",
    email: "kharesnaip9@yelp.com",
    house_number: 86,
    street_name: "Westport",
    city: "Winnipeg",
    date_from: "02/06/2021",
    date_to: "13/12/2021",
    officer: 2087,
    approved: true,
  },
  {
    id: 46689,
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    first_name: "Myrwyn",
    last_name: "Dale",
    dob: "06/11/1965",
    gender: "Male",
    email: "mdalea@forbes.com",
    house_number: 80,
    street_name: "Annamark",
    city: "Shorko",
    date_from: "22/01/2022",
    date_to: "10/08/2021",
    officer: 3381,
    approved: false,
  },
  {
    id: 25177,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    first_name: "Kipper",
    last_name: "Tavinor",
    dob: "25/03/1961",
    gender: "Male",
    email: "ktavinorb@archive.org",
    house_number: 66,
    street_name: "Dahle",
    city: "Mammari",
    date_from: "30/12/2021",
    date_to: "31/08/2021",
    officer: 8075,
    approved: false,
  },
  {
    id: 52221,
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    first_name: "Juli",
    last_name: "Choupin",
    dob: "07/01/1981",
    gender: "Female",
    email: "jchoupinc@friendfeed.com",
    house_number: 7,
    street_name: "Everett",
    city: "Agiásos",
    date_from: "21/06/2021",
    date_to: "14/11/2021",
    officer: 1253,
    approved: false,
  },
  {
    id: 52530,
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    first_name: "Brittni",
    last_name: "Steeples",
    dob: "24/03/1986",
    gender: "Female",
    email: "bsteeplesd@liveinternet.ru",
    house_number: 84,
    street_name: "Montana",
    city: "Bánica",
    date_from: "25/04/2021",
    date_to: "14/04/2021",
    officer: 1205,
    approved: false,
  },
  {
    id: 15832,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    first_name: "Rebecka",
    last_name: "Fritz",
    dob: "18/10/1973",
    gender: "Female",
    email: "rfritze@networkadvertising.org",
    house_number: 89,
    street_name: "Donald",
    city: "Staryy Oskol",
    date_from: "28/12/2021",
    date_to: "20/02/2022",
    officer: 5706,
    approved: false,
  },
  {
    id: 13536,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    first_name: "Any",
    last_name: "Latimer",
    dob: "30/04/1957",
    gender: "Bigender",
    email: "alatimerf@tamu.edu",
    house_number: 99,
    street_name: "Forest",
    city: "Smolenka",
    date_from: "18/09/2021",
    date_to: "05/07/2021",
    officer: 3546,
    approved: false,
  },
  {
    id: 89380,
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    first_name: "Sidnee",
    last_name: "O'Feeny",
    dob: "19/01/1990",
    gender: "Male",
    email: "sofeenyg@blogger.com",
    house_number: 28,
    street_name: "Merchant",
    city: "Krujë",
    date_from: "26/08/2021",
    date_to: "08/03/2022",
    officer: 4479,
    approved: true,
  },
  {
    id: 24970,
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    first_name: "Sena",
    last_name: "Linneman",
    dob: "26/10/1968",
    gender: "Female",
    email: "slinnemanh@rambler.ru",
    house_number: 34,
    street_name: "Esker",
    city: "Maru",
    date_from: "21/08/2021",
    date_to: "13/09/2021",
    officer: 2001,
    approved: true,
  },
];