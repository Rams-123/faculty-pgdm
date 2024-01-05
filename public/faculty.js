// alumni testimonial

const facultyData = [
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-sapna.webp",
    fName: "Dr. Sapna Modi",
    fPosition: "Associate Dean - Academics",
    fexperienced: "28+ Years Experienced",
    fstudent: "1500+ Students Mentored",
    fdata1: "Ph.D., MMM",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-sankalp.webp",
    fName: "Dr. Sankalp Srivastava",
    fPosition: "HOD & Associate Professor - International Business",
    fexperienced: "17+ Years Experienced",
    fstudent: "5000+ Students Mentored",
    fdata1: "D.Phil, MBA (Corporate Management), MIMA, MCM",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/prof-krupesh.webp",
    fName: "Prof. Krupesh Thakkar",
    fPosition: "HOD & Assistant Professor - FinTech and Financial Markets",
    fexperienced: "18+ Years Experienced",
    fstudent: "500+ Students Mentored",
    fdata1:
      "Pursuing Ph.D, MMS (Finance), CFA(CFA, US), PGD in Foreign Trade, DBF",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-snigdharani.webp",
    fName: "Dr. Snigdharani Mishra",
    fPosition: "Professor, Registrar - Department of HR",
    fexperienced: "28+ Years Experienced",
    fstudent: "15000+ Students Mentored",
    fdata1:
      "Ph.D. , M.Phil., Masters in Peersonal Management and Industrial Relations, L.L.B",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-kalpana.webp",
    fName: "Dr. Kalpana Kumaran",
    fPosition: "HOD & Associate Professor - Digial Marketing & Transformation",
    fexperienced: "21+ Years Experienced",
    fstudent: "5000+ Students Mentored",
    fdata1: "Ph.D. (Digital Entrepreneurship), MCA, M.E.(Computer Science)",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-ca-pinky.webp",
    fName: "Dr. CA Pinky Agarwal",
    fPosition: "HOD - Finance, HOD - Centre for Policy Studies",
    fexperienced: "25+ Years Experienced",
    fstudent: "1500+ Students Mentored",
    fdata1: "Chartered Accountant with Doctoral Degree in Commerce",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-deepthy.webp",
    fName: "Dr. Deepthy Raghavendra",
    fPosition: "L&D Head - ITM Business School",
    fexperienced: "25+ Years Experienced",
    fstudent: "10000+ Students Mentored",
    fdata1: "Ph.D., M.Sc., MMM",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-rachna.webp",
    fName: "Dr. Rachna Nigam",
    fPosition: "GM - Corporate Relations & HR",
    fexperienced: "25+ Years Experienced",
    fstudent: "10000+ Students Mentored",
    fdata1: "Ph.D., (Mumbai University), MBA (HR), MHRDM",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-arpita.webp",
    fName: "Dr. Arpita Pandey",
    fPosition: "HOD - RMM Head, Entrepren. Cell & Incubation Centre",
    fexperienced: "24+ Years Experienced",
    fstudent: "5000+ Students Mentored",
    fdata1: "Ph.D., MBA, Finance, PGDM - EM, PGC - RM, Bsc",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-sangeeta.webp",
    fName: "Dr. Sangeeta Trott",
    fPosition: "HOD - Research & Decision Sciences",
    fexperienced: "21+ Years Experienced",
    fstudent: "10000+ Students Mentored",
    fdata1: "Ph.D., MBA, Gold Medalist in PGDM",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-bv.webp",
    fName: "Dr. B V Jayanthi",
    fPosition: "HOD - Associate Professor - Marketing",
    fexperienced: "18+ Years Experienced",
    fstudent: "2000+ Students Mentored",
    fdata1: "Ph.D., MBA, M.Phil",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/prof-uma.webp",
    fName: "Prof Uma Ghosh",
    fPosition: "Asst. Professor-Finance, Quality Assurance",
    fexperienced: "17+ Years Experienced",
    fstudent: "16000+ Students Mentored",
    fdata1: "M.Com, B.Com,(Ranchi University Bihar)",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/prof-vijayanta.webp",
    fName: "Prof. Vijayanta Pawase",
    fPosition: "Assistant Professor & Area Coordinator - Dept. of Economics",
    fexperienced: "16+ Years Experienced",
    fstudent: "13000+ Students Mentored",
    fdata1: "Master in Financial Management (MFM), MA(Economics)",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-preeti.webp",
    fName: "Dr. Preeti Narendra",
    fPosition: "HOD - Human Resource & Head Wellness Centre",
    fexperienced: "15+ Years Experienced",
    fstudent: "5000+ Students Mentored",
    fdata1:
      "Ph.D., Masters in Personal Management and Industrial Relations, Bachelor in Economics",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-nutan.webp",
    fName: "Dr. Nutan Kanik",
    fPosition: "Assistant Professor - Department of HR",
    fexperienced: "15+ Years Experienced",
    fstudent: "400+ Students Mentored",
    fdata1: "Ph.D., Bsc, PGDM, MPM",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/prof-chitra.webp",
    fName: "Prof. Chitra Kampani",
    fPosition: "AGM - Training - Talewind",
    fexperienced: "14+ Years Experienced",
    fstudent: "5000+ Students Mentored",
    fdata1: "MBA, M.A., B.Ed.",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/seemita.webp",
    fName: "Seemita Bosh Chowdhury",
    fPosition:
      "Assistant Professor & Area Coordinator - FinTech & Financial Markets",
    fexperienced: "14+ Years Experienced",
    fstudent: "1500+ Students Mentored",
    fdata1: "M.A. & M. Phil.",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/prof-yogita.webp",
    fName: "Prof. Yogita Rawat",
    fPosition:
      "Asst. Professor & Area Coordinator - Digital Marketing & Transformation",
    fexperienced: "13+ Years Experienced",
    fstudent: "500+ Students Mentored",
    fdata1: "Pursuing Ph.D., MCA, M.Tech",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/dr-durba.webp",
    fName: "Dr. Durba Chakrabarty",
    fPosition: "Associate Professor",
    fexperienced: "12+ Years Experienced",
    fstudent: "5000+ Students Mentored",
    fdata1: "Ph.D., M.Phil., Master and Bachelors in Economics",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/prof-gayatri.webp",
    fName: "Prof. Gayatri Kaple",
    fPosition: "Professor - Operations & Supply Chain Management",
    fexperienced: "7+ Years Experienced",
    fstudent: "100+ Students Mentored",
    fdata1: "MBA (Operations & Supply Chain), M.Tech., B.Tech.",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/prof-shrilaja.webp",
    fName: "Prof. Shrilaja Palur",
    fPosition: "Assistant Professor - Lifestyle Management & CSI",
    fexperienced: "27+ Years Experienced",
    fstudent: "300+ Students Mentored",
    fdata1: "Ph.D., D.(Persuing), MA (Yogashastra), B. Com, YTTC",
  },
  {
    Id: 1,
    fImg: "https://itm.edu/faculty/pgdm/assets/faculties-img/prof-vasantha.webp",
    fName: "Prof. Vasantha Lakshmi Patibandla",
    fPosition: "Area Coordinator - International Business",
    fexperienced: "18+ Years Experienced",
    fstudent: "4000+ Students Mentored",
    fdata1: "Fellow (HR & OD), LL M, MBA",
  },
];

let output = facultyData.map(showData).join("");
let list = document.getElementById("list");
list.innerHTML = output;

function showData(facultyData) {
  let listItems = `
  <li
  class="relative grid grid-cols-1 md:grid-cols-2 md:w-96 text-xs gap-1 px-3 py-3 w-80 border border-gray-300 hover:border-brand-red cursor-pointer transition-all group hover:shadow-md group  h-auto  rounded-md items-center justify-center max-w-sm ">
  <div class="flex flex-col w-full rounded-md  border border-gray-300">
      <div class="flex w-full rounded-md shimmer-effect2">
          <img src=${facultyData.fImg}
              class="flex w-full object-contain rounded-md" alt="">
      </div>
      <div class="flex flex-col px-2 py-3 w-full">
          <h4 class="flex w-full text-center items-center justify-center text-brand-red">${facultyData.fName}
          </h4>
      </div>
  </div>
  <div class="flex w-full h-full pl-5 rounded-md ">
      <ul class="flex flex-col w-full justify-around list-outside  gap-2">
          <li class="list-disc">${facultyData.fPosition}</li>
          <li class="list-disc">${facultyData.fdata1}</li>
          <li class="list-disc"> ${facultyData.fstudent}  </li>
          <li class="list-disc"><strong>Experienced : </strong>${facultyData.fexperienced}&nbsp;</li>
      </ul>
  </div>
</li>
    `;
  return listItems;
}
